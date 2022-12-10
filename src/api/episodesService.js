// *** check the episodes schema here: https://finalspaceapi.com/docs/endpoints/episode ***
import { get } from "./api.js";

const endpoints = {
  episodes: '/episode',
  single: id => `/episode${id}`,
  limited: limit => `/episode/?limit=${limit}`,
};

export const getEpisodes = async () => {
  return get(endpoints.episodes);
};

export const getLimitEpisodes = async limit => {
  return get(endpoints.limited(limit));
};

export const getSingleEpisode = async (id) => { 
  return get(endpoints.single(id))
}