import React, {useState} from "react";

export default function Food({ food }) {
    const [ quantity, setquantity] = useState(1)
    const [ varient, setvarient] = useState('small')
  return (
    <div>
      <h1>{food.name}</h1>
      <img
        src={food.image}
        className="img-fluid"
        height="200"
        width="200"
      ></img>

      <div className="flex-container">
        <div className="m-1 w-100">
            <p>Varients</p>
            <select className="from-control" value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
            {food.varients.map(varient =>{
                return <option value={varient}>{varient}</option>
            })}
            </select>
        </div>
        <div className="m-1 w-100">
            <p>Quantity</p>
            <select className="from-control" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(10).keys()].map((x, i)=>{
                    return <option value={i+1}>{i+1}</option>
                })}
            </select>
        </div>
      </div>

      <div className="flex-container">

          <div className="m-1 w-100">
                <h1 className="mt-4">Price: <text>{'\u20B9'}</text> {food.prices[0][varient] * quantity}</h1>
          </div>

          <div className="m-1 w-100">
                <button className="btn mt-3">Add To Cart</button>
          </div>
      </div>
    </div>
  );
}
