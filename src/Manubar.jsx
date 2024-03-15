
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faImage,faPhotoFilm, faCalendarDays, faStore, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { faArrowUpRight } from '@fortawesome/free-solid-svg-icons';

import { faComment as farComment } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faYoutube , faTwitter} from '@fortawesome/free-brands-svg-icons';
import LoginSignup from './loginSingnup.jsx';
import  './miniprojectcss/miniprojectcss.css';

export default function HamburgerMenu() {
  return (
    // <>
    <div className=" complete">
    <span className='hamburger-menu-container'>
      <div className="main-box">
        <input type="checkbox" id="check" />

        <div className="btn_one">
          <label htmlFor="check">
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>

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
                <FontAwesomeIcon icon={faImage} />
                <a href="#">Gallery</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} />
                <a href="#">Shortcuts</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhotoFilm} />
                <a href="#">Exhibits</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendarDays} />
                <a href="#">Events</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faStore} />
                <a href="#">Store</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="#">Contact</a>
              </li>
              <li>
                <FontAwesomeIcon icon={farComment} />
                <a href="#">Feedback</a>
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

     </div>
    
     <LoginSignup />
     </span>

     </div>
  );
}

