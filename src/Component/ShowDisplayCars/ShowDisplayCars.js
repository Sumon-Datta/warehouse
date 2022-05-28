import React from "react";
import "./ShowDisplayCars.css";
import { useNavigate } from "react-router-dom";
const ShowDisplayCars = ({ carService }) => {
  const { _id, images, name, description, price, quantity, supplier_name } =
    carService;
  const navigate = useNavigate();

  const updateWithId = (_id) => {
    navigate(`/carService/${_id}`);
  };
  return (
  <div>
    <div className="show_display_area">
      <div className="show_img">
        <img src={images} alt="" />
      </div>
      <div className="displayCars">
        <h4 className="name">{name}</h4>
        <p  className="description">{description}</p>
        <p  className="price">Price : ${price}</p>
        <p  className="quantity">Quantity : {quantity} products</p>
        <p  className="supplier">Supplier Name : {supplier_name}</p>
      </div>
      <div>
        <button onClick={() => updateWithId(_id)} className="display_button">update</button>
      </div>
    </div>
  </div>
  );
};

export default ShowDisplayCars;
