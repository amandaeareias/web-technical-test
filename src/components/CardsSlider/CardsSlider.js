import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@/components/UI/Slider/Slider';
import Slide from '@/components/UI/Slider/Slide/Slide';
import Box from '@/components/UI/Box/Box';
import Card from '@/components/Card/Card';

const cardsSlider = ({cards}) => {
  return (
    <Slider>
      {cards.map(card => (
        <Slide key={card.id}>
          <Box>
            <Card {...card} />
          </Box>
        </Slide>
      ))}
    </Slider>
  )
};

cardsSlider.propTypes = {
  cards: PropTypes.array.isRequired
};

export default cardsSlider;
