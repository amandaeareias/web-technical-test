import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  if (action.response &&  action.response.entities && action.response.entities.cards) {
    return {
      ...state,
      ...action.response.entities.cards
    }
  }

  return state;
};

const cards = combineReducers({
  byId
});

export default cards;
