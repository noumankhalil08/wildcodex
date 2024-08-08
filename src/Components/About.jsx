import React from 'react'
import { Link } from 'react-router-dom'
import AboutUSPage from './AboutUSPage'
import Team from './Team'
// import PricePlan from './PricePlan'
import Process from './Process'
import Contact from './Contact'
const About = () => {
  return (
    <>
      <div className="container-fluid background-imageabout">
        <div className="text-center text-white py-5">
          <h1 className=" fw-bold mt-5 py-3">
            About
          </h1>
          <Link className='text-white' to='/'>Wild Codex</Link>
          <span> / About</span>
        </div>
      </div>
      <AboutUSPage />
      <Team />
      <Process/>
      {/* <PricePlan/> */}
       <div className="formpad">
        <Contact/>
       </div>
    </>

  )
}

export default About