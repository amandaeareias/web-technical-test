import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Heart.scss';
import HeartIcon from '@/assets/icons/heart.svg';
import HeartFilledIcon from '@/assets/icons/heart-filled.svg';

const heart = ({isActive, onClick}) => {
  return (
    <Fragment>
      {isActive && <HeartFilledIcon className="heart heart--filled" onClick={onClick} />}
      {!isActive && <HeartIcon className="heart" onClick={onClick} />}
    </Fragment>
  )
};

heart.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

heart.defaultProps = {
  isActive: false,
  onClick: () => {}
};

export default heart;
