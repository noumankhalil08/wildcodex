import React from 'react';
import Logo1 from './img/1stCar.png';
import Logo2 from './img/2ndCar.jpg';
import Logo3 from './img/3rdCar.jpg';
import Logo4 from './img/4thCar.jpg';
import Logo5 from './img/5thCar.jpg';

const Testimonial = () => {
  return (
    <div className="container-fluid  backgroundservices testimonialpad">
      <div className="mt-5 py-5">
      <div className="mt-5 text-center">
        <p className='numWorProcess'>Testimonials</p>
        <h1><b>What Our Clients Say</b></h1>
      </div>
      <div id="testimonialCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="quote-icon">
                      <i className="bi bi-quote" style={{ fontSize: '2rem', color: '#03228F' }}></i>
                    </div>
                    <p>"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."</p>
                    <div className="d-flex flex-column align-items-center mt-4">
                      <img src={Logo1} width={80} height={80} className="rounded-circle mb-3" alt="header" />
                      <div>
                        <h5>Abdur Rashid</h5>
                        <p>CEO, Keen IT Solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="quote-icon">
                      <i className="bi bi-quote" style={{ fontSize: '2rem', color: '#03228F' }}></i>
                    </div>
                    <p>"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."</p>
                    <div className="d-flex flex-column align-items-center mt-4">
                      <img src={Logo2} width={80} height={80} className="rounded-circle mb-3" alt="header" />
                      <div>
                        <h5>Monty Moni</h5>
                        <p>CEO, Keen IT Solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="quote-icon">
                      <i className="bi bi-quote" style={{ fontSize: '2rem', color: '#03228F' }}></i>
                    </div>
                    <p>"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."</p>
                    <div className="d-flex flex-column align-items-center mt-4">
                      <img src={Logo3} width={80} height={80} className="rounded-circle mb-3" alt="header" />
                      <div>
                        <h5>Mike Hotten</h5>
                        <p>CEO, Brick Consulting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="quote-icon">
                      <i className="bi bi-quote" style={{ fontSize: '2rem', color: '#03228F' }}></i>
                    </div>
                    <p>"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."</p>
                    <div className="d-flex flex-column align-items-center mt-4">
                      <img src={Logo4} width={80} height={80} className="rounded-circle mb-3" alt="header" />
                      <div>
                        <h5>Abdur Rashid</h5>
                        <p>CEO, Keen IT Solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="quote-icon">
                      <i className="bi bi-quote" style={{ fontSize: '2rem', color: '#03228F' }}></i>
                    </div>
                    <p>"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."</p>
                    <div className="d-flex flex-column align-items-center mt-4">
                      <img src={Logo5} width={80} height={80} className="rounded-circle mb-3" alt="header" />
                      <div>
                        <h5>Monty Moni</h5>
                        <p>CEO, Keen IT Solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="quote-icon">
                      <i className="bi bi-quote" style={{ fontSize: '2rem', color: '#03228F' }}></i>
                    </div>
                    <p>"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."</p>
                    <div className="d-flex flex-column align-items-center mt-4">
                      <img src={Logo1} width={80} height={80} className="rounded-circle mb-3" alt="header" />
                      <div>
                        <h5>Mike Hotten</h5>
                        <p>CEO, Brick Consulting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;