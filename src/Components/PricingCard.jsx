import React from 'react';
import Logo from './img/1-1.png';

const PricingCard = ({ planName, price, features, highlight, icon }) => {
  return (
    <div className={`card pricing-card h-100 ${highlight ? 'highlighted-plan' : ''} mt-5`}>
      <div className={`card-header bg-primary ${highlight ? ' text-white' : 'bg-light text-dark'}`}>
        <h5 className="mb-0">{planName}</h5>
      </div>
      <div className="card-body text-center">
        <img src={Logo} alt={`${planName} icon`} className="img-fluid mb-3" style={{ height: '150px' }} />
        <h2 className="card-title">${price}</h2>
        <h6 className="card-subtitle mb-2">Monthly Package</h6>
        <ul className="list-unstyled">
          {features.map((feature, index) => (
            <li key={index}>
              {feature.included ? <i className="bi bi-check-circle-fill text-primary"></i> : <i className="bi bi-x-circle-fill text-danger"></i>} {feature.text}
            </li>
          ))}
        </ul>
        <div className='pricebtn d-flex justify-content-center' >
        <button className='button mt-5'>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;



