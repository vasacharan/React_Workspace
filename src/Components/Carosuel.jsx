import React from 'react';
import { Carousel } from 'bootstrap';

const styles = {
    slide :{
        color:'white'
    },
    slide2:{
        color: 'red'
    }
};

function Carosuel() {

  return (
    <div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" style={{width:'100%'}}>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000" ride="carosuel">
        <img src="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="pic1" style={{height:'450px'}}/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={styles.slide}>React-JS</h5>
          <p style={styles.slide}>It is a open source javascript library.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000" ride="carosuel">
        <img src="https://images.pexels.com/photos/1181258/pexels-photo-1181258.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="pic2" style={{height:'450px'}}/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={styles.slide2}>React-JS</h5>
          <p style={styles.slide2}>It is used to Build UI and responsible to build UI.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000" ride="carosuel">
        <img src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="pic3" style={{height:'450px'}}/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={styles.slide}>React-JS</h5>
          <p style={styles.slide}>It is used to build single page applications.</p>
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
    </div>
  )
}

export default Carosuel;
