import React from 'react';


const Blog = () => {
  return (
    <div className="container-fluid  d-flex flex-column justify-content-center align-items-center testimonialpad">
      <div className="text-center mb-5">
        <p className='numWorProcess'>BLOG</p>
        <h1><b>Read Our Latest Tips & Tricks</b></h1>
      </div>
      <div className="card card-dim" style={{ width: '25rem' }}>
        <div className='background-image3 bog-img '>
          <button type='button' className='btn-blog'>Digital Technology</button>
        
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2">
            <div className="me-3">
              <i className="bi bi-calendar"></i>
              <span className="ms-2">16 Nov 2020</span>
            </div>
            <div>
              <i className="bi bi-person"></i>
              <span className="ms-2">Nouman</span>
            </div>
          </div>
          <h5>Tech Firms Support Huawei Restriction, Balk at Cost</h5>
          <p>We denounce with righteous indignation and dislike men who are so beguiled...</p>
          <span className='blog_learnMore'><b>Learn More</b></span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
