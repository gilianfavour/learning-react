import React from 'react';
import './App.css';
import GreetingCard from './GreetingCard';
import Goal from './goal';
import Garage from './garage';
import ParkingList from './parkingList';
import LoginForm from './loginForm';
import MessageForm from './messageForm';
import SelectForm from './selectForm';

import './GreetCard.css';
import './Goal.css';
import './Garage.css';
import './ParkingList.css';
import './LoginForm.css';
import './MessageForm.css';
import './SelectFruit.css';



function App() {
  
  return (
    <div className="appContainer">
         
      <div className="goalSection">
          <Goal/>

      </div>
      
      <div className='garageSection'>
        <Garage cars ={['BMW', 'Lexus', 'Ford']}/>

      </div>
          
      <div className='parkList-section'>
        <ParkingList/>

      </div>
          
      <div className='loginSection'>
        <LoginForm/>

      </div>
          
      <div className='messageFormSection'>
        <MessageForm/>

      </div>
          
      <div className='selectFormSection'>
        <SelectForm/>
      </div>
     
       <div className='greetCard'>
         <GreetingCard  
          name = 'Favour'
          age = '21st'
          school = 'SPENA'
          address = 'Nabisunsa'
          />

          <GreetingCard  
          name = 'Madrine'
          age = '23rd'
          school = 'St.Josephs'
          address = 'Kyanja'
          />

          <GreetingCard  
          name = 'Daneilla'
          age = '24th'
          school = 'TGS'
          address = 'Tororo'
          />
      </div>
    </div>
  );
}



export default App;
