import React from 'react';
import './Body.css';
import image from '../Image/nature1.png';
import image1 from '../Image/natur2.png';
import nature3 from '../Image/nature3.jpg';
function Header() {
    return (
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active"  data-bs-interval="10000" >
          <img src={image} class="d-block" style={{height:'600px',objectFit:'fill', width:'100%'}}alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="ft_face">"No one is you and That is your super power"</h5>
           
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000" >
          <img src={image1} class="d-block w-100" alt="..." style={{height:'600px',objectFit:'fill', width:'100%'}}/>
          <div class="carousel-caption d-none d-md-block">
            <h5 className="ft_face"> “The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”
               – Winston Churchill</h5>
            
          </div>
        </div>
        <div class="carousel-item"  >
          <img src={nature3} class="d-block w-100" alt="..." style={{height:'600px',objectFit:'fill', width:'100%'}}/>
          <div class="carousel-caption d-none d-md-block">
            <h5 className="ft_face">“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino</h5>
          
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    )
}
export default Header;