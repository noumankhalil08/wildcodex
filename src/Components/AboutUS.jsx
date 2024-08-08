import React from 'react';
import Logo from './img/about-part-1.png';
import Logo1 from './img/about-part-2.png';
import Logo2 from './img/about-part-3.png';

const AboutUs = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div >
            <img src={Logo1} className=" scale2" alt="Part 1" />
          </div>
          <div >
            <img src={Logo} className=" middle-image" alt="Part 2" />
          </div>
          <div >
            <img src={Logo2} className=" dance" alt="Part 3" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className=" mt-4">
            <p className="mt-3 numWorProcess">About Us</p>
            <h1><b>We Are Increasing Business Success With Technology</b></h1>
            <p>Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.</p>
            <p>Software Development</p>
            <div className="progress">
              <div className="progress-bar progress-bar-color" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
            <p>Cyber Security</p>
            <div className="progress mt-2">
              <div className="progress-bar progress-bar-color" style={{ width: '92%' }} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">92%</div>
            </div>
            <p>Artificial Intelligence</p>
            <div className="progress mt-2">
              <div className="progress-bar progress-bar-color" style={{ width: '78%' }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div>
            </div>
            <p>Web Development</p>
            <div className="progress mt-2">
              <div className="progress-bar progress-bar-color" style={{ width: '78%' }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div>
            </div>
            <div className="mt-5">
              <button className=" button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;







