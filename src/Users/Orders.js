import React from 'react';
import axios from "../axios";
import { useEffect, useState } from "react";

function Orders() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  let fetchData = async () => {
    try {
     
      const res = await axios.get("/Orders",{
        headers: {
          'Authorization': `${localStorage.getItem("react_app_token")}`
        }}
      );
     
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
   
    <>
    <div className='orders'>
        <h3><b>Your Orders</b></h3>
        <table className="table table-striped table-dark">
  <thead className="thead-dark">
    <tr>
      <th scope="col">SHOPIFY Orders</th>
      <th scope="col">TransactionID</th>
      <th scope="col">Details</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((input)=>{
            return <tr>
            <th scope="row">➤</th>
            <th>{input._id}</th>
            {input ? <td>{input.foodname}</td>:<td>{input.foodname}</td> }
            <td>{input.foodprice}</td>
            <td><button className={input.allproducts ? "btn btn-success":"btn btn-warning"}>
                {input.allproducts ? "Shipped✔️":"30 min for delivery"}</button></td>
          </tr>
        })
    }
  </tbody>
</table>
    </div>

</>
  )
}

export default Orders