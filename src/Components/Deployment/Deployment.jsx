import React, { useState } from 'react';
import { GoChevronRight } from "react-icons/go";
import './Deployment.css';

const Deployment = () => {
  const deploymentData = [
    {
      title: 'Effortless kiosk deployment & management',
      description: 'Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.',
      imageUrl: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Feffortless-kiosk-deployement-image.jpg&w=1200&q=80',
    },
    {
      title: 'Customized interface for brand visibility',
      description: 'Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface..',
      imageUrl: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fcustomized-interface-image.jpg&w=1200&q=80',
    },
    {
      title: 'What more can you do with Hexnode kiosk?',
      description: 'Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.',
      imageUrl: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fpower-up-protection-image.jpg&w=1200&q=80',
    },
    {
      title: '  Provide an easy-to-use interface for end-users',
      description: 'Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.',
      imageUrl: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fsecure-app-ecosystem.jpg&w=1200&q=80',
    },
    {
      title: '  Provide an easy-to-use interface for end-users',
      description: 'Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.',
      imageUrl: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fsecure-app-ecosystem.jpg&w=1200&q=80',
    },
  ];


  const [openIndex, setOpenIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(deploymentData[0].imageUrl);

  const toggleAccordion = (index, imageUrl) => {
    setOpenIndex(openIndex === index ? null : index);
    setCurrentImage(imageUrl);
  };

  return (
    <div className='deployment'>
      <div className='container'>
        <div className='deployment-head'>
          <h1>What additional possibilities does the Kiosk mode offer?</h1>
        </div>
        <div className="deployment-inner">
          <div className="deployment-left">
            <img src={currentImage} alt="Kiosk Deployment" />
          </div>
          <div className="deployment-right">
            {deploymentData.map((item, index) => (
              <div
                key={index}
                className={openIndex === index ? 'open' : ''}
              >
                <h1
                  onClick={() => toggleAccordion(index, item.imageUrl)}
                  className="cursor-pointer"
                >
                  {item.title}
                </h1>
                {openIndex === index && (
                  <>
                    <p>{item.description}</p>
                    <h4>TRY FOR FREE <GoChevronRight /> </h4>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deployment;
