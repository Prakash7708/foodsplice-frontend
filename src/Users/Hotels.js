import React from 'react'
import '../App.css';
import {useNavigate } from "react-router-dom";
function Hotels(props) {
  let navigate = useNavigate();
  let login = (id) => {
    if(localStorage.getItem("react_app_token")){
      //localStorage.removeItem("react_app_token");
       //alert("logout")
      
      navigate(`/hotel/${id}`);
    }else{
      alert("login to continue")
       //navigate("/login");
      }
 }
  return (
    <div className='hotel' onClick={()=>login(props.data.hotelname)}>
        <img src={`${props.data.img}`}
        alt='img'
        className='hotelimg'/>
        <h4>{`${props.data.hotelname}`}</h4>
        
        <div>
            <h6>Rating:{`${props.data.hotelrating}`}</h6>
            <h6>Price:{`${props.data.hotelprice}`}</h6>
            <h6>Offers:{`${props.data.hoteloffers}`}</h6>
        </div>
        
        </div>
  )
}

export default Hotels