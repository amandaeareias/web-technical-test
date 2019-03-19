import React from 'react';

const withColor = (Cmp) => {
  return (props) => {
    const style = {
      background: props.background,
      color: props.color
    };

    return <Cmp style={style} {...props} />;
  };
};

export default withColor;
