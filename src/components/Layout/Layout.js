import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '@/containers/Header/Header';

const layout = ({children}) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  )
};

layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default layout;
