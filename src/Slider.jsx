// import { Slider } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import './slidercom.css';
import ContainerSlids from './ContainerSlids.jsx';


import styled from "styled-components";


let data = [

  {
img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
discription: " Stretching ,Increased blood flow and can boost brain health"

},

{
img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtvdXR8ZW58MHx8MHx8fDA%3D",
discription: " Dual dumbell curls ,Weight lifting with dumbbells lowers your risk of heart attack, stroke, and cardiovascular disease."
},

{
img: "https://plus.unsplash.com/premium_photo-1666956838404-02f23fa07123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtvdXR8ZW58MHx8MHx8fDA%3D",
discription: " push-ups can help prevent and minimize back pain."
},

{
  img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1271937151-6478ab1407288.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*",
  discription: " Mountain climbers are a great option for adults with low physical activity levels to improve their cardiovascular function."
  },


  {
    img: "https://images.squarespace-cdn.com/content/v1/5cf487b08fe6080001911183/899f9802-003e-4371-acf6-843342194d1d/60621e3dc65221860c03a73b_0151.1920-p-1600.jpeg",
    discription: "Stretching Has Been Shown to Improve Sleep Quality"
    },

    {
      img: " https://post.healthline.com/wp-content/uploads/2019/11/Female_Fitness_Ball-1296x728-Header.jpg",
      discription: "Exercise balls ,for those who suffer with swollen ankles and feet, this posture can be a great way to reduce the swelling and discomfort."
      },

      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb63Je53pnrYptdK12JFY_Ece9TNB-OCmix2c72k2pM416Vrc875Docw-gA8xgciTr3HY&usqp=CAU",
        discription: "Running boost your levels to ward off depression, prevent type 2 diabetes, and strengthen your bones."
        },

        {
          img: "https://i.pinimg.com/736x/6c/96/54/6c9654882f4854d8ae5c43fd783b25ba.jpg",
          discription: " Cable Exercise,Cables allow for movement in multiple planes of motion."
          },

          {
            img: "https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2020/01/Peloton.-vs-wahoo-Gear-Patrol-wahoo-ambiance.jpg?crop=1.00xw:0.654xh;0,0.181xh&resize=640:*",
            discription: " Indoor cycling is a low-impact exercise that is gentle on your joints, making it an excellent choice for people who may have joint problems or injuries."
            }




];


var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1004,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 810,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 3,
        centerMode: false
      }
    },
    {
      breakpoint: 809,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 0,
        centerMode: false
      }
    }
  ]
};
export default function SliderCompoenet(){

  let slider = "";
  slider = data.map((item,i) =>(
    <ContainerSlids item = {item} key={i}/>
  )
  
  )


    return(

        <Slider  {...settings}>

          {slider}

        </Slider>

   
   

    )
}




