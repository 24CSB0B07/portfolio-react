import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
