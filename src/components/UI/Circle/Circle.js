import React from 'react';
import PropTypes from 'prop-types';
import './Circle.scss';
import withColor from '@/hoc/withColor';

const circle = ({children, style}) => {
  return <div style={style} className="circle">{children}</div>
};

circle.propTypes = {
  children: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};

export default withColor(circle);
