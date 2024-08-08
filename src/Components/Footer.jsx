import React from 'react';
import Logo from './img/headerPiclogo.jpeg';

const Footer = () => {
  return (
      <div className="container-fluid mt-5 p-5">
    <footer className="  py-4">
        <div className="row">
          <div className="col-md-3 mb-3 mb-md-0">
          <img src={Logo} width={150} height={150} alt="header" />
          <h5 className='mt-2'><b>Search</b></h5>
          <form action="post" className='mt-3'>
            <label htmlFor="search"></label>
            <input type="text" id='search'/>
          </form>
          <button className='srch-btn'>Search</button>
          <h1 className='mt-4'><b>Recent Posts</b></h1>
          <p className='foote'>Hello world! </p>
          <p className='foote'>Open Source Job Report Show</p> 
          <p className='foote'>More Openings Fewer</p> 
          <p className='foote'>Tech Products That Makes Its Easier</p> 
          <p className='foote'>to Stay at Home</p>
          <p className='foote'>Necessity May Give Us Your Best</p>
          <p className='foote'>Virtual Court System</p>
          <p className='foote'> Servo Project Joins The Linux </p>
          <p className='foote'>Foundation Fold Desco</p>
          <div className='mt-4'>
            <h1><b>Recent Comments</b></h1>
            <p className='foote p-4'>1. A Wildcodex Commenter on Hello world!</p>

          </div>
          <div className="mt-5">
            <p>Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque laudantium totam remaperiaeaque ipsa quae ab illo inventore veritatis</p>
            <ul className="list-unstyled d-flex p-2">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
          </div>

          </div>
          <div className="col-md-3 mb-3 mb-md-0">
           <h4>IT Services</h4>
           <div className="mt-4">
           <p className='foote'>Software Development</p>
           <p className='foote'>Web Development</p>
           <p className='foote'>Analytic Solutions</p>
           <p className='foote'>Cloud & DevOps</p>
           <p className='foote'>Product Design</p>
           </div>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
          <h4>Contact Info</h4>
            <ul className="list-unstyled ">
              <li className='mt-4'><i className="bi bi-map"></i> 374 FA Tower, William S Blvd 2721, IL, USA</li>
              <li className='mt-4'><i className="bi bi-envelope"></i> noumankhalil08@gmail.com</li>
              <li className='mt-4'><i className="bi bi-phone"></i> 03328721429</li>
              <li className='mt-4'><i className="bi bi-clock"></i> Opening Hours: 10:00 - 18:00</li>
            </ul>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h4>Newsletter</h4>
            <div className="mt-4">
                <p>We denounce with righteous  </p>
                <p>indignation in and dislike men who</p>
                <p>are so beguiled and to demo </p>
                <p>realized.</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <p className="m-0">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
    </footer>
      </div>
  );
};

export default Footer;

