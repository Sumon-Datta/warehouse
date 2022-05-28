import React from 'react';
import ShowManageCars from '../ShowManageCars/ShowManageCars';
import UseCars from "../useCars/useCars";

const ManageCars = () => {
    const [cars] = UseCars();
    return (
        <div>
          <div className="car_service">
      {cars.map((carService) => (
        <ShowManageCars
        key={carService._id} 
        carService={carService}>
        </ShowManageCars>
      ))}
    </div>
        </div>
    );
};

export default ManageCars;