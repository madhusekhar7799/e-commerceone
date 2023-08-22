import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
            <img src="images/blog-1.jpg" className='img-fluid w-100' alt="" />
        </div>
        <p className='date'>1 Dec, 2022</p>
        <h5 className='title'>A beautiful sunday renaissance</h5>
        <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. quarat accusamus official</p>
        <Link to="/blog/:id" className='button'>Read More</Link>
      </div>
  )
}

export default BlogCard
