import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mt-5">
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
              <button onClick={login} className="btn mt-3">
                SIGNIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
