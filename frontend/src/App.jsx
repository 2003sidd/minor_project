
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/foooter/footer'
import Header from './Components/header/header'
function App() {


  return (
<>
<Header />
it works
<div style={border="1px solid",min-height="150px"}>
  <Outlet />
</div>
<Footer />
  </>
  )
}

export default App
