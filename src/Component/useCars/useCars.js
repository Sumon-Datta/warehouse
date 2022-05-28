//import React from 'react';
import { useEffect, useState } from "react";
const UseCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7000/cars")
          .then((res) => res.json())
          .then((data) => setCars(data));
      }, []);
    
      return [cars , setCars];
    };

export default UseCars;