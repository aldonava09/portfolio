import React from 'react';
import '../../../../styles/footer/contact/__form/contact__form.css';

function ContactForm() {
    return (
      <div className='contact__form-container'>
        <form className='contact__form' noValidate>
        <input className='contact__form-name-input' type="text" id="nombre" name="nombre" placeholder='NAME' required></input>
        <span class="contact__form-name-error">Sorry,invalid format here!</span>
        <input className='contact__form-email-input' type="email" id="email" name="email" placeholder='EMAIL' required></input>
        <span class="contact__form-email-error">Sorry,invalid format here!</span>
        <textarea className='contact__form-message-input' id="message" name="message" rows="4" placeholder='MESSAGE' required></textarea>
        <span class="contact__form-message-error">Sorry,invalid format here!</span>
        <button className='contact__form-button' type="submit">SEND MESSAGE</button>
        </form>
      </div>
    );
  }
  
  export default ContactForm;