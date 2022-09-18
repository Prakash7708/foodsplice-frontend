import React from 'react';
import logo from '../Icons/logo.png'
import '../App.css'
import offers from '../Icons/offers.png';
import history from '../Icons/history.png';
import login from '../Icons/User.png';
import search from '../Icons/searchicon.png';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from '../axios';



function Adminhome() {
  const navigate = useNavigate()
  
  const formik = useFormik({
    initialValues: {
      hotelname: "",
      location:"",
      hotelrating: "",
      hotelprice:"",
      hoteloffers:"",
      foodrating: "",
      foodprice:"",
      foodoffers:"",
      imgfood:"",
      foodname:"",
    },
    onSubmit: async (values) => {
      //console.log(values)
      if(values.img){
      try {
         await axios.post(`/hotel`, values);
       // alert("hotel");
       // navigate("/Userslogin");
      } catch (error) {
        console.log(error);
      }}else{
         await axios.post(`/food`, values);
      }
    },
  });
  let logout = () => {
    navigate("/")
 }
  
  return (

<div className='row'>
        <div className='col-lg-12'>
    <div className='navbar'>      
    <img src={logo} alt="logo" className='logo'/>
    <h5>Admin:<b>Login</b></h5>

    <div className='naveitems'>
        <div>
            <img src={search} alt='img' className="naveitemimg"/><label><b>Search</b></label>
        <input className='form-control' placeholder='Create'></input></div>
       <h5><img src={offers} alt='img' className='naveitemimg'/>'Offers</h5>
       <h5><img src={history} alt='img' className='naveitemimg'/>Help</h5>
       <h5><img src={login} alt='img' className='naveitemimg' onClick={()=>logout()}/>Logout</h5>
    </div>
    </div>
    </div>
    <div className='col-lg-12'>
      <div className='row'>
      <div className='col-lg-6 createhotel'><h3>Create Hotels</h3>
      <form onSubmit={formik.handleSubmit}>
      <div className="row admintable">
          <div className="col-lg-12">
            <label>Hotelname</label>
            <input type={"text"} placeholder={"Hotelname"} className={"form-control"} name={"hotelname"}value={formik.values.hotelname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Hotel Rating</label>
            <input type={"text"} placeholder={"Rating"} className={"form-control"} name={"hotelrating"}value={formik.values.hotelrating}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Hotel Price</label>
            <input type={"text"} placeholder={"Price"} className={"form-control"} name={"hotelprice"}value={formik.values.hotelprice}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Hotel Offers</label>
            <input type={"text"} placeholder={"Offers"} className={"form-control"} name={"hoteloffers"}value={formik.values.hoteloffers}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Location</label>
            <input type={"text"} placeholder={"Location"} className={"form-control"} name={"location"}value={formik.values.location}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>IMG</label>
            <input type={"text"} placeholder={"img url"} className={"form-control"} name={"img"}value={formik.values.img}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12 mt-2">
            <input type={"submit"} className={"btn btn-warning form-control"}/>
          </div>
          </div>
      </form>
      </div>

      {/* left side data */}
      <div className='col-lg-6 createhotel'><h3>Create Foods</h3>
      <form onSubmit={formik.handleSubmit}>
      <div className="row admintable">
      <div className="col-lg-12">
            <label>Food Name</label>
            <input type={"text"} placeholder={"food name"} className={"form-control"} name={"foodname"}value={formik.values.foodname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Hotelname</label>
            <input type={"text"} placeholder={"Hotelname"} className={"form-control"} name={"hotelname"}value={formik.values.hotelname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Food Rating</label>
            <input type={"text"} placeholder={"foodrating"} className={"form-control"} name={"foodrating"}value={formik.values.foodrating}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Food Price</label>
            <input type={"text"} placeholder={"foodprice"} className={"form-control"} name={"foodprice"}value={formik.values.foodprice}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Food Offers</label>
            <input type={"text"} placeholder={"foodoffers"} className={"form-control"} name={"foodoffers"}value={formik.values.foodoffers}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>IMG</label>
            <input type={"text"} placeholder={"img url"} className={"form-control"} name={"imgfood"}value={formik.values.imgfood}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12 mt-2">
            <input type={"submit"} className={"btn btn-warning form-control"} />
          </div>
          </div>
      </form>
        </div></div>
    </div>
    </div>
  )
}

export default Adminhome