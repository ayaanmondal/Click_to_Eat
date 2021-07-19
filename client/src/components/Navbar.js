import React from "react";
import {useSelector, useDispatch} from 'react-redux';
export default function Navbar() {
  const cartstate = useSelector(state=>state.cartReducer)
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           <img src="https://img.icons8.com/color/96/000000/food-cart.png" width="40" height="30"></img>
            Click to Eat
          </a>
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
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart ({cartstate.cartItems.length})
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}