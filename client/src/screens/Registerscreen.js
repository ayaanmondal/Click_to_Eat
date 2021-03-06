import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from "../actions/userAction";
import { Link } from 'react-router-dom';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector(state => state.registerUserReducer)
  const {error, loading, success} = registerstate

  const dispatch = useDispatch()
  function register(){
    const emailregex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (name.length < 1) {
    alert("Empty user name");
  } else if (!emailregex.test(String(email).toLowerCase())) {
    alert("Enter A Valid Mail");
  } else if (password !== cpassword) {
    alert("Passwords Not Matched");
  } else if (password.length < 4) {
    alert("Use a minimum password length of 4 characters or greater");
  } 
    else{
        const user={
            name,
            email,
            password
        }
        console.log(user);
        dispatch(registerUser(user))
        toast.success('🦄 Registration Successfull !', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

        toast.info('Log in Now !', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">

          {loading && (<Loading/>)}
          {success && (<Success success='User Register Successfully'/>)}
          {error && (<Error error='Email already registerd'/>)}
          <h2 style={{ fontSize: "35px" }}>Register</h2>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
            ></input>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
            ></input>
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
            ></input>
            <input
              required
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e)=>{setcpassword(e.target.value)}}
            ></input>
            <button onClick={register} className="btn mt-3 mb-3">REGISTER</button>
            <br></br>
            <Link style={{color:'blue',outline:'none',textDecoration: 'none'}} className="m-2" to="/login">Login</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
