import React from "react";
import "./CarServices.css";
//import { useState } from "react";
//import { useEffect } from "react";
import ShowDisplayCars from "../ShowDisplayCars/ShowDisplayCars";
import UseCars from "../useCars/useCars";
import { useNavigate } from "react-router-dom";

const CarServices = () => {
  const navigate = useNavigate();
  const [cars] = UseCars();
  return (
    <div className="">
      <div className="car_service_top_heading">
        <h1>Warehouse Product</h1>
        <p>
        Browse through the vast selection of vehicles that have recently been added to our inventory.

        </p>
      </div>
      <div className="car_service_area">
        {cars.slice(0, 6).map((carService) => (
          <ShowDisplayCars
            key={carService._id}
            carService={carService}
          ></ShowDisplayCars>
        ))}
      </div>
      <div className="car_service_button">
        <button onClick={() => navigate("/manageCars")} className="service_button">Manage Items</button>
      </div>
    </div>
  );
};

export default CarServices;
