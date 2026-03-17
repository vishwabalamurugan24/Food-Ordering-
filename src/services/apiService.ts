import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiService = {
  get: async (endpoint: string) => {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  },
  post: async (endpoint: string, data: any) => {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    return response.data;
  }
};
