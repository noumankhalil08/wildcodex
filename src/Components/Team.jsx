import React from 'react'
import Logo1 from './img/team_5.jpg';
import Logo2 from './img/team_6.jpg';
import Logo3 from './img/team_7.jpg';
import Logo4 from './img/team_9.jpg';
import Logo5 from './img/team_10.jpg';
import Logo6 from './img/team_21.jpg';
import Logo7 from './img/teamd_3.jpg';


const Team = () => {
  return (
    <>
      <div className='container-fluid m-0 p-0 mt-5 py-5'>

        <div class=" background-imageteam" data-negative="true">

          <div className='text-white text-center mt-5 py-5'>
            <h6 >Team</h6>
            <h1 className='fw-bold'>Meet With IT Experts</h1>
          </div>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner container-fluid">
    <div class="carousel-item active">
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-center text-color">
          <img src={Logo1} class="teampics" alt="img" />
          <h5 class="mt-2">Isabella Croline</h5>
          <p>Project Manager</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
        </div>
        <div class="text-center text-color">
          <img src={Logo2} class="teampics" alt="img" />
          <h5 class="mt-2">Jullia Siger</h5>
          <p>Product Designer</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
        </div>
        <div class="text-center text-color">
          <img src={Logo3} class="teampics" alt="img" />
          <h5 class="mt-2">Corey Anderson</h5>
          <p>President & CEO</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-center text-color">
          <img src={Logo3} class="teampics" alt="img" />
          <h5 class="mt-2">Alex Johnson</h5>
          <p>Software Engineer</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
        </div>
        <div class="text-center text-color">
          <img src={Logo4} class="teampics" alt="img" />
          <h5 class="mt-2">Maria Smith</h5>
          <p>Marketing Specialist</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
        </div>
        <div class="text-center text-color">
          <img src={Logo5} class="teampics" alt="img" />
          <h5 class="mt-2">David Lee</h5>
          <p>UI/UX Designer</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-center text-color">
          <img src={Logo5} class="teampics" alt="img" />
          <h5 class="mt-2">Emma Wilson</h5>
          <p>Data Scientist</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
          
        </div>
        <div class="text-center text-color">
          <img src={Logo6} class="teampics" alt="img" />
          <h5 class="mt-2">John Doe</h5>
          <p>Full Stack Developer</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
        </div>
        <div class="text-center text-color">
          <img src={Logo7} class="teampics" alt="img" />
          <h5 class="mt-2">Jane Smith</h5>
          <p>QA Engineer</p>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li className="bi bi-facebook p-2 logo"></li>
              <li className="bi bi-twitter p-2 logo"></li>
              <li className="bi bi-pinterest p-2 logo"></li>
              <li className="bi bi-instagram p-2 logo"></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    </>
  )
}

export default Team









