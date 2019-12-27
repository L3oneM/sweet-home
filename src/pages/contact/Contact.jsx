import React from 'react';

import ContactForm from '../../components/contact-form/ContactForm'

import './Contact.styles.scss'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="header">
        Contact us with Email
      </div>
      <ContactForm />
      <div className="call">
        ...or call us on:
      </div>
      <div className="number">
        888-888-8888
      </div>
    </div>
  );
};

export default Contact;