import React from "react";
import "./ShowManageCars.css";
import { useNavigate } from "react-router-dom";
import UseCars from "../useCars/useCars";
//import axios from "axios";
//import { toast } from "react-toastify";
const ShowManageCars = ({ carService }) => {
  const { _id, images, name, description, price, quantity, supplier_name } =
    carService;
    const [cars, setCars] = UseCars();
  const navigate = useNavigate();

  const updateWithId = (_id) => {
    navigate(`/carService/${_id}`);
  };


  const deleteButton = (id) => {
    const proceed = window.confirm("Are you sure ? you want to delete");
    if (proceed) {
      console.log("delete", id);

      const url = `http://localhost:7000/cars/${id}`;

      fetch(url, {
        method : 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
            const stay = cars.filter(car => car._id !== id)
            setCars(stay);
            console.log(stay);
        });
    }
 
  };
  return (
    <div>
      <div className="show_manage_area">
        <div className="manage_detail">
          <img src={images} alt="" />
        </div>
        <div className="manage_area">
          <h4 className="manage_name">{name}</h4>
          <p className="manage_description">{description}</p>
          <p className="manage_price">Price : ${price}</p>
          <p className="manage_quantity">Quantity : {quantity}</p>
          <p className="manage_supplier">Supplier : {supplier_name}</p>
        </div>
        <div className="manage_delete">
          <button onClick={() => deleteButton(_id)}>delete</button>
        </div>
        <div className="manage_update">
          <button onClick={() => updateWithId(_id)}>Stock update</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ShowManageCars;
