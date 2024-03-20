// SliderComponent.jsx
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import  './about.css';
import Image1  from './img/y2.jpg';
import  Image2 from  './img/Yoga-Day.jpg';
import  Image3 from './img/y4c.jpg';
import   Image4  from './img/y3c.jpg';

function SliderComponent() {
  useEffect(() => {
    $('#containerSlider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }, []);


  return (

  
 

    <div id="containerSlider">
        <div id="slidingImage"> 1  <img src={Image1} alt="meritation"/><p> We understand the importance of exercise in maintaining overall well-being, but we also recognize the risks associated with excessive exercise and the potential harm it can cause to both physical and mental health.</p></div>
        <div id="slidingImage" >2<img src={Image2} alt="yoga"/> <p>It helps in keeping our mental and physical health intact. It helps us to connect to nature. Furthermore, your body becomes more flexible after consistent yoga practice and you also develop a great sense of self-discipline and self-awareness. In short, it improves our well-being and gives us better mental clarity.</p></div>
        <div id="slidingImage"> 3<img src={Image3} alt="trainer"/><p>A certified personal trainer is someone who is trained in creating and implementing safe and effective exercise programs for their clients. In other words, they’ll help you work out and execute other lifestyle changes to reach your fitness goal. <b>You can expore here efficient coach.</b></p></div>
        
        <div id="slidingImage"> 4  <img src={Image4} alt="type"/><p>You can select your desire workout exercise from here. You can explore here gym exercise like <b>Pull up exercise, Push-ups, Side bend, Wall sit </b>etc.</p> </div>
    </div>


  );
}

export default SliderComponent;
