import { useState } from "react";
import emailjs from 'emailjs-com';

import '../styles/Contact.css'

const ContactForm = () => {

  const INITIAL_STATE = {
    'fname': '',
    'lname': '',
    'email': '',
    'message': ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    if (type === 'checkbox') {
      setFormData(data => ({
        ...data,
        services: {
          ...data.services,
          [name]: checked,
        }
      }));
    } else {
      setFormData(data => ({
        ...data,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    emailjs.sendForm('service_yfh2nmo', 'template_8xoo1d', evt.target, 'dOwl-x9RcwhboytS1')
    setFormData(INITIAL_STATE);
    alert("Form submitted successfully. Thank you for your request.");
  }

  return (
    <form onSubmit={handleSubmit}>

      {/* <div id="name-container"> */}
        <div className="first-name-container" alt="joseph larrivy software duluth minnesota React React.js Node Express front en developer">
          <label htmlFor="fname">First Name: </label>
          <br></br>
          <input
            required
            id={formData.fname}
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="name-input"
          />
        </div>

      <div className="last-name-container" alt="joseph larrivy software duluth minnesota React React.js Node Express front en developer">
          <label htmlFor="lname">Last Name: </label>
          <br></br>
          <input
            required
            id={formData.lname}
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            className="name-input"
          />
        </div>
      {/* </div> */}
      
      <div className="email-container" alt="joseph larrivy software duluth minnesota React React.js Node Express front en developer">
        <label htmlFor="email">Email: </label>
        <br></br>
        <input
          required
          id={formData.email}
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="email-input"
        />
      </div>

      <div className="message-container" alt="joseph larrivy software duluth minnesota React React.js Node Express front en developer">
        <label htmlFor="message">Message: </label>
        <br></br>
        <textarea
          id={formData.message}
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="message-input"
        />
      </div>

      <button className="submit-button">Submit</button>
    </form>
  )
}

export default ContactForm;