import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Toggle from '@/components/UI/Toggle/Toggle';
import ToggleItem from '@/components/UI/Toggle/ToggleItem/ToggleItem';

const header = ({title, options, onSelectOption}) => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const element = headerRef.current;
    const height = element.clientHeight;

    setHeaderHeight(height);
  }, []);

  return (
    <Fragment>
      <header className="header" ref={headerRef}>
        <div className="header__title">{title}</div>
        <Toggle>
          {options.map(option => (
            <ToggleItem key={option.id}
                        isSelected={option.selected}
                        onClick={() => onSelectOption(option.id)}>{option.value}</ToggleItem>
          ))}
        </Toggle>
      </header>
      <div style={{ height: `${headerHeight}px`}}/>
    </Fragment>

  )
};

header.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelectOption: PropTypes.func
};

header.defaultProps = {
  onSelectOption: () => {}
};

export default header;
