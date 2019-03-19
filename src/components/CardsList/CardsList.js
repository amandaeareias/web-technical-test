import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '@/components/UI/Box/Box';
import Card from '@/components/Card/Card';


const cardsList = ({cards}) => {
  return (
    <Fragment>
      {cards.map(card => (
        <Box key={card.id}>
          <Card {...card} />
        </Box>
      ))}
    </Fragment>
  )
};

cardsList.propTypes = {
  cards: PropTypes.array.isRequired
};

export default cardsList;
