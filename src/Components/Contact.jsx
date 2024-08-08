
import React from 'react';
import Logo from './img/video.jpg';

const Contact = () => {
  return (
    <>
      <div className="container-fluid mt-5 py-5">
        <div className="background-imageproj" data-negative="true">
          <div className="text-center text-white mt-5 py-5">
            <span>CONTACT</span>
            <h1><b>Request A Free Consultation</b></h1>
          </div>
          <div className="row no-gutters p-5">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 ">
              <img src={Logo} className="img-fluid" alt="image" />
            </div>
            <div className="col-lg-6 col-md-12 contactformbg">
              <form>
                <div className="form-group contactformbg">
                  <div className="row">
                    <div className="col-md-6 mb-3 py-3 px-3">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6 mb-3 py-3 px-3">
                      <input type="email" className="form-control" placeholder="E-Mail" />
                    </div>
                  </div>
                </div>
                <div className="form-group contactformbg">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Your Website" />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3 contactformbg">
                  <textarea className="form-control" placeholder="Your Message Here" rows="5"></textarea>
                </div>
                <div>
                  <button type="submit" className="  button">Submit Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;





