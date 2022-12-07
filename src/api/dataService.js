import { get } from "./api.js";

const endpoints = {
  characters: "/character",
};

export const getCharacters = async () => {
  const data = await get(endpoints.characters);

  const normalizedData = data.reduce((acc, cur) => {
    const id = cur.id;

    acc[id] = cur;
    return acc;
  }, {});

  return normalizedData;
};
