import React, { useEffect, useState } from 'react';
import '../../../../styles/footer/contact/__form/contact__form.css';

function ContactForm() {
  const validationObj = {
    name: "",
    email: "",
    message: ""
  };

  const [form, setForm] = useState(validationObj);
  const [focus, setFocus] = useState({ name: false, email: false, message: false });
  const [isFormValid, setIsFormValid] = useState(false);

  function handleFormInput(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [messageValid, setMessageValid] = useState(null);

  useEffect(() => {
    const regExp = {
      name: /\b[\wáéíóúÁÉÍÓÚüÜñÑ]{3,}\b/,
      email: /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|)$/,
      message: /^(?:[\s\S]{3,150}|)$/,
    };

    if (focus.name || form.name === "") {
      setNameValid(form.name === "" ? false : regExp.name.test(form.name));
    }

    if (focus.email || form.email === "") {
      setEmailValid(form.email === "" ? false : regExp.email.test(form.email));
    }

    if (focus.message || form.message === "") {
      setMessageValid(form.message === "" ? false : regExp.message.test(form.message));
    }

    setIsFormValid(form.name !== "" && form.email !== "" && form.message !== "" && nameValid && emailValid && messageValid);
  }, [form, focus, nameValid, emailValid, messageValid]);

  function handleFocus(field) {
    setFocus((prevFocus) => ({
      ...prevFocus,
      [field]: true,
    }));
  }

  return (
    <div className='contact__form-container'>
      <form className='contact__form' action='https://formsubmit.co/aldonavargas@gmail.com' method='POST' noValidate>
        <h3 className='contact__form-title'>CONTACT FORM</h3>
        <input
          className={`contact__form-name-input ${focus.name && (nameValid ? 'contact__form-name-input_active' : 'contact__form-name-input_error')}`}
          type="text"  id="name"  name="name" placeholder='NAME' value={form.name} onChange={handleFormInput} onFocus={() => handleFocus('name')} required/>
        {focus.name && form.name === "" && <span className="contact__form-name-error">This field is required!</span>}
        {focus.name && nameValid === false && form.name !== "" && <span className="contact__form-name-error">Sorry, invalid format, special characters not available!</span>}
        <input
          className={`contact__form-email-input ${focus.email && (emailValid ? 'contact__form-email-input_active' : 'contact__form-email-input_error')}`}
          type="email" id="email" name="email" placeholder='EMAIL' value={form.email} onChange={handleFormInput} onFocus={() => handleFocus('email')} required/>
        {focus.email && form.email === "" && <span className="contact__form-email-error">This field is required!</span>}
        {focus.email && emailValid === false && form.email !== "" && <span className="contact__form-email-error">Sorry, invalid format here, add email!</span>}
        <textarea
          className={`contact__form-message-input ${focus.message && (messageValid ? 'contact__form-message-input_active' : 'contact__form-message-input_error')}`}
          id="message" name="message" rows="4" placeholder='MESSAGE' value={form.message} onChange={handleFormInput} onFocus={() => handleFocus('message')} required></textarea>
        {focus.message && form.message === "" && <span className="contact__form-message-error">This field is required!</span>}
        {focus.message && messageValid === false && form.message !== "" && <span className="contact__form-message-error">Sorry, invalid format here, add more characters!</span>}
        <button className={`contact__form-button ${!isFormValid ? 'contact__form-button_disabled' : ''}`} type="submit" disabled={!isFormValid}>SEND MESSAGE</button>
      </form>
    </div>
  );
}

export default ContactForm;