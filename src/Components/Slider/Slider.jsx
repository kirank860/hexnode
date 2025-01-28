import React, { useState, useEffect } from "react";
import "./Slider.css";
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";
const testimonials = [
  {
    id: 1,
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=3840&q=80",
    description: '"It seemed to be in-line with everything we were looking at."',
    name: "Chris Robin",
    company: "Kameley Ltd",
  },
  {
    id: 2,
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=3840&q=80",
    description: '"Hexnode has revolutionized the way we manage devices!"',
    name: "Jane Doe",
    company: "Tech Solutions Inc",
  },
  {
    id: 3,
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=3840&q=80",
    description: '"Incredibly simple and effective solution!"',
    name: "John Smith",
    company: "Innovate Ltd",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-heading">
          <h1>Why should you choose Hexnode?</h1>
        </div>
        <button onClick={handlePrev} className="control-btn left"> <LuChevronLeft style={{color:"gray"}} /></button>
        <div className="slider-box">
          <div className="box-image">
            <img src={currentTestimonial.image} alt={currentTestimonial.name} />
          </div>
          <div className="box-details">
            <div className="description">
              <p>{currentTestimonial.description}</p>
            </div>
            <hr />
            <div>
              <h2 className="name">{currentTestimonial.name}</h2>
              <p>{currentTestimonial.company}</p>
            </div>
          </div>
        
        </div>
        <button onClick={handleNext} className="control-btn right"><LuChevronRight style={{color:"gray"}} /></button>
        <div className="icon-slider-container">
  <div className="icon-slider">
    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg" alt="Merck" />
    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg" alt="Costco" />
    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg" alt="Gorillas" />
    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg" alt="Wolt" />
    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg" alt="Merck" />
    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg" alt="Costco" />
    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg" alt="Gorillas" />
    <img src="https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg" alt="Wolt" />
  </div>
</div>

      </div>
    </div>
  );
};

export default Slider;
