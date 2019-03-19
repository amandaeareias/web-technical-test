export const getItems = state => state.items;
export const isLoading = state => state.isLoading;
export const getOptions = state => {
  const options = state.options;
  const optionSelected = state.optionSelected;

  return options.map(option => {
    return {
      ...option,
      selected: option.id === optionSelected
    };
  });
};
export const isList = state => state.optionSelected === 1;
