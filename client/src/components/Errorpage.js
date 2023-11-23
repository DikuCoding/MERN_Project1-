import React from 'react'
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            </div>        
          </div>
          <h2>We are sorry, page not found</h2>
          <p className='mb-5'>
            The page you are looking for might have been removed or had  its name changed or is temporarily unavailable.
          </p>
          <Link to="/" className='back_btn'> Back to Homepage </Link>

      </div>
    </>
  )
}

export default Errorpage
