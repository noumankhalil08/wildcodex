import React from 'react'
import Logo from './img/contact-here.png'


const Contactus = () => {
    return (
        <>
            <div className='container-fluid'>
                <div class="background-image2" data-negative="true">
                    <div className='row'>
                        <div className=' col-lg-6 col-md-12'>
                            <img src={Logo} className='contactusimg' alt="header" />
                        </div>
                        <div className=' col-lg-6 col-md-12 text-center contactdata mt-5 text-white'>
                            <p><b>CALL US 24/7</b></p>
                            <h1><b>CONTACT@WILDCODEX.com</b></h1>
                            <p className='mt-5'><b>Have any idea or project for in your mind call us or schedule </b></p>
                            <p><b>a appointment. Our representative will reply you shortly.</b></p>
                            <button className='mt-5 mb-5 btn-workprocess1' type='button'>Let's Talk</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactus

