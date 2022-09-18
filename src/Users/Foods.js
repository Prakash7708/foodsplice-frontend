import React from 'react'
import '../App.css';
import StripeCheckout from 'react-stripe-checkout';
//import {useNavigate} from "react-router-dom";
import axios from "../axios";

function Foods(props) {
  //let navigate = useNavigate();

  let makePayment =async () => {
    try {  
    
             await axios.post(`/payment`,props.data,{
          headers: {
            'Authorization': `${localStorage.getItem("react_app_token")}`
          }
        });
        // alert(res.data.message)
        
      } catch (error) {console.log(error)}
     
    
   // navigate(`/orders`)
  }
  return (
    <StripeCheckout name='product' amount={props.data.foodprice*100} currency='INR'
    stripeKey='pk_test_51LddhjSI5h877L4qnnk886Y8sUn2LDjaFvYEC55fbFmYD5fyezbaO6tMOKatgIIdrDXgIfLzY10MBRTjwQ1EsCOt00RaQ44Xv6'
    token={makePayment}>
    <div className='hotel'>
    <img src={`${props.data.imgfood}`}
    alt='img'
    className='hotelimg'/>
    <h4>{`${props.data.foodname}`}</h4>
    <button className='btn btn-warning'>Order Food</button>
    <div>
        <h6>Rating:{`${props.data.foodrating}`}</h6>
        <h6>Price:{`${props.data.foodprice}`}</h6>
        <h6>Offers:{`${props.data.foodoffers}`}</h6>
        
    </div>
    
    </div>
    </StripeCheckout>
  )
}

export default Foods