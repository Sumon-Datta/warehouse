import React from "react";
import './AddCarProduct.css'
import { useForm } from "react-hook-form";

const AddCarProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
    const url = `http://localhost:7000/cars`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Product Added successfully");
      
      });
  };
  return (
    <div className="add_car_product">
      <div>
        <h1 className="add_item">Add Items</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form_section">
        <div>
        <input
          placeholder="name"
          className="input"
          type="name"
          {...register("name")}
        />
        </div>
       <div>
       <input
          placeholder="description"
          className="input"
          {...register("description")}
        />
       </div>
       <div>
       <input
          placeholder="price"
          className="input"
          type="number"
          {...register("price")}
        />
       </div>
       <div>
       <input
          placeholder="quantity"
          className="input"
          type="number"
          {...register("quantity")}
        />
       </div>
      <div>
      <input
          placeholder="name"
          className="input"
          type="name"
          {...register("supplier_name")}
        />
      </div>
      <div>
      <input
          placeholder="sold"
          className="input"
          type="number"
          {...register("sold")}
        />
      </div>
       <div>
       <input
          placeholder="Photo URL"
          className="input "
          type="text"
          {...register("images")}
        />
       </div>
        <input type="submit" value="Add Item" className="submit"/>
      </form>
    </div>
  );
};

export default AddCarProduct;
