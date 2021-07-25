import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllfoods } from "../actions/foodActions";
import Food from "../components/Food";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";
//import foods from "../fooddata";
export default function Homescreen() {
  const dispatch = useDispatch();

  const foodsstate = useSelector((state) => state.getAllfoodsReducers);

  const { foods, error, loading } = foodsstate;
  useEffect(() => {
    dispatch(getAllfoods());
  }, []);
  return (
    <div>
      <Filter/>
      <div className="row justify-content-center">
        {loading ? (
        <Loading/>
        ) : error ? (
        <Error error="Loading Failed" />
        ) : (
            foods.map((food) => {
                return (
                  <div className="col-md-4 p-4" key={food._id}>
                    <div className="m-4 shadow-lg p-5 mb-5 bg-body rounded">
                      <Food food={food} />
                    </div>
                  </div>
                );
              })
        )}
      </div>
    </div>
  );
}
