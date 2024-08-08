import React from 'react'
import Logo from './img/about-home.png';

const AboutUSPage = () => {
  return (
    <>
    <div className="container-fluid mt-5">
      <div className="row align-items-center ml-2 ">
        <div className="col-lg-6 col-md-12">
          <div>
            <img src={Logo} className=" about-image" alt="img" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
            <p className=" numWorProcess">About Us</p>
            <h1><b>We Are Increasing Business Success With Technology</b></h1>
            <p>Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.</p>
            <p >Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.

We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying.</p>
            
        <div className="mt-5">
              <button className=" button">Learn More</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUSPage
