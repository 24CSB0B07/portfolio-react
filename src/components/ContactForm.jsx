import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    
    const hasErrors = Object.keys(newErrors).length > 0;
    const hasEmptyFields = !formData.name.trim() || !formData.email.trim() || !formData.message.trim();
    setIsSubmitDisabled(hasErrors || hasEmptyFields);

  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitDisabled) return;

    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTouched({});
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {isSubmitted && (
        <div className="form-success-alert" role="alert">
          Message sent successfully! Thank you for getting in touch.
        </div>
      )}
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className={`form-input ${touched.name && errors.name ? 'form-input-error' : ''}`}
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required 
            autoComplete="name"
          />
          {touched.name && errors.name && (
            <span className="error-message" id="name-error">{errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={`form-input ${touched.email && errors.email ? 'form-input-error' : ''}`}
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required 
            autoComplete="email"
          />
          {touched.email && errors.email && (
            <span className="error-message" id="email-error">{errors.email}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea 
          id="message" 
          name="message" 
          className={`form-input form-textarea ${touched.message && errors.message ? 'form-input-error' : ''}`}
          placeholder="I'd like to talk about..."
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        ></textarea>
        {touched.message && errors.message && (
          <span className="error-message" id="message-error">{errors.message}</span>
        )}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary btn-submit"
        disabled={isSubmitDisabled}
      >
        Send Message
      </button>
    </form>
  );
}
