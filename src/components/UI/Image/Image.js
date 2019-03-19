import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Placeholder from '@/components/UI/Placeholder/Placeholder';
import './Image.scss';

const image = ({src, alt}) => {
  const [image, setImage] = useState(src);

  return (
    <Fragment>
      {image && <img className="image" src={image} alt={alt} onError={() => setImage('')} />}
      {!image && <Placeholder />}
    </Fragment>
  )
};

image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

image.defaultProps = {
  src: '',
  alt: ''
};

export default image;
