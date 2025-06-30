import { useState } from 'react';
import './SelectFruit.css'

function SelectForm() {
  const [fruit, setFruit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected fruit:', fruit);
    alert(`You selected: ${fruit}`);
  };

  return (
     <div className="select-container">
      <h2 className="select-title">Select Your Fruit</h2>
      <form onSubmit={handleSubmit} className="select-form">
        <label>
          Choose a fruit:
          <br />
          <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
            <option value="">-- Select one --</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="mango">Mango</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <br />
        <button type="submit" disabled={!fruit}>Submit</button>
      </form>
    </div>
  );
}

export default SelectForm;
