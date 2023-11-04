import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider, Route, Link } from 'react-router-dom'
import Home from './page/home.jsx'
import About from './page/About.jsx'
import Service from './page/Service.jsx'
import Blog from './page/Blog.jsx'
import Contact from './page/Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path:'/about',  //<About/>
    element:<About />
  },
  {
    path:"/service",
    element : <Service />
  },
  {
    path:"/blog",
    element : <Blog />
  },
  {
    path:"/contact",
    element : <Contact />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
