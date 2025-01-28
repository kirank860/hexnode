import React from 'react'

import "./Home.css"
import Cases from '../Case/Cases'
import Deployment from '../Deployment/Deployment'
import Slider from '../Slider/Slider'

const Home = () => {
  return (
<div>
  <div className='home'>
    <div className="container">
      <div className="row">
        {/* Left column */}
        <div className="col-12 col-md-6 left ">
          <div className='titile'>
            <h1>Turn your devices into kiosks in a few minutes with Hexnode UEM</h1>
          </div>
          <div className="input">
            <div>
              <input type="text" placeholder="your work email" />
            </div>
            <div>
              <button className='home-btn'>Get Started Now</button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-12 col-md-6    right">
          <div className='img'>
            <img 
              src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fhexnode-kiosk.png&w=1200&q=95" 
              alt="" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="subhome">
    <div className='container'>
      <div className="subhomeinner">
        <div>
          <h1>IDC</h1>
          <p>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
        </div>
        <div>
          <h1>Gartner</h1>
          <p>Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.</p>
        </div>
        <div>
          <h1>FORRESTER</h1>
          <p>Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
        </div>
      </div>
    </div>
  </div>

  <Cases/>
  <Deployment/>
  <Slider/>
</div>
  )
}

export default Home
