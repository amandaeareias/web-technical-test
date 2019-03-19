import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import Badge from '@/components/UI/Badge/Badge';
import Circle from '@/components/UI/Circle/Circle';
import Image from '@/components/UI/Image/Image';
import Like from '@/containers/Like/Like';

const card = ({ name, cmc, type, rarity, rarityColors, text, imageUrl }) => {
  return (
    <div className="card">
      <div className="card__image">
        <Image src={imageUrl} alt={name} />
      </div>
      <div className="card__badge">
        <Badge color={rarityColors.color} background={rarityColors.background}>{rarity}</Badge>
      </div>
      <div className="card__cost">
        <Circle color={rarityColors.color} background={rarityColors.background}>{cmc}</Circle>
      </div>
      <div className="card__info">
        <div className="card__title">{name}</div>
        {type}
      </div>
      <div className="card__description">{text}</div>
      <div className="card__footer">
        <Like />
      </div>
    </div>
  )
};

card.propTypes = {
  name: PropTypes.string.isRequired,
  cmc: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

card.defaultProps = {
  imageUrl: ''
};

export default card;
