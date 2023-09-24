import React from 'react';
import { Link } from 'react-router-dom';
import './loader.css';

function Loader() {
  return (
    <div>
    <br /><br />
    <h1>Let's Get Started!</h1>
    <div className='cont'>
    
      <div className='loader-cont'>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="button-cont">
      <Link to="/signup">
        <button type="button" className="btn cube cube-hover">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Sign up</div>
        </button></Link><br /><br /><br /> <br />
        <Link to="/login">
        <button type="button" className="btn cube cube-hover">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Login</div>
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Loader;
