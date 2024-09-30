import axios from 'axios';

const apiUrl = 'https://events-app-backend-mx0j.onrender.com';

export const requestEvents = async (page = 1, perPage = 8) => {
  const { data } = await axios.get(
    `${apiUrl}/events?page=${page}&perPage=${perPage}`
  );
  return data;
};

export const createEventUser = async (eventId, formData) => {
  const response = await axios.post(`${apiUrl}/register/${eventId}`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
