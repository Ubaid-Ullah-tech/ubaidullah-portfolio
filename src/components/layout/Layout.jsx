import React from 'react'

import Navbar from '../navbarrr/Navbar'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import About from '../about/About'
import Experience from '../experience/Experiance'
import Contact from '../contact/Contact'
import { Outlet, useLocation } from 'react-router-dom'


const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <div>
        {location.pathname === '/' && (
          <>
            <Home />
            <About />
            <Experience />
            <Contact />
          </>
        )}
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
