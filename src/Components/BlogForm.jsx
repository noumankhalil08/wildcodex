import React from 'react'

const BlogForm = () => {
  return (
    <>
    <div className="container-fluid mt-5 pl-5">
        <h3><b>Leave a Reply</b></h3>
        <p className='mt-4'>Your email address will not be published. Required fields are marked *</p>
    
    <form>
                <div className="form-group p-3">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-6 ">
                      <input type="text" className="form-control" placeholder="Name*" />
                    </div>
                    <div className="col-md-6 col-lg-6 col-6">
                      <input type="email" className="form-control" placeholder="E-Mail*" />
                    </div>
                  </div>
                </div>
                <div className="form-group  p-3">
                  <textarea className="form-control  " placeholder="Comment*" rows="5"></textarea>
                </div>
                <div>
                  <button type="submit" className=" button-blog ">Post Comment</button>
                </div>
              </form>
              </div>
    
    </>
  )
}

export default BlogForm
