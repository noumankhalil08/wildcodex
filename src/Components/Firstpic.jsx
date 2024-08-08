import React from 'react';
import Form from './Form';

const Firstpic = () => {
  return (
    <div className="container-fluid  background-image">
      <div className="row no-gutters">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start text-white p-5">
          <h1 className=" fw-bold">
          Wild Codex IT 
          </h1>
          <h1 className="fw-bold">
          Consulting Services 
          </h1>
          <h1 className="fw-bold">
          For Your Business
          </h1>
          <p>
            We are a leading technology solutions providing company all over the world, operating for over 40 years.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Firstpic;

