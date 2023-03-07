import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

axios.defaults.baseURL = `${BASE_URL}`;

const getAllCharacters = async () => {
  try {
    const res = await axios.get('/character');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getOneCharacter = async id => {
  try {
    const res = await axios.get(`/character/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getCharacterByName = async name => {
  try {
    const res = await axios.get('/character/', {
      params: { name },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCharacters, getOneCharacter, getCharacterByName };
