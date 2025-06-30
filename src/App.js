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

function App() {
  
  return (
    <div className='greet-card'>
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

      <Goal
      isGoal = {true}
      />

      <Garage cars ={['BMW', 'Lexus', 'Ford']}
      />

      <ParkingList/>

      <LoginForm/>

      <MessageForm/>
      
      <SelectForm/>

    </div>
  );
}

export default App;
