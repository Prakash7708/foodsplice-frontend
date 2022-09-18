import React from 'react'
import logo from '../Icons/logo.png'
import '../App.css'
import offers from '../Icons/offers.png';
import history from '../Icons/history.png';
import login from '../Icons/User.png';
import search from '../Icons/searchicon.png';
import pic1 from '../Icons/hotel.png';
import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import Foods from './Foods';
import { Link} from "react-router-dom";
function Hotelhome() {
  const [data, setData] = useState([]);
  let params=useParams();
  useEffect(() => {
    foodData();
  },);

  let foodData = async () => {
    try {
      const res = await axios.get(`/foods/${params.id}`);
      setData(res.data);
    }catch(err){
     console.log(err)
    }
  }

  return (
    <div className='row'>
    <div className='col-lg-12'>
    <div className='navbar'>
        
    <img src={logo} alt="logo" className='logo'/>
    <h5>hotel:<b>{params.id}</b></h5>

    <div className='naveitems'>
        <div>
            <img src={search} alt='img' className="naveitemimg"/><label><b>Search</b></label>
        <input className='form-control' placeholder='Foods'></input></div>
       <h5><img src={offers} alt='img' className='naveitemimg'/>'Offers</h5>
       <h5><img src={history} alt='img' className='naveitemimg'/>Help</h5>
       <Link to={'/orders'}><h5 className='link'><img src={login} alt='img' className='naveitemimg'/>Your Orders</h5></Link>
    </div>
    </div>
    
</div>
  {/* hotel */}
  <div className='col-lg-12 hoteldetails'>
    <div className='row'>
      <div className='col-lg-4 hdimg'><img src={pic1} alt='img' className='hdimg1'></img></div>
      <div className='col-lg-8 hdimg'>
        <h3>Hotel: {params.id}</h3>
        <h6>Offers will be shown below</h6>
        <h6>Prices range low - high</h6>
        <h6>Give Ratings for the hotel</h6>
      </div>
    </div>
  </div>
  {/* foods */}
  <div className='col-lg-12'>
    <div className='row'>
        <div className='col-lg-4 recom'>
          <p><b>Recommended</b></p>
          <p>North Indian</p>
          <p>Bevarages</p>
          <p>Hot Corners</p>
          <p>South Indian</p>
        </div>
        <div className='col-lg-8 foods'>
        {
          data.map((input)=>{
            return <Foods data={input}/>;
          })
         }
        </div>
    </div>
  </div>
</div>
  )
}

export default Hotelhome