
import Slider from 'react-slick';
import React, { useRef } from "react";

import Image1 from '../../img/y2.jpg';
import Image2 from '../../img/Yoga-Day.jpg';
import Image3 from '../../img/y4c.jpg';
import Image4 from '../../img/y3c.jpg';

const  SliderComponent =() => {


  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };






return(

  <div className="slider-container" >
  <Slider ref={slider => (sliderRef = slider)} {...settings}>
 
      <div className="slidingImage">
        <img src={Image1} alt="meritation" />
        <p> We understand the importance of exercise in maintaining overall well-being, but we also recognize the risks associated with excessive exercise and the potential harm it can cause to both physical and mental health.</p>
      </div>
      <div className="slidingImage">
        <img src={Image2} alt="yoga" />
        <p>It helps in keeping our mental and physical health intact. It helps us to connect to nature. Furthermore, your body becomes more flexible after consistent yoga practice and you also develop a great sense of self-discipline and self-awareness. In short, it improves our well-being and gives us better mental clarity.</p>
      </div>
      <div className="slidingImage">
        <img src={Image3} alt="trainer" />
        <p>A certified personal trainer is someone who is trained in creating and implementing safe and effective exercise programs for their clients. In other words, they’ll help you work out and execute other lifestyle changes to reach your fitness goal. <b>You can expore here efficient coach.</b></p>
      </div>
      <div className="slidingImage">
        <img src={Image4} alt="type" />
        <p>You can select your desire workout exercise from here. You can explore here gym exercise like <b>Pull up exercise, Push-ups, Side bend, Wall sit </b>etc.</p>
      </div>
  
  </Slider>
  <div className="button">

  <div style={{ textAlign: "bottom" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div>
  </div>

</div>

)

}

export default SliderComponent;