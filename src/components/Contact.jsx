// import { useState } from "react";
// import emailjs from 'emailjs-com';

// import '../styles/Contact.css'

// const ContactForm = () => {

//   const INITIAL_STATE = {
//     'fname': '',
//     'lname': '',
//     'email': '',
//     'message': ''
//   }

//   const [formData, setFormData] = useState(INITIAL_STATE);

//   const handleChange = evt => {
//     const { name, value, type, checked } = evt.target;
//     if (type === 'checkbox') {
//       setFormData(data => ({
//         ...data,
//         services: {
//           ...data.services,
//           [name]: checked,
//         }
//       }));
//     } else {
//       setFormData(data => ({
//         ...data,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     emailjs.sendForm('service_yfh2nmo', 'template_8xoo1dd', evt.target, 'dOwl-x9RcwhboytS1')
//     setFormData(INITIAL_STATE);
//     alert("Form submitted successfully. Thank you for your request.");
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       {/* <div id="name-container"> */}
//         <div className="first-name-container" alt="joseph larrivy software duluth minnesota React React.js Node Express front en developer">
//           <label htmlFor="fname">First Name: </label>
//           <br></br>
//           <input
//             required
//             id={formData.fname}
//             type="text"
//             name="fname"
//             value={formData.fname}
//             onChange={handleChange}
//             className="name-input"
//           />
//         </div>

//       <div className="last-name-container" alt="joseph larrivy software duluth minnesota React React.js Node Express front en developer">
//           <label htmlFor="lname">Last Name: </label>
//           <br></br>
//           <input
//             required
//             id={formData.lname}
//             type="text"
//             name="lname"
//             value={formData.lname}
//             onChange={handleChange}
//             className="name-input"
//           />
//         </div>
//       {/* </div> */}
      
//       <div className="email-container" alt="joseph larrivy software duluth minnesota React React.js Node Express front en developer">
//         <label htmlFor="email">Email: </label>
//         <br></br>
//         <input
//           required
//           id={formData.email}
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="email-input"
//         />
//       </div>

//       <div className="message-container" alt="joseph larrivy software duluth minnesota React React.js Node Express front en developer">
//         <label htmlFor="message">Message: </label>
//         <br></br>
//         <textarea
//           id={formData.message}
//           type="textarea"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className="message-input"
//         />
//       </div>

//       <button className="submit-button">Submit</button>
//     </form>
//   )
// }

// export default ContactForm;

import { useState } from "react";
import axios from 'axios';
import '../styles/Contact.css';

const ContactForm = () => {

  const INITIAL_STATE = {
    'fname': '',
    'lname': '',
    'email': '',
    'message': ''
  };

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
    try {
      const response = await axios.post('https://private-email-sending-server-ed9119e08e0e.herokuapp.com/sendEmailLarrivy/email/sendEmailLarrivy', {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        message: formData.message,
      });

      console.log('Success:', response.data);
      setFormData(INITIAL_STATE);
      alert("Form submitted successfully. Thank you for your request.");
    } catch (error) {
      console.error('Error:', error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="first-name-container">
        <label htmlFor="fname">First Name: </label>
        <br />
        <input
          required
          id="fname"
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          className="name-input"
        />
      </div>

      <div className="last-name-container">
        <label htmlFor="lname">Last Name: </label>
        <br />
        <input
          required
          id="lname"
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          className="name-input"
        />
      </div>

      <div className="email-container">
        <label htmlFor="email">Email: </label>
        <br />
        <input
          required
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="email-input"
        />
      </div>

      <div className="message-container">
        <label htmlFor="message">Message: </label>
        <br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="message-input"
        />
      </div>

      <button className="submit-button" type="submit">Submit</button>
    </form>
  )
}

export default ContactForm;
