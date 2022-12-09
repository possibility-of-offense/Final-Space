const HOST = 'https://finalspaceapi.com/api/v0/';

const normalizeData = data => {
  return data.map(obj => (data = Object.assign({}, (obj.id = obj))));
};

export const get = async endpoint => {
  try {
    const res = await fetch(HOST + endpoint);
    return normalizeData(await res.json());
  } catch (error) {
    throw new Error(error);
  }
};
