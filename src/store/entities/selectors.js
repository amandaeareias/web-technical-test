import * as cardsSelectors from './cards/selectors';

export const getCardById = (state, cardId) => cardsSelectors.getCardById(state.cards, cardId);
