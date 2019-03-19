import React, {Fragment} from 'react';
import Feed from '@/containers/Feed/Feed';
import * as operations from '@/store/operations';
import * as selectors from '@/store/selectors';

const index = ({cards}) => {
  return (
    <Fragment>
      <h1>The Gathering Cards</h1>
      <Feed cards={cards} />
    </Fragment>
  );
};

index.getInitialProps = async ({ store }) => {
  await store.dispatch(operations.fetchCards());

  const state = store.getState();
  const items = selectors.getFeedItems(state);
  const cards = items.map(item => selectors.getCardById(state, item));

  return {
    cards
  }
};

export default index;
