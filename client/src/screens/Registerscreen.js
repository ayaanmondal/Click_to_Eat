import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from "../actions/userAction";
import { Link } from 'react-router-dom';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector(state => state.registerUserReducer)
  const {error, loading, success} = registerstate

  const dispatch = useDispatch()
  function register(){

    if(password!=cpassword){
        alert("Password not matched")
    }
    else{
        const user={
            name,
            email,
            password
        }
        console.log(user);
        dispatch(registerUser(user))
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
    </div>
  );
}
