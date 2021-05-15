import React from 'react'
import './Font.css'

function Footer() {
    return (
        
     <div className="row gx-0 " style={{marginTop: '5%',padding:'0%'}}>
      <div className="col-sm-5 ft_face1" style={{borderRight: '1px solid grey', marginLeft: '10%'}}>
       <h3 style={{marginLeft:'20%' ,fontSize: '35px'}}>Explore</h3>
      <ul style={{marginLeft: '12%',marginTop: '5%', listStyle: 'none',fontSize:'20px'}}>
        <br/>
       <li>Home</li>
       <br/>
       <li>About</li>
       <br/>
       <li>Contact Us</li>
      </ul>
      </div>
      <div className="col-sm-5 ft_face1">
       <h3 style={{marginLeft: '30%', fontSize: '35px'}}>Contact Detail</h3>
       <ul style={{marginLeft: '12%',marginTop: '5%', listStyle: 'none',fontSize:'20px'}}>
          <br/>
         <li>Email: guide@gmail.com</li>
         <br/>
         <li>Contact Number: 1234567890</li>
         <br/>
         <li>Address: LetsGok.</li>
        </ul>
      </div>
  
    </div>
        
    )
}

export default Footer;
