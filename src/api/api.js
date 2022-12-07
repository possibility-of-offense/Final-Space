const HOST = 'https://finalspaceapi.com/api/v0/';

const normalizeData = data => {
  return data.reduce((acc, cur) => {
    const id = cur.id;

    acc[id] = cur;
    return acc;
  }, {});
};

export const get = async endpoint => {
  try {
    const res = await fetch(HOST + endpoint);
    return normalizeData(await res.json());
  } catch (error) {
    alert(error.message);
  }
};
