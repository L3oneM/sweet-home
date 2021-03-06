import React from 'react';

import ContactForm from '../../components/contact-form/ContactForm'
import Footer from '../../components/footer/Footer'

import './contact.styles.scss'

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
      <Footer />
    </div>
  );
};

export default Contact;