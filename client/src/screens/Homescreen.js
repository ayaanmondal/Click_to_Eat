import React, {useState, useEffect} from 'react'
import { useDispatch, useSelect } from 'react-redux'
import { getAllfoods } from '../actions/foodActions'
import Food from '../components/Food'
import foods from '../fooddata'
export default function Homescreen() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllfoods())
    }, [])
    return (
        <div>
            <div className="row">
                {foods.map(food=>{
                    return <div className="col-md-4 p-4">
                        <div className="m-4 shadow-lg p-5 mb-5 bg-body rounded">
                            <Food food={food}/>
                        </div>
                    </div>
                })}
            </div>
            
        </div>
    )
}
