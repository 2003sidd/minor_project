
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlassArrowRight, faHouse,faHandHoldingMedical,faListCheck, faCalendarDays, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';


import { faComment as farComment } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faYoutube , faTwitter} from '@fortawesome/free-brands-svg-icons';
import LoginSignup from './loginSingnup.jsx';
import  './miniprojectcss/miniprojectcss.css';

import {Link} from "react-router-dom";

export default function HamburgerMenu() {
  return (
    // <>
    <div className=" complete">

    <span className='hamburger-menu-container'>
      <span className="main-box">
        <input type="checkbox" id="check" />

        <span className="btn_one">
          <label htmlFor="check">
            <FontAwesomeIcon icon={faBars} />
          </label>
        </span>

        <div className="sidebar_menu">
          <div className="logo">
            <a href="#">Dashboard</a>
          </div>

          <div className="btn_two">
            <label htmlFor="check">
              <FontAwesomeIcon icon={faXmark} />
            </label>
          </div>

          <div className="menu">
            <ul>
              <li>
          
                <FontAwesomeIcon icon={faHouse} />
                <Link to="/contact">Home</Link>
             
              </li>
              <li>
            
                <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />
                <Link to="/about">About</Link>
            
              </li>
              <li>
            
                <FontAwesomeIcon icon={faHandHoldingMedical} />
       
                <Link to="/allworkout">AllWorkout</Link>
              </li>
              <li>
         
            
                <FontAwesomeIcon icon={faListCheck} />
                <Link to="/dailytask">Dailytask</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendarDays} />
                <Link to="/analysis">Analysis</Link>
     
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
          
               
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={farComment} />
           
                <Link to="/chatbot">ChatBot</Link>
              </li>
            </ul>
          </div>


          <div class="social_media">
          <ul>
            <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
            &nbsp;</a>
            <a href="https://twitter.com/i/flow/login">
            <FontAwesomeIcon icon={faTwitter} />
            &nbsp; </a>
            <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
            &nbsp; </a>
            <a href="https://www.youtube.com/">
            <FontAwesomeIcon icon={faYoutube} />
            &nbsp;
              </a>
          </ul>
        </div>

        </div>

     </span>
    
     <LoginSignup />
     </span>

     </div>
  );
}

