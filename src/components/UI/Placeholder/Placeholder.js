import React from 'react';
import './Placeholder.scss';
import OctopusIcon from '@/assets/icons/octopus.svg';

const placeholder = () => {
  return (
    <div className="placeholder">
      <div className="placeholder__container">
        <div className="placeholder__content">
          <OctopusIcon className="placeholder__icon" />
        </div>
      </div>
    </div>
  )
};

export default placeholder;
