// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// TODO: Contact Form

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import { useState } from 'react';

function ContactForm(props) {
  const [input, setInput] = useState('');
//   let [eagerness, setEagerness] = useState('');

//   const eagernessLevel = ['high', 'medium', 'low']

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="Contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Contact Devin"
          value={input}
          name="text"
          className="Contact-input"
          onChange={handleChange}
        ></input>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="Contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="Contact-input"
          onChange={handleChange}
        ></input>
        <button className="Contact-button">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;