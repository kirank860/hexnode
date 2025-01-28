import React from 'react'

import "./Footer.css"
import Copyright from '../Copyright/Copyright'
const Footer = () => {
  return (
<div>
<footer className='footer'>
   <div className='footer-inner'>
    <div className='footer-title'>
        <h1>Sign up and try Hexnode free for 14 days!</h1>
    </div>
  <div className="footer-input">
  <div>
        <input type="text" placeholder='your work Email' />
    </div>
    <div>   
         <button className='btn'>GET STARTED</button>
    </div>
  </div>
  <div className='footer-demo'>
    <p>No credit cards required. <span> Request a demo</span></p>
  </div>
   </div>
  </footer>
<Copyright/>
</div>
  )
}

export default Footer
