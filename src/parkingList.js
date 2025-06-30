import React from "react";
import './ParkingList.css'

function Car({ brand }) {
    return <li className="car-item">
        {brand}
        </li>
}


function ParkingList(){
    const cars = [{
        id:1,
        brand: 'Ford'
    },
    {
        id:2,
        brand: 'BMW'
    },
    {
        id:3,
        brand: 'Audi'
    }]

    return(
        <div className="parj-conatiner">
            <h2 className="parking-title">Who lives in my garage</h2>
            <ul className="car-list">
                {cars.map((car) => <Car key ={car.id} brand ={car.brand}/>)}
            </ul>
        </div>
    )
}

export default ParkingList;