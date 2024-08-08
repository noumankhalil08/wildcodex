import React from 'react';
import Logo from './img/logoBlog.png';

const BlogComment = () => {
  return (
    <>
      <div className="container-fluid mt-5  pl-5">
        <div className="mb-2">
          <div className="d-flex flex-wrap">
            <div className="me-3 d-flex align-items-center">
              <i className="bi bi-calendar"></i>
              <span className="ms-2">JuLY 6, 2024</span>
            </div>
            <div className="me-3 d-flex align-items-center">
              <i className="bi bi-person"></i>
              <span className="ms-2">Nouman</span>
            </div>
            <div className="me-3 d-flex align-items-center">
              <i className="bi bi-book"></i>
              <span className="ms-2">Blog</span>
            </div>
          </div>
          <div className="mt-2">
            <span>Welcome to Wildcodex. This is your first post. Edit or delete it, then start writing!</span>
          </div>
          <div className="mt-4">
            <h3><b>1 comment on “Hello world!”</b></h3>
          </div>
        </div>
        <div className=" mt-5">
          <div className="d-flex flex-wrap align-items-start">
            <div className="me-3">
              <img src={Logo} alt="Gravatar" className="rounded-circle" style={{ width: '50px', height: '50px' }} />
            </div>
            <div>
              <h5 >A Wildcodex Commenter</h5>
              <small >6 july, 2024 at 7:13 pm</small>
              <p className="mt-2">Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.</p>
                <p> Commenter avatars come from Gravatar.</p>
              <button className="button-blog">Reply</button>
              <div className='mt-4'>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogComment;

