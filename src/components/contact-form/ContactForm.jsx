import React, { useState } from 'react'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustumButton'

import './ContactForm.styles.scss'

const ContactForm = () => {
  const [userCredentials, setCredentials] = useState({
    subject: '',
    email: '',
    firstName: '',
    lastName: '',
    comments: ''
  })

  const { subject, email, firstName, lastName, comments } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();

    setCredentials({
      subject: '',
      email: '',
      firstName: '',
      lastName: '',
      comments: ''
    })

    alert('Email send! We will contact with you as soon as possible!') 
  }
  
  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div>
      <form className='contact-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='subject'
          value={subject}
          onChange={handleChange}
          label='Subject'
          required
        />
        <FormInput
          type='text'
          name='firstName'
          value={firstName}
          onChange={handleChange}
          label='First Name'
          required
        />
        <FormInput
          type='text'
          name='lastName'
          value={lastName}
          onChange={handleChange}
          label='Last Name'
          required
        />
        <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <label htmlFor="comments" className='cmnt-lbl'>Comments</label>
          <textarea
          rows='5'
          cols='60'
          name='comments'
          value={comments}
          onChange={handleChange}
          required
        />
        <CustomButton type='submit'>Send</CustomButton>
      </form>
    </div>
  );
};

export default ContactForm;