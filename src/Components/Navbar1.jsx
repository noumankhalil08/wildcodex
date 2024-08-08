import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <div className="container-fluid p-0 ">
      <nav className="navbar navbar-expand-xl navbar-white text-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon custom-color"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarDark">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown  ">
                <a className="nav-link dropdown-toggle active navHover" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                  <li><a className="dropdown-item" href="#">Multipages</a></li>
                  <li><a className="dropdown-item" href="#">One pages</a></li>
                </ul>
              </li>
              <li className="nav-item navHover">
                <Link className="nav-link active" to="/about" role="button">About</Link> 
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle active navHover" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><a className="dropdown-item" href="#">Software Development</a></li>
                  <li><a className="dropdown-item" href="#">Web Development</a></li>
                  <li><a className="dropdown-item" href="#">Analytic Solution</a></li>
                  <li><a className="dropdown-item" href="#">Cloud DevOps</a></li>
                  <li><a className="dropdown-item" href="#">Product Design</a></li>
                  <li><a className="dropdown-item" href="#">Data Center</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle active navHover" href="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                  <li><a className="dropdown-item" href="#">Services</a></li>
                  <li><a className="dropdown-item" href="#">Our Team</a></li>
                  <li><a className="dropdown-item" href="#">Single Team</a></li>
                  <li><a className="dropdown-item" href="#">Careers</a></li>
                  <li><a className="dropdown-item" href="#">Case Studies</a></li>
                  <li><a className="dropdown-item" href="#">Single CaseStudy</a></li>
                  <li><a className="dropdown-item" href="#">Shop</a></li>
                  <li><a className="dropdown-item" href="#">Pricing</a></li>
                  <li><a className="dropdown-item" href="#">FAQs</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle active navHover" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                  <li><a className="dropdown-item" href="#">Blog Details</a></li>
                </ul>
              </li>
              <li className="nav-item navHover">
                <a className="nav-link  active" href="#"  role="button">Contact</a>
              </li>
            </ul>
            <div className="d-flex align-items-center navHover">
              <FontAwesomeIcon icon={faSearch} className="text-light" />
            </div>
            <div className="social-icons d-flex ms-3">
              <a href="#" className="text-light me-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light me-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light me-2"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
