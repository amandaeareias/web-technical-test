import { normalize } from 'normalizr';
import { API } from '@/apis/magic';
import * as selectors from '@/store/selectors';
import * as schema from '@/store/entities/schema';
import * as actions from './actions';

export const fetchCards = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isLoading = selectors.isFeedLoading(state);

    if (isLoading) {
      return;
    }

    dispatch(actions.fetchCardsStart());

    try {
      const cards = await API.getCards();
      const normalizedCards = normalize(cards, schema.cards);

      dispatch(actions.fetchCardsSuccess(normalizedCards));
    } catch (e) {
      dispatch(actions.fetchCardsFail(e));
    }

  }
};
