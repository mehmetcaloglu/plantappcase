import axios from 'axios';
import { ApiResponse, Category, Question } from '../types';

const api = axios.create({
  baseURL: 'https://dummy-api-jtg6bessta-ey.a.run.app',
});

export const getCategories = async (): Promise<ApiResponse<Category>> => {
  const response = await api.get<ApiResponse<Category>>('/getCategories');
  return response.data;
};

export const getQuestions = async (): Promise<Question[]> => {
  const response = await api.get<Question[]>('/getQuestions');
  return response.data;
};

export default api; 