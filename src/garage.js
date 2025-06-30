import React from "react";

function Garage(props) {
  const cars = props.cars;
  console.log('Cars array:', cars);
  console.log('Cars length:', cars.length);


  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h3>You have {cars.length} cars in your garage.</h3>
      }
    </> );
}

export default Garage;