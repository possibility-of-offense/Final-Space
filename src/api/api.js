const HOST = "https://finalspaceapi.com/api/v0/";

const normalizeData = (data) => {
  if (data.length > 1) {
    return data.reduce((acc, cur) => {
      const id = cur.id;

      acc[id] = cur;
      return acc;
    }, {});
  }
  return data;
};

export const get = async (endpoint) => {
  try {
    const res = await fetch(HOST + endpoint);
    return normalizeData(await res.json());
  } catch (error) {
    throw new Error(error);
  }
};
