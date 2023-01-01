import { useState, useEffect } from "react";
import React from 'react'

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);

  return (
    <section className='flex-container'>
      <div className='nav'>

        <div className='nav-head'>
          <a href="#home" className='nav-head-link'>crowdfundr</a>
        </div>
        
        <div onClick={() => setOpen((open) => !open)} className={`${isMobile ? "shown" : "hidden"}`}>
          <div className="nav-toggler">
            <div className="nav-toggler-icon">
              <span></span>
            </div>
          </div>
        </div>

        <div className={`${!open ? "hidden" : "shown"}`}>

          <div className='nav-body'>
            <div className='nav-body-list'>
              <div><a href="#home" className='nav-active'>Home</a></div>
              <div><a href="#mission">Mission</a></div>
              <div><a href="#">How it works</a></div>
              <div><a href="#">Contact us</a></div>
            </div>
          </div>

          <div className='nav-end-btn'>
            <button className='btn nav-btn'>Get Started</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Navbar