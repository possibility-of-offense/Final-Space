import { get } from './api.js';

const endpoints = {
  characters: '/character',
};

export const getCharacters = async () => {
  return get(endpoints.characters);
};
