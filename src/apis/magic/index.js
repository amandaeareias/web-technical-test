import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.magicthegathering.io/v1/'
});

export const API = {
  getCards() {
    return instance.get('cards').then(({data}) =>  data).then(({cards}) => cards);
  }
};
