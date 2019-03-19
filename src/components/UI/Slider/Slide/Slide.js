import React from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';

const slide = ({children}) => {
  return (
    <div className="slider__slide swiper-slide">{children}</div>
  )
};

slide.propTypes = {
  children: PropTypes.element.isRequired
};

export default slide;
