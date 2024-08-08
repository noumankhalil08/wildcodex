import React from 'react';
import Logo1 from './img/process1.png';
import Logo2 from './img/process2.png';
import Logo3 from './img/process3.png';
import Logo4 from './img/process4.png';

const Process = () => {
  return (
    <div className="container-fluid text-center my-5">
      <span>Process</span>
      <h2 className="mb-4"><b>Our Working Process</b></h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img src={Logo1} alt="Discovery" className="img-fluid" />
          <h5 className="mt-3">Discovery</h5>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img src={Logo2} alt="Planning" className="img-fluid" />
          <h5 className="mt-3">Planning</h5>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img src={Logo3} alt="Execute" className="img-fluid" />
          <h5 className="mt-3">Execute</h5>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <img src={Logo4} alt="Deliver" className="img-fluid" />
          <h5 className="mt-3">Deliver</h5>
        </div>
      </div>
    </div>
  );
};

export default Process;


