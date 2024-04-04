import React from 'react';
import { Outlet } from 'react-router-dom'
// import './App.css'
import Footer from './components/foooter/footer'
import Header from './components/header/header'
function App() {


  return (
    <>
      <Header />
      <div className='main-containers'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
