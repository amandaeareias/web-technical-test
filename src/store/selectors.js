import * as entitiesSelectors from './entities/selectors';
import * as feedSelectors from './modules/feed/selectors';

export const getCardById = (state, cardId) => entitiesSelectors.getCardById(state.entities, cardId);

export const getFeedItems = state => feedSelectors.getItems(state.feed);
export const isFeedLoading = state => feedSelectors.isLoading(state.feed);
export const getFeedOptions = state => feedSelectors.getOptions(state.feed);
export const isFeedList = state => feedSelectors.isList(state.feed);
