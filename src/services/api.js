import axios from 'axios';

const apiUrl = 'https://events-app-backend-mx0j.onrender.com/events';

export const requestEvents = async (page = 1, perPage = 8) => {
  const { data } = await axios.get(`${apiUrl}?page=${page}&perPage=${perPage}`);
  return data;
};
