
/*import React from 'react'
import "./Navbar.css"
 const Navbar = () => {




  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>News</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
   
      </ul>
  
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = ({ onSelectCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/"><h2><center>Top International Headlines</center></h2></a>
      <br />
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
          {['general', 'sports', 'business', 'health', 'science'].map((category) => (
            <li className="nav-item" key={category}>
              <button className="nav-link btn btn-link" onClick={() => onSelectCategory(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 

/* src/components/navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSelectCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">News</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        
      <ul className="navbar-nav">
          {['general', 'sports', 'business', 'health', 'science'].map((category) => (
            <li className="nav-item" key={category}>
              <button className="nav-link btn btn-link" onClick={() => onSelectCategory(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
    
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; */

