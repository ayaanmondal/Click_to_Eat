import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3 mt-1">
                    <input type="text" className="from-control w-100" placeholder="search foods"></input>
                </div>
                <div className="col-md-3 mt-2">
                    <select className="form-control w-100">
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non-Veg</option>
                    </select>
                </div>
                <div className="col-md-3 mt-2">
                    <button className="btn w-100">FILTER</button>
                </div>
            </div>
        </div>
    )
}
