import './ContactMe.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
// Contact me page
export default function ContactMe() {
  const [state, handleSubmit] = useForm("xdojazwo");

  if (state.succeeded){
      return <p>Thank you for your interest!</p>
  }
  return (
    <>
      <div className="contact-me-banner"></div>
      <div className="form-container">
        <h1>Contact Me</h1>
        <p>
          If you have experienced any issues with our services, please fill out
          the form below and our eager team of Customer Service Representatives
          will work with you to resolve this issue.
        </p>
        {/* Formsubmit.co will send us an email if someone submits this form */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
      </div>
    </>
  )
}
