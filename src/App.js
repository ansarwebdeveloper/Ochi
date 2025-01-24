import React from 'react'
import './index.css';
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eye from './Components/Eye';
import Featured from './Components/Featured';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';





const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eye/>
      <Featured/>
      <Cards/>
      <Footer/>

    </div>
  )
}

export default App