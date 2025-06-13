import React from 'react';
import './GreetCard.css';

function GreetingCard(props){
    // console.log(name, 'name')
    return (
        <div className='card'>
            <h2>
            <h2> <span>Congratulations,</span> {props.name}</h2>
            <p> you have finally made it to your {props.age} age </p>
            <p> {props.school} would love to wish you the best</p>
            <p>And more years at {props.address}</p> 
        </h2>
        </div>
        
    );
}

export default GreetingCard;