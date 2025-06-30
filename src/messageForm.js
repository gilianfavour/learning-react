import { useState } from 'react';

function MessageForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted message:', message);
    alert('Submitted! Check the console.');
  };

  return (
    <div>
        <h2> Message Form</h2>
        <form onSubmit={handleSubmit}>
      <label>
        Your Message:
        <br />
        <textarea
          rows="5"
          cols="40"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
    </div>
    
  );
}

export default MessageForm;
