const HOST = 'https://finalspaceapi.com/api/v0/';

export const get = async endpoint => {
  try {
    const res =  await fetch(HOST + endpoint);
    return await res.json()
  } catch (error) {
    alert(error.message)
  }
};
