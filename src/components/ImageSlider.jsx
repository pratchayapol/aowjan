import React, { useState, useEffect } from 'react';
import sliderCss from './css/ImageSlider.module.css';

const images = [
  'https://www.fareham.ac.uk/wp-content/uploads/2021/03/e-learning-featured.jpg',
  'https://pedagoo.com/wp-content/uploads/2020/06/2250x1500_czy-warto-korzystac-ze-szkolen-online-ollh.jpg',
  'https://cyberschooltech.co.ug/wp-content/uploads/2022/03/pexels-photo-5905962-1200x800.jpeg',
  // Add more image URLs as needed
];

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Auto-advance the slideshow every 3 seconds (adjust as needed)
    const interval = setInterval(nextSlide, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={sliderCss.sliderContainer}>
      <img
        className={sliderCss.sliderImage}
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
      />
      <button className={sliderCss.prevButton} onClick={prevSlide}>
      &#10094;
      </button>
      <button className={sliderCss.nextButton} onClick={nextSlide}>
      &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;