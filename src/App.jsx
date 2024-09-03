import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Certification from './components/certification/Certification'
import Contact from './components/contactt/Contact'
import About from './components/aboutt/About';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route path='/certification' element={<Certification/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
