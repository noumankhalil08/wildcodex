

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from './img/headerPiclogo.jpeg';

const Header = () => {
  return (
    <header className="header-container py-2 p-0">
      <div className="container d-flex align-items-center justify-content-between">
        <img src={Logo} alt="abcd" className="header-logo" />
        <div className="d-flex flex-column flex-md-row justify-content-between gap-4">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="me-2" />
            <div>
              <p className="m-0"><b>Address</b></p>
              <p className="m-0">Lahore, Pakistan</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="me-2" />
            <div>
              <p className="m-0"><b>Email</b></p>
              <p className="m-0">contact@wildcodex.com</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faPhone} size="lg" className="me-2" />
            <div>
              <p className="m-0"><b>Phone</b></p>
              <p className="m-0">+923075447452</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
