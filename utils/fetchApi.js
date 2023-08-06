import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
<<<<<<< HEAD
      'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
=======
      'x-rapidapi-host':process.env.NEXT_PUBLIC_RAPID_API_HOST,
      'x-rapidapi-key':process.env.NEXT_PUBLIC_RAPID_API_KEY,
>>>>>>> 1097083bc854008dc6aa6a3d991a7cbb5eb75e11
    },
  });
    
  return data;
}
