import { get } from './api.js';

const endpoints = {
  characters: '/character',
  limited: limit => `/character/?limit=${limit}`,
  single: id => `character/${id}`,
};

export const getCharacters = async () => {
  return get(endpoints.characters);
};

export const getLimitChars = async limit => {
  return get(endpoints.limited(limit));
};

export const getSingleChar = async (id) => { 
  return get(endpoints.single(id))
}