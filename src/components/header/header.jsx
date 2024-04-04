import { Link } from "react-router-dom";
import './header.css';
import React from "react";
// import HamburgerMenu from '../Manubar/Hamburgernu'; Menu'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faMagnifyingGlassArrowRight,
  faHouse, faHandHoldingMedical,
  faListCheck, faCalendarDays, faPhone, faXmark
} from '@fortawesome/free-solid-svg-icons';

import { faComment  as farComment } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import {faFacebook,faInstagram,faYoutube,faTwitter} from "@fortawesome/free-solid-svg-icons"
// import  '../miniprojectcss/miniprojectcss.css';
import '../../miniprojectcss/miniprojectcss.css';

import LoginSignup from "../login/loginSingnup";
// import HamburgerMenu from '../HamburgerMenu';
const Header = () => {
  return (
    <header>
      <div className="hamburger-menu">
        {/* <HamburgerMenu /> */}
        <div >

          <span className='hamburger-menu-container'>
            <span className="main-box">
              <input type="checkbox" id="check" />

              <span className="button">
                <label htmlFor="check">
                  <FontAwesomeIcon icon={faBars} />
                </label>
              </span>

              <div className="sidebar_menu">
                <div className="sidebar-top">
                  <h2 href="#">Dashboard</h2>

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


                <div className="social_media">
                  <ul>
                    <a href="#">
                      {/* <FontAwesomeIcon icon={faFacebook} /> */}
                      &nbsp;</a>
                    <a href="https://twitter.com/i/flow/login">
                      {/* <FontAwesomeIcon icon={faTwitter} /> */}
                      &nbsp; </a>
                    <a href="#">
                      {/* <FontAwesomeIcon icon={faInstagram} /> */}
                      &nbsp; </a>
                    <a href="https://www.youtube.com/">
                      {/* <FontAwesomeIcon icon={faYoutube} /> */}
                      &nbsp;
                    </a>
                  </ul>
                </div>

              </div>

            </span>

          </span>

        </div>
      </div>

      <div className="name">
        Name of project
      </div>
      <nav className="nav">
        <ul className="ul">
          <li className="li" id="nav-item1"><Link to="/">Home</Link></li>
          <li className="li" id="nav-item3"><Link to="/allworkout">Workout</Link></li>
          <li className="li" id="nav-item3"><Link to="/dailytask">Daily Task</Link></li>
          <li className="li" id="nav-item3"><Link to="/analysis">analysis</Link></li>
          <li className="li" id="nav-item2"><Link to="/about">About</Link></li>
          <li className="li" id="nav-item3"><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>
      <div>
        <button className="button" id="login"><Link to="/login">Login</Link></button>
        <button className="button" id="signup"><Link to="/signup">Signup</Link></button>
      </div>
    </header>
  )
}
export default Header;