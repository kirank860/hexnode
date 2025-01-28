import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross1, RxCross2 } from 'react-icons/rx'; // Import icons from react-icons
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('#020A19'); // Default background color

  // Change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('white'); // Change navbar background to white
      } else {
        setBgColor('#020A19'); // Reset navbar background to default
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: bgColor }}>
      <div className="logo">
        <h1 style={{ color: bgColor === 'white' ? 'black' : 'white' }}>hexnode</h1>
      </div>
      {/* Button and Hamburger Menu */}
      <div className="nav-actions">
        <button className="btn">14 DAYS FREE TRIAL</button>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RxCross1 size={30} style={{ color: bgColor === 'white' ? 'black' : 'white' }} />
          ) : (
            <RxHamburgerMenu style={{ color: bgColor === 'white' ? 'black' : 'white' }} size={30} />
          )}
        </div>
      </div>
      {/* Dropdown Menu for Hamburger */}
      <div className={`dropdown ${isMenuOpen ? 'open' : ''}`}>
        <RxCross2
          className="cross"
          size={26}
          style={{ color: 'black', fontWeight: 'bold' }}
          onClick={() => setIsMenuOpen(false)}
        />
        <div style={{ marginTop: '30px' }}>
          <hr />
          <div style={{ textAlign: 'center' }}>
            <button className="btn-mobile">14 DAY FREE TRIAL</button>
            <p style={{ marginTop: '10px' }}>Login</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
