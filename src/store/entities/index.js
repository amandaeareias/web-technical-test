import { combineReducers } from 'redux';
import cards from './cards/reducers';

const entities = combineReducers({
  cards
});

export default entities;
