import React from 'react'
import logo from '../Icons/logo.png'
import '../App.css'
import offers from '../Icons/offers.png';
import history from '../Icons/history.png';
import logini from '../Icons/User.png';
import search from '../Icons/searchicon.png';
import pic1 from '../Icons/pic1.jpg';
import pic2 from '../Icons/pic2.jpg';
import pic3 from '../Icons/pic3.jpg';
import pic4 from '../Icons/pic4.jpg'
import Hotels from './Hotels';
import { useNavigate,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";

function Dashboard() {
  
  let navigate = useNavigate();
  let params=useParams();
  const [data, setData] = useState([]);
  //console.log(data)
  useEffect(() => {
    hotelData();
  },[]);
  let hotelData = async () => {
    try {
      const res = await axios.get(`/hotels/${params.id}`);
      //console.log(res.data)
      
     if(res.data[0]){
        setData(res.data);
    }else{
       alert("Below 3 Locations Only Available and serach in LOWERCASE")
        navigate("/")
       }
    } catch (error) {
      console.log(error);
    }
  };

  let login = () => {
    if(localStorage.getItem("react_app_token")){
      localStorage.removeItem("react_app_token");
       alert("logout")
      
      navigate("/");
    }else{
       navigate("/login");
      }
 }

  return (
    <div className='row'>
        <div className='col-lg-12'>
            <div className='navbar'>
                
            <img src={logo} alt="logo" className='logo'/>
            <h5>Location:<b>{`${params.id}`}</b></h5>
        
            <div className='naveitems'>
                <div>
                    <img src={search} alt='img' className="naveitemimg"/><label><b>Search</b></label>
                <input className='form-control' placeholder='Hotels'></input></div>
               <h5><img src={offers} alt='img' className='naveitemimg'/>'Offers</h5>
               <h5><img src={history} alt='img' className='naveitemimg'/>Help</h5>
               <h5><img src={logini} alt='img' className='naveitemimg' onClick={()=>login()}/>LogIn</h5>
            </div>
            </div>
            
        </div>
        {/* items */}
        <div className='col-lg-12 items'>
         
        <div>
        <img src={pic1} alt='img' className='pic'/>
        <p>50% Offer</p></div>
        <div><img src={pic2} alt='img' className='pic'/>
        <p>50% Offer</p></div>
        <div><img src={pic3} alt='img' className='pic'/>
        <p>50% Offer</p></div>
        <div><img src={pic4} alt='img' className='pic'/>
        <p>50% Offer</p></div>
        
        </div>
        <div className='col-lg-12'>
         <h3>Restarants</h3>  
         <div className='hoteldiv'>
         {
          data.map((input)=>{
            return <Hotels data={input}/>;
          })
         }
         </div>
        </div>
    </div>
  )
}

export default Dashboard