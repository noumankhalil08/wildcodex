

import React from 'react';

const Form = () => {
  return (
    <>
    <div className='form-container bg-light p-4 mt-5 rounded shadow'>
      <h3 className="text-center mb-3 fw-bold">Schedule Your Appointment</h3>
      <p className="text-center mb-3">We are here to help you 24/7 with experts</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label"></label>
          <input type="text" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"></label>
          <input type="email" className="form-control" id="email" placeholder="E-Mail" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label"></label>
          <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label"></label>
          <textarea className="form-control" id="message" rows="3" placeholder="Your Message Here"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit now</button>
      </form>
    </div>
    </>
  );
};

export default Form;


