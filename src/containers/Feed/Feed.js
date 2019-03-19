import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CardsList from '@/components/CardsList/CardsList';
import CardsSlider from '@/components/CardsSlider/CardsSlider';
import * as selectors from '@/store/selectors';

const feed = ({cards, isList}) => {
  return (
    <Fragment>
      {isList && <CardsList cards={cards} />}
      {!isList && <CardsSlider cards={cards} />}
    </Fragment>
  )
};

const mapStateToProps = state => {
  return {
    isList: selectors.isFeedList(state)
  }
};

export default connect(mapStateToProps)(feed);
