import React from "react";

function Car({ brand }) {
    return <li>
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
        <>
        <h2>Who lives in my garage</h2>
        <ul>
            {cars.map((car) => <Car key ={car.id} brand ={car.brand}/>)}
        </ul>
        </>
    )
}

export default ParkingList;