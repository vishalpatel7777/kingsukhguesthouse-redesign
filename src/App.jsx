import React from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';


function App  ()  {
  return (
    <div >
      <Navbar />
      <Home/>
      <About/>
      <Rooms/>
      <Services/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
