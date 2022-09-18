import React from 'react'
import Food from "../Icons/food.jpg";
import '../App.css'
import {useNavigate } from "react-router-dom";
//import { useFormik } from "formik";
function Home() {
  let navigate = useNavigate();
let a=""

  let locate = (id) => {
     a=id
  }
  let enter = () => {
     navigate(`/dashboard/${a}`)
  }


  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //     location:"",
  //   },
  //   onSubmit: async (values) => {
  //     alert(values.location)
  //   }});

  return (
    <div className='containe'>
      
      <div className='row'>
        <div className='col-lg-6 home'>
        <h1>SpliceFood</h1>
          {/* <form onSubmit={formik.handleSubmit}> */}
          <form>
          <div className='search'>
            <input className='form-control search' placeholder='Enter Location' onChange={(e) => locate(e.target.value)}></input>
   <button className={"btn btn-warning form-control"} onClick={enter}>Find Food</button>
   </div>
  <p></p>
            <p>Now available Locations:</p>
            <ul>
              <li>chennai</li>
              <li>trichy</li>
              <li>madhurai</li>
            </ul>
          </form>
          </div>
        
        <div className='col-lg-6 container'>
          <img src={Food} alt='img' className='frontimg'/>
        </div>
      </div>
    </div>
  )
}

export default Home