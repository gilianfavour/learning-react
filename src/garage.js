import React from "react";
import './Garage.css';

function Garage(props) {
  const cars = props.cars;
  console.log('Cars array:', cars);
  console.log('Cars length:', cars.length);


  return (
    
    
    <div className="garage-box">
      <h1 className="garage-title">Garage</h1>
      {cars.length > 0 ? (
        <h3 className="garage-count">You have {cars.length} cars in your garage.</h3>
      ) : (
        <h3 className="garage-count">No cars in your garage.</h3>
      )}
    </div>
  );
}

export default Garage;