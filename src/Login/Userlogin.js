import React from "react";
import "./login.css";
import { useFormik } from "formik";
import { Link, useNavigate} from "react-router-dom";
import axios from "../axios";

//import { useState } from "react";

function Userlogin() {
  const navigate = useNavigate();
  //let params=useParams();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {

      try {
        let a = "admin";
        let b = "1234";
        if ((values.username ===a) & (values.password ===b)) {
          navigate("/admin");
        } else {
         const login = await axios.post(`login`, values);
          if(login.data.token){  
          localStorage.setItem("react_app_token", login.data.token);
          navigate("/");
         }else{
          alert(login.data.message)
          navigate("/");
         }
        }}
       catch (error) {
        console.log(error);
      }
    },
  });

  return (
   <>

    <div className="login">
      <h1>SpliceFood</h1>
      <div>
        <div className="container1">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <label>Username</label>
                <input
                  type={"text"}
                  placeholder={"Username"}
                  className={"form-control"}
                  name={"username"}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-lg-12">
                <label>Password</label>
                <input
                  type={"text"}
                  placeholder={"Password"}
                  className={"form-control"}
                  name={"password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-lg-12 mt-2">
                <input
                  type={"submit"}
                  className={"btn btn-dark form-control"}
                />
              </div>
              <p>
                Dont have account? <Link to={"/register"}>Sign-in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}

export default Userlogin;