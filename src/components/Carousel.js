import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css';
import AgentImage1 from '../assets/agent1.jpg';
import AgentImage2 from '../assets/trump.jpg'
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src={AgentImage1} alt=''/>
          </div>
          <h3>Agent 1</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src={AgentImage2} alt=''/>
          </div>
          <h3>Agent 2</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <h3>Agent 3</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <h3>Agent 4</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <h3>Agent 5</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <h3>Agent 6</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <h3>Agent 7</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <h3>Agent 8</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <h3>Agent 9</h3>
          <p>Rating</p>
        </div>
      </div>

      <div className='container-box'>
        <div className="carousel-slide">
          <div className='img-box'>
          <img className='product--image' src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
          </div>
          <h3>Agent 10</h3>
          <p>Rating</p>
        </div>
      </div>

      
  </Slider>
);
};

export default  Carousel


