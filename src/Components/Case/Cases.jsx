import React, { useState } from 'react';
import './Cases.css';
import { TiTick } from "react-icons/ti";
import { FiChevronDown } from "react-icons/fi";
const Cases = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState('single App kiosk');

  // Define the content for each menu item
  const menuDetails = {
    'single App kiosk': {
      title: 'Powerful Single-App Kiosk solutions for enhanced control',
      paragraph: [
        'Provision the devices to run one specialized application, with limited functionalities.',
        'Provision the devices to run one specialized application, with limited functionalities.',
        'Provision the devices to run one specialized application, with limited functionalities.',
        'Provision the devices to run one specialized application, with limited functionalities.',
      ],
      imgSrc:
        'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fsingle-app-kios-image.jpg&w=1200&q=100',
    },
    'multi-App kiosk': {
      title: 'Multi-App Kiosk for versatile functionalities',
      paragraph: [
        'Run multiple apps simultaneously on the same kiosk.',
        'Great for environments needing flexibility.',
        'Supports a variety of apps for different use cases.',
        'Easy to manage and update multiple apps on the kiosk.',
      ],
      imgSrc:
        'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fmulti-app-kiosk-image.jpg&w=1200&q=100',
    },
    'web-based kiosk': {
      title: 'Web-Based Kiosk for cloud-based solutions',
      paragraph: [
        'Provision the device to access cloud-based web apps.',
        'Ideal for kiosks that need real-time data or updates.',
        'Supports web technologies like HTML5, CSS3, and JavaScript.',
        'Easily deploy and maintain from a central location.',
      ],
      imgSrc:
        'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fweb-based-kiosk-image.jpg&w=1200&q=100',
    },
    'digital signages': {
      title: 'Digital Signage Kiosk for visual displays',
      paragraph: [
        'Perfect for advertising, information display, and more.',
        'Supports video, images, and interactive content.',
        'Great for shopping malls, airports, and public spaces.',
        'Easy to customize content remotely.',
      ],
      imgSrc:
        'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fdigital-signage-kiosk-image.jpg&w=1200&q=100',
    },
    'ASAM Kiosk': {
      title: 'ASAM Kiosk for Automated Self-Service',
      paragraph: [
        'Automates service without human intervention.',
        'Ideal for self-checkout, ticketing, and order-taking.',
        'Secure and easy to maintain.',
        'Supports a variety of payment options.',
      ],
      imgSrc:
        'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fasam-kiosk-image.jpg&w=1200&q=100',
    },
  };

  return (
    <div className="container">
      <div className="cases">
        <div className="cases-head">
          <h1 className="title">Specific kiosk modes for unique use cases</h1>
        </div>
        <div className="case-menu">
          <ul>
            {Object.keys(menuDetails).map((item) => (
              <li
                key={item}
                className={item === activeItem ? 'active' : ''}
                onClick={() => setActiveItem(item)} // Set the active item on click
              >
                {item}
               <span> <FiChevronDown className='down-chevron' /></span>
              </li>   
            ))}
          </ul>
        </div>
        {/* Display the content based on the active item */}
        <div className="case-menu-details">
          <div className="case-menu-left">
            <div className="case-menu-details-title">
              <h1>{menuDetails[activeItem].title}</h1>
          
            </div>
            <div className="case-menu-para">
              {menuDetails[activeItem].paragraph.map((para, index) => (
                <p key={index}><TiTick style={{color:"green"}} /> {para}</p>
              ))}
            </div>
          </div>
          <div className="case-menu-right">
            <img
              src={menuDetails[activeItem].imgSrc}
              alt={activeItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
