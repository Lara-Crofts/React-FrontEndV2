import React from 'react';
import "../styles/Form.css";
import { validateForm } from './FormValidator';


function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    if (validateForm()) {
      console.log('Form submitted successfully!');
    }
  };

  return (
    <>
      <div className="contact_main">
        <div className="contact_container">
          <hr className="line" />
          <div className="form-frame">
            <h2 className="contact-us">
              Contact Us <br />
              <p>Answers to most questions can be found in our FAQs page. If you have additional questions feel free to contact us using the form below </p>
            </h2>
            <form name="myForm" onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="" />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="" />

              <label htmlFor="userEmail">Email</label>
              <input type="email" id="userEmail" placeholder="" />

              <label htmlFor="comments">Message</label>
              <textarea id="comments" name="message" placeholder="Write your message here"></textarea>

              <input type="submit" value="Submit" className="submit-button" />
            </form>
            <div className="social">
              <hr className="line" />
              <div className="facebook_button">Our FAQ</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
