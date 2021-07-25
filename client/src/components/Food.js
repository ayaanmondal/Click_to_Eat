import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from "../actions/cartActions";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Food({ food }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

  function addtocart(){
    dispatch(addToCart(food, quantity, varient))
    toast.dark("Item Added to Cart 🔥🔥", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
  }
  return (
    <div>
      <div onClick={handleShow}>
        <h1>{food.name}</h1>
        <img
          src={food.image}
          className="img-fluid"
          height="200"
          width="200"
        ></img>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Varients</p>
          <select
            className="from-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {food.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="m-1 w-100">
          <p>Quantity</p>
          <select
            className="from-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-4">
            Price: <text>{"\u20B9"}</text> {food.prices[0][varient] * quantity}
          </h1>
        </div>

        <div className="m-1 w-100">
          <button className="btn mt-3" onClick={addtocart}>Add To Cart</button>
        </div>
      </div>

      <Modal className="row justify-content-center" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{food.name}</Modal.Title>
          <button onClick={handleClose}>X</button>
        </Modal.Header>

        <Modal.Body>
          <img
            src={food.image}
            className="img-fluid"
            height="400"
            width="300"
          ></img>
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
}
