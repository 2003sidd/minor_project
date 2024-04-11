



import React, { Component } from "react";
import SliderComponent from "./Slider.jsx";
import styled from "@emotion/styled";



function TopExercise() {

return(
  <Container>
    <h2>Explore <span className="green">Workouts</span></h2>
    <p>Exercise is defined as any movement that makes your muscles work and requires your body to burn calories.Regular exercise has been shown to help boost energy levels and enhance your mood.</p>
    <div className="Slider">
      <SliderComponent/>
    </div>
  </Container>
  );
}

export default TopExercise;

const Container = styled.div`
width: 80%
max-width: 1280px;
margin: 0 auto;

text-align: center;
background-color: #cee4b7;



@media(max-width: 810px){
  width:90%;
}

h2{

  font-size:2rem;
margin-top: 5px;
padding-top:0.5rem;

}

p{
  width: 28rem;
  margin: 0 auto;
  // padding 1rem 0;
  font-size: 1.1rem;
  @media(max-width:500px){
    width: 90%;
  }
}

`;