import React from 'react'
import p1 from '../img/p1.jpg'
const Header = () => {
  return (
<div className="container mt-5">
  <div className="row align-items-center">
    <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
      <h1 className="mb-3">We Organize Effective Learning</h1>
      <p className="text-muted mb-4">
        We’ll help to plan and manage your studying process. Our success means being with you every step of the way: from signing up for a course to receiving the degree.
      </p>
    </div>
    <div className="col-lg-6 col-md-6 col-12">
      <img src={p1} className="img-fluid" alt="Learning" />
    </div>
  </div>
</div>


  )
}

export default Header