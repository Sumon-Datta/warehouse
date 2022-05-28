import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { Form } from "react-bootstrap";
const ProductDetail = () => {
  const { carServiceId } = useParams();
  const [carUsers, setCarUsers] = useState({});
  // const [items,setItems] = useState({});
  useEffect(() => {
    const url = `http://localhost:7000/cars/${carServiceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarUsers(data));
  }, [carServiceId]);

  const updateButton = (event) => {
    event.preventDefault();
    const count = event.target.stock.value;
    console.log(count);
    const newQuantity = parseInt(count) + parseInt(carUsers.quantity);
    console.log(newQuantity);
    const url = `http://localhost:7000/cars/${carServiceId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({newQuantity}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setCarUsers({...carUsers, quantity:newQuantity})
        alert(" Quantity update");
        event.target.reset();
      });
  };

  const addDecreaseHandle = (event) =>{
    // const count = event.target.stock.value;
    // console.log(count);
    const newQuantity = parseInt(carUsers.quantity) - 1;
    console.log(newQuantity);
    const url = `http://localhost:7000/cars/${carServiceId}`;
    
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({newQuantity}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setCarUsers({...carUsers, quantity:newQuantity})
        event.target.reset();
      });
  
  };
  return (
    <div className="product_details">
      <div className="detail_img">
        <img src={carUsers.images} alt="img" />
      </div>
      <div className="details_info">
        <h4 className="details_name">{carUsers.name}</h4>
        <p className="details_description">{carUsers.description}</p>
        <p className="details_price">Price : ${carUsers.price}</p>
        <p className="details_quantity">
          Quantity : {carUsers.quantity} products
        </p>
        <p className="details_supplier">
          Supplier Name : {carUsers.supplier_name}
        </p>
        <p className="details_sold">Sold :{carUsers.Sold} products</p>
      </div>
      <div className="details_button">
        <button onClick={() => addDecreaseHandle(carServiceId)}>Delivered</button>
      </div>

      <div>
        <form className="details_form" onSubmit={updateButton}>
          <input type="text" name="stock" />
          <input type="submit" value="stock" className="detail_submit" />
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
