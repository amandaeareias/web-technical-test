import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';
import withColor from '@/hoc/withColor';

const badge = ({children, style}) => {
  return <div style={style} className="badge">{children}</div>;
};

badge.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};

export default withColor(badge);
