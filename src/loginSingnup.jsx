
import React from 'react';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './imgsCssfile/loginpagecreate.css';
// import './style.css';
import eyeClose from './imgsCssfile/eye-close.png';
import eyeOpen from './imgsCssfile/eye-open.png';


export default function LoginSignup() {

  // false
  const [isLoginFormHidden, setIsLoginFormHidden] = useState(true);
  //  true only login 
  const [isCreateAccountFormHidden, setIsCreateAccountFormHidden] = useState(true);
  const [loginMessage, setLoginMessage] = useState('');
  const [createAccountMessage, setCreateAccountMessage] = useState('');
  //  false
  const [isContainerHidden, setIsContainerHidden] = useState(true);
  const [isLoginPasswordVisible, setIsLoginPasswordVisible] = useState(false);
  const [isCreatePasswordVisible, setIsCreatePasswordVisible] = useState(false);


  useEffect(() => {
    // Simulate a delay before displaying the container
    const timeoutId = setTimeout(() => {

      setIsLoginFormHidden(false);
      setIsCreateAccountFormHidden(true);
      setIsContainerHidden(false);

    }, 2000); // Adjust the delay time in milliseconds

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, []);


  const toggleForms = () => {
    setIsLoginFormHidden(!isLoginFormHidden);
    setIsCreateAccountFormHidden(!isCreateAccountFormHidden);

  };

  const hideforms = () => {
    setIsContainerHidden(!isContainerHidden);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    toggleForms();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const username = e.target.querySelector('#username');
    const password = e.target.querySelector('#password');
    const usernameValue = username.value.trim();
    const passwordValue = password.value;

    let isValid = true;

    if (usernameValue.length === 0) {
      setInputError(username, 'Username cannot be empty');
      isValid = false;
    }

    if (passwordValue.length < 8) {
      setInputError(password, 'Password must be at least 8 characters');
      isValid = false;
    }

    if (isValid) {
      setFormMessage(e.target, 'success', 'Login successful!');
      clearErrors(e.target);
    } else {
      setFormMessage(e.target, 'error', 'Invalid Username/password combination');
    }
  };

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();

    const usernameInput = e.target.querySelector('#SignupUsername');
    const emailInput = e.target.querySelector('#email');
    const passwordInput = e.target.querySelector('#SignupPassword');
    const confirmPasswordInput = e.target.querySelector('#SignupConfirmPassword');

    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    let isValid = true;

    if (usernameValue.length === 0) {
      setInputError(usernameInput, 'Username cannot be empty');
      isValid = false;
    }

    if (emailValue.length === 0 || !isValidEmail(emailValue)) {
      setInputError(emailInput, 'Invalid email address');
      isValid = false;
    }

    if (passwordValue.length < 8) {
      setInputError(passwordInput, 'Password must be at least 8 characters');
      isValid = false;
    }

    if (passwordValue !== confirmPasswordValue) {
      setInputError(confirmPasswordInput, 'Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      setFormMessage(e.target, 'success', 'Account created successfully!');
      clearErrors(e.target);
    }
  };

  const handleEyeClick = (type) => {
    if (type === 'login') {
      setIsLoginPasswordVisible(!isLoginPasswordVisible);
    } else if (type === 'createAccount') {
      setIsCreatePasswordVisible(!isCreatePasswordVisible);
    }
  };

  const setInputError = (inputElement, message) => {
    inputElement.classList.add('form_input-error');
    inputElement.parentElement.querySelector('.form_input-error-message').textContent = message;
  };

  const setFormMessage = (formElement, type, message) => {
    const messageElement = formElement.querySelector('.form_message');

    messageElement.textContent = message;

    messageElement.classList.remove('form_message--success', 'form_message--error');
    messageElement.classList.add(`form_message--${type}`);
  };

  const clearErrors = (formElement) => {
    // Remove error styling from all input elements
    formElement.querySelectorAll('.form_input').forEach((inputElement) => {
      inputElement.classList.remove('form_input-error');
    });

    // Clear error messages
    formElement.querySelectorAll('.form_input-error-message').forEach((errorMessageElement) => {
      errorMessageElement.textContent = '';
    });

    // Clear form messages
    setFormMessage(formElement, 'success', 'Your account created Successfully!');
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
  

    <div className='login-signup-container'>
      {/* <h1 id='home'>Home Page</h1> */}
    < motion.div whileHover={{ scale: 1.1 }}
      transition={{ type: "tween", stiffness: 1, damping: 40 }}
      className={`container ${isContainerHidden ? 'hidden' : ''}`} >

      <form
        className={`form ${isLoginFormHidden ? 'form_hidden' : ''}`}
        id="login"
        onSubmit={handleLoginSubmit}
      >
        <div className="btn_one" id="btnone" onClick={hideforms} >

          <FontAwesomeIcon icon={faXmark} />

        </div>

        <h1 className="form_title">Login</h1>
        <div className="form_message form_msg_error"></div>
        <div className="form_input-group">
          <input type="text" id="username" className="form_input" autoFocus placeholder="Username or email" />
          <div className="form_input-error-message">
          </div>
        </div>

        <div className="form_input-group">
          <input
            type={isLoginPasswordVisible ? 'text' : 'password'}
            id="password"
            className="form_input"
            autoFocus
            placeholder="Password"

          />

          <img
            src={isLoginPasswordVisible ? eyeOpen : eyeClose}
            alt=" "
            id="eye-close"
            onClick={() => handleEyeClick('login')}
          />
          <div className="form_input-error-message"></div>
        </div>
        <button className="formbtn" type="submit">Continue</button>
        <p className="form_text">
          <a href="#" className="form_link">Forget your password?</a>
        </p>
        <p className="form_text">
          <a className="form_link" href="./" id="linkCreateAccount" onClick={handleLinkClick}>Don't have an account ? Create account</a>
        </p>

        {createAccountMessage}

      </form>

      <form
        className={`form ${isCreateAccountFormHidden ? 'form_hidden' : ''}`}
        id="CreateAccount"
        onSubmit={handleCreateAccountSubmit}
      >

        <div className="btn_one" id="btnone" onClick={hideforms}>
          <FontAwesomeIcon icon={faXmark} />
        </div>


        <h1 className="form_title">Create Account</h1>
        <div className="form_message form_msg_error"></div>

        <div className="form_input-group">
          <input type="text" id="SignupUsername" className="form_input" autoFocus placeholder="Username" />
          <div className="form_input-error-message" >
          </div>
        </div>


        <div className="form_input-group">
          <input type="password" id="email" className="form_input" autoFocus placeholder="Email Address" />
          <div className="form_input-error-message"></div>
        </div>

        <div className="form_input-group">
          <input
            type={isCreatePasswordVisible ? 'text' : 'password'}
            id="SignupPassword"
            className="form_input"
            autoFocus
            placeholder="Password"

          />
          <img
            src={isCreatePasswordVisible ? eyeOpen : eyeClose}
            alt=" "
            id="eye-close2"
            onClick={() => handleEyeClick('createAccount')}
          />

          <div className="form_input-error-message"></div>
        </div>

        <div className="form_input-group">
          <input type="password" id="SignupConfirmPassword" className="form_input" autoFocus placeholder=" Confirm password" />
          <div className="form_input-error-message"></div>
        </div>
        <button className="formbtn" type="submit">Continue</button>

        <p className="form_text">
          <a className="form_link" href="./" id="linkLogin" onClick={handleLinkClick}>Already have an acccount? Sign in</a>
        </p>
        {loginMessage}
      </form>
    </ motion.div>

</div>


  );
}






