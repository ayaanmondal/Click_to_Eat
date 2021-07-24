import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from "../actions/userAction";

export default function Navbar() {
  const cartstate = useSelector(state=>state.cartReducer)
  const userstate = useSelector(state=>state.loginUserReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
           <img src="https://img.icons8.com/color/96/000000/food-cart.png" width="40" height="30"></img>
            Click to Eat
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">

              {currentUser ? (
                <div className="dropdown">
                <a className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {currentUser.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Orders</a></li>
                  <li><a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a></li>
                </ul>
              </div>
              ) : (
                <li className="nav-item">
                <Link to="/login" className="nav-link" aria-current="page">
                  Login
                </Link>
              </li>
              )}
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart ({cartstate.cartItems.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
}