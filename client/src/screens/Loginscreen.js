import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import { Link, Redirect } from 'react-router-dom';

import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginstate = useSelector(state => state.loginUserReducer)
  const {error, loading, success} = loginstate

  const dispatch = useDispatch();

  useEffect(() => {
      
    if(localStorage.getItem('currentUser')){

        window.location.href='/'
    }
      
  }, [])

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
    toast.info('🔥🔥 Login Successfull !', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
  }
  return (
    <div>
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mt-5">

          {loading && (<Loading/>)}
          {success && (<Success success='User Login Successfully'/>)}
          {error && (<Error error='Login Fail !! Invalid Credentials'/>)}

            <h2 style={{ fontSize: "35px" }}>LOGIN</h2>
            <div>
              <input
                required
                type="text"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              ></input>
              <input
                required
                type="text"
                placeholder="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
              <button onClick={login} className="btn mt-3 mb-2">
                SIGNIN
              </button>
              <br></br>
              <Link to="/register"style={{color:'blue',outline:'none',textDecoration: 'none'}} className="m-2">Register</Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
