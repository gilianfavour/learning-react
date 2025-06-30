import { useState } from 'react';

function SelectForm() {
  const [fruit, setFruit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected fruit:', fruit);
    alert(`You selected: ${fruit}`);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default SelectForm;
