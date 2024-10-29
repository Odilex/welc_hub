import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};

export default api;