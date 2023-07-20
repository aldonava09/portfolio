import React from 'react';
import '../../../styles/footer/contact/contact.css';
import ContactText from './__text/contact__text';
import ContactForm from './__form/contact__form';

function Contact() {
    return (
      <div className='contact'>
        <ContactText/>
        <ContactForm/>
      </div>
    );
}
  
export default Contact;