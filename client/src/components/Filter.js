import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterfoods } from '../actions/foodActions';

export default function Filter() {
    const dispatch = useDispatch()
    const[searchkey, setsearchkey] = useState('')
    const[category, setcategory] = useState('all')
    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3 mt-1">
                    <input onChange={(e)=>{setsearchkey(e.target.value)}}
                     value={searchkey} type="text" className="from-control w-100" placeholder="search foods"></input>
                </div>
                <div className="col-md-3 mt-2">
                    <select className="form-control w-100" value={category} onChange={(e)=>setcategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non-Veg</option>
                    </select>
                </div>
                <div className="col-md-3 mt-2">
                    <button className="btn w-100" onClick={()=>{dispatch(getFilterfoods(searchkey, category))}}>FILTER</button>
                </div>
            </div>
        </div>
    )
}
