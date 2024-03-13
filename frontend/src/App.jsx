
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/foooter/footer'
import Header from './Components/header/header'
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
