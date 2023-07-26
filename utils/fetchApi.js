import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a6577cd029msh1cc3f0bc1c21b0cp10c3ecjsnb5776d1020c0',
    },
  });
    
  return data;
}