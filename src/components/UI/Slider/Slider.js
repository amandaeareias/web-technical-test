import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './Slider.scss';

const slider = ({children}) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    new Swiper(sliderRef.current);
  }, []);

  return (
    <div className="slider swiper-container" ref={sliderRef}>
      <div className="swiper-wrapper">
        {children}
      </div>
    </div>
  )
};

slider.propTypes = {
  children: PropTypes.array.isRequired
};

export default slider;
