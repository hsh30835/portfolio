import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import './ImageSlider.css';

const ImageSlider = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('Slides:', slides);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
  
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  useEffect(() => {
    // console.log(`Current index: ${currentIndex}`);
    // console.log(`Current path: ${slides[currentIndex].path}`);
  }, [currentIndex, slides]);

  const handleClick = (path) => {
    // console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            onClick={() => handleClick(slides[currentIndex].path)}
          >
            <div className="slide-text">
              <div className="text1">{slide.text1}</div>
              <div className="text2">{slide.text2}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="left-arrow-container" onClick={goToPrevSlide}>
        <IoIosArrowBack className="left-arrow" />
      </div>
      <div className="right-arrow-container" onClick={goToNextSlide}>
        <IoIosArrowForward className="right-arrow" />
      </div>
    </>
  );
};

export default ImageSlider;
