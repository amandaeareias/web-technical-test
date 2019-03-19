import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss';

const toggle = ({children}) => {
  return (
    <div className="toggle">
      {children}
    </div>
  )
};

toggle.propTypes = {
  children: PropTypes.array.isRequired
}

export default toggle;
