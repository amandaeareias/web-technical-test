import React from 'react';
import PropTypes from 'prop-types';
import './ToggleItem.scss';

const toggleItem = ({children, isSelected, onClick}) => {
  let classes = ['toggle__item'];

  if (isSelected) {
    classes = [...classes, 'toggle__item--selected'];
  }

  return (
    <div className={classes.join(' ')} onClick={onClick}>{children}</div>
  )
};

toggleItem.propTypes = {
  children: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

toggleItem.defaultProps = {
  isSelected: false,
  onClick: () => {}
};

export default toggleItem;
