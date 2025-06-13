import './App.css';
import GreetingCard from './GreetingCard';
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
    </div>
   
  );
}

export default App;
