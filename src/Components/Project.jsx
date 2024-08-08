

// import React from 'react';
// import ProjectImage1 from './img/1st.jpg';
// import ProjectImage2 from './img/2nd.jpg';
// import ProjectImage3 from './img/3rd.jpg';

// const Projects = () => {
//   return (
//     <div className="container-fluid">
//       <div className="background-image2 mb-5" data-negative="true">
//         <div className="text-center text-white py-5">
//           <p className='mt-5'>Projects</p>
//           <h1><b>Our Recent Launched Projects</b></h1>
//           <h1><b>Available into Market</b></h1>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
//             <div className="project-card1">
//               <img src={ProjectImage1} alt="Project 1" className="project-img img-fluid" />
//               <div className="project-info text-center p-3">
//                 <h5><b>PRODUCT DESIGN</b></h5>
//                 <p>IT Technology</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
//             <div className="project-card2">
//               <img src={ProjectImage2} alt="Project 2" className="project-img img-fluid" />
//               <div className="project-info text-center p-3">
//                 <h5><b>GROWTH STRATEGIES</b></h5>
//                 <p>IT Technology</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
//             <div className="project-card3">
//               <img src={ProjectImage3} alt="Project 3" className="project-img img-fluid" />
//               <div className="project-info text-center p-3">
//                 <h5><b>PLATFORM INTEGRATION</b></h5>
//                 <p>IT Technology</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React from 'react';
// import ProjectImage1 from './img/1st.jpg';
// import ProjectImage2 from './img/2nd.jpg';
// import ProjectImage3 from './img/3rd.jpg';

// const Projects = () => {
//   return (
//     <div className="container-fluid">
//       <div className="background-image2 mb-5" data-negative="true">
//         <div className="text-center text-white py-5">
//           <p className='mt-5'>Projects</p>
//           <h1><b>Our Recent Launched Projects</b></h1>
//           <h1><b>Available into Market</b></h1>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
//             <div className="project-card1">
//               <img src={ProjectImage1} alt="Project 1" className="project-img img-fluid" />
//               <div className="project-info text-center p-3">
//                 <h5><b>PRODUCT DESIGN</b></h5>
//                 <p>IT Technology</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
//             <div className="project-card2">
//               <img src={ProjectImage2} alt="Project 2" className="project-img img-fluid" />
//               <div className="project-info text-center p-3">
//                 <h5><b>GROWTH STRATEGIES</b></h5>
//                 <p>IT Technology</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
//             <div className="project-card3">
//               <img src={ProjectImage3} alt="Project 3" className="project-img img-fluid" />
//               <div className="project-info text-center p-3">
//                 <h5><b>PLATFORM INTEGRATION</b></h5>
//                 <p>IT Technology</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// Projects.jsx
import React from 'react';
import ProjectImage1 from './img/1st.jpg';
import ProjectImage2 from './img/2nd.jpg';
import ProjectImage3 from './img/3rd.jpg';

const Projects = () => {
  return (
    <div className="container-fluid mt-5    ">
      <div className="background-image2 mb-5" data-negative="true">
        <div className="text-center text-white py-5">
          <p className='mt-5'>Projects</p>
          <h1><b>Our Recent Launched Projects</b></h1>
          <h1><b>Available into Market</b></h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="project-card1">
              <img src={ProjectImage1} alt="Project 1" className="project-img img-fluid" />
              <div className="project-info text-center p-3">
                <h5><b>PRODUCT DESIGN</b></h5>
                <p>IT Technology</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="project-card2">
              <img src={ProjectImage2} alt="Project 2" className="project-img img-fluid" />
              <div className="project-info text-center p-3">
                <h5><b>GROWTH STRATEGIES</b></h5>
                <p>IT Technology</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="project-card3">
              <img src={ProjectImage3} alt="Project 3" className="project-img img-fluid" />
              <div className="project-info text-center p-3">
                <h5><b>PLATFORM INTEGRATION</b></h5>
                <p>IT Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

