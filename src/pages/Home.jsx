
import React from 'react'
import Firstpic from '../Components/Firstpic'
import AboutUs from '../Components/AboutUS'
import Services1 from '../Components/Services1'
import Contactus from '../Components/Contactus'
import Workingprocess from '../Components/Workingprocess'
import Project from '../Components/Project'
// import PricePlan from '../Components/PricePlan'
import Testmonial from '../Components/Testimonial'
import Blog from '../Components/Blog'
import Partners from '../Components/Partners'
  
export default function Home() {
  return (
    <>
    <Firstpic/>
    <AboutUs/>
    <Services1/>
    <Contactus/>
    <Workingprocess/>
    <Project/>
    {/* <PricePlan/> */}
    <Testmonial/>
    <Blog/>
    <Partners/>

    </>
  )
}
