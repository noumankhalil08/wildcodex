import React from 'react';
import ServiceIcon1 from './img/1.png';
import ServiceIcon2 from './img/2.png';
import ServiceIcon3 from './img/3.png';
import ServiceIcon4 from './img/17.png';
import ServiceIcon5 from './img/11.png';
import ServiceIcon6 from './img/15.png';

const Services1 = () => {
  return (
    <>
    <div className=" container-fluid  mt-5 ">
      <div className="  mt-5 ">
      <div className="  mt-5 ">
        <div className='backgroundservices'>
          <div className="text-center">
            <span className='sub-text mt-5'>Services</span>
            <h1><b>We Are Offering All Kinds of IT</b></h1>
            <h1><b>Solutions Services</b></h1>
          </div>
          <div className="row">
            <div className="col-md-4 service-item">
              <div className="service-box">
                <img src={ServiceIcon1} className="service-icon" alt="Service 1" />
                <br />
                <h3 className="service-title">Software Development</h3>
                <p className="service-description">We create custom software solutions tailored to your business needs.</p>
              </div>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-box">
                <img src={ServiceIcon2} className="service-icon" alt="Service 2" />
                <br />
                <h3 className="service-title">Cyber Security</h3>
                <p className="service-description">Our cyber security services protect your data and systems from threats.</p>
              </div>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-box">
                <img src={ServiceIcon3} className="service-icon" alt="Service 3" />
                <br />
                <h3 className="service-title">Artificial Intelligence</h3>
                <p className="service-description">We leverage AI to drive innovation and efficiency in your business processes.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 service-item">
              <div className="service-box">
                <img src={ServiceIcon4} className="service-icon" alt="Service 4" />
                <br />
                <h3 className="service-title">Cloud & DevOps</h3>
                <p className="service-description">We create custom software solutions tailored to your business needs.</p>
              </div>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-box">
                <img src={ServiceIcon5} className="service-icon" alt="Service 5" />
                <br />
                <h3 className="service-title">Product and Design</h3>
                <p className="service-description">Our cyber security services protect your data and systems from threats.</p>
              </div>
            </div>
            <div className="col-md-4 service-item">
              <div className="service-box">
                <img src={ServiceIcon6} className="service-icon" alt="Service 6" />
                <br />
                <h3 className="service-title">Data Center</h3>
                <p className="service-description">We leverage AI to drive innovation and efficiency in your business processes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Services1;
