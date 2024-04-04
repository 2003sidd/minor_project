import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import LoginSignup from './components/login/loginSingnup.jsx'
import "./mediaQuery.css"
// import Signup from './Components/signup/signup.jsx'
// import X from './components/home/home.jsx'

const route =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='login' element={<LoginSignup />} />
      <Route path='signup' element={<LoginSignup  />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
