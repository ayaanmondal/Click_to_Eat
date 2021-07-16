import React from 'react'
import Food from '../components/Food'
import foods from '../fooddata'
export default function Homescreen() {
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
