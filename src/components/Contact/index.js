import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      setFormState({ [event.target.name]: event.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      setErrorMessage(isValid ? '' : 'Not a valid email.');
    } else {
      setErrorMessage(event.target.value ? '' : `${event.target.name} is required.`);
    }

    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <section>
      <h2 className="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <div className="col-12 mb-2 bg-dark text-light p-3">
        <div className="col-9 about">
          <ul>
            <li>itsamish02@gmail.com</li>
            <li>(314) 255-7457</li>
            <li>I have intentionally kept the styling of the contact form minimal since it is not a core feature of the finished product. Instead, the contact section will be integrated into the 'About' page after project grading, where it will blend seamlessly with the design and layout of the page.</li>
          </ul>
        </div>
      </div>

      <h1 className="text-dark bg-primary p-2 display-inline-block">Contact me</h1>
      <div className="col-12 mb-2 bg-dark text-light p-3">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br/>
            <input type="text" name="name" value={name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <br/>
            <input type="email" name="email" value={email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br/>
            <textarea name="message" rows="5" value={message} onChange={handleChange} />
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
