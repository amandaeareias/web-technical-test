import { combineReducers } from 'redux';
import * as types from './types';
import * as cardsTypes from '@/store/entities/cards/types';

const items = (state = [], action) => {
  switch (action.type) {
    case cardsTypes.FETCH_CARDS_SUCCESS: return [...state, ...action.response.result];
    default: return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case cardsTypes.FETCH_CARDS_START: return true;
    case cardsTypes.FETCH_CARDS_SUCCESS:
    case cardsTypes.FETCH_CARDS_FAIL: return false;
    default: return state;
  }
};

const optionsInitialState = [
  { id: 1, value: 'List' },
  { id: 2, value: 'Slider' }
];

const options = (state = optionsInitialState) => state;

const optionSelected = (state = 1, action) => {
  switch (action.type) {
    case types.FEED_CHANGE_OPTION: return action.id;
    default: return state;
  }
};

const feed = combineReducers({
  items,
  isLoading,
  options,
  optionSelected
});

export default feed;
