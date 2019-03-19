import * as types from './types';

export const fetchCardsStart = () => ({
  type: types.FETCH_CARDS_START
});

export const fetchCardsSuccess = (response) => ({
  type: types.FETCH_CARDS_SUCCESS,
  response
});

export const fetchCardsFail = (error) => ({
  type: types.FETCH_CARDS_FAIL,
  error
});
