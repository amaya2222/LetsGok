import React from 'react'

import './Navbar.css';
import './Font.css';
import Link from './ContactUs';
// import ContactUs from './ContactUs';


 function Navbar() {
    return (
  
<nav  className="navbar navbar-expand-lg navbar-light ">
  <div  className="container-fluid divdata ft_face1">
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <a  className="navbar-brand" href="#" style={{color:'indigo',fontSize:'20px',fontWeight:'400'}}><i class="fab fa-google"></i> Let's Gok</a>
    
    <div  className="collapse navbar-collapse data1" id="navbarTogglerDemo01">
     
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link active" href="#">Blog</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link active" href="#">career</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link active" href="#">ContactUs</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>


    )
}
export default Navbar;
