import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Route,createBrowserRouter,createRouteFromElement,RouterProvider} from 'react-router-dom'
import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'
import Home from './Components/home/home.jsx';
import About from './Components/about/about.jsx'
import Contact from './Components/contact/contact.jsx'


const route =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
