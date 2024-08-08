import React from 'react'
import { Link } from 'react-router-dom'
import BlogComment from './BlogComment'
import BlogForm from './BlogForm'

const BlogPage = () => {
  return (
    <>
          <div className="container-fluid background-imageblog">
        <div className="text-center text-white py-5">
          <h1 className=" fw-bold mt-5 py-3"><b>
          Hello World!
          </b>
          </h1>
          <Link className='text-white' to='/'>Wild Codex</Link>
          <span> / Hello World!</span>
        </div>
      </div>
      <BlogComment/>
      <BlogForm/>
    </>
  )
}

export default BlogPage
