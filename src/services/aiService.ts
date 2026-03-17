import { apiService } from './apiService';

export const aiService = {
  sendMessage: async (userId: string, message: string) => {
    return await apiService.post('/ai/chat', { userId, message });
  },
  getRecommendations: async (context: any) => {
    return await apiService.post('/ai/recommendations', context);
  },
  getWeatherSuggestions: async (location: string) => {
    return await apiService.get(`/ai/weather-suggestions?location=${location}`);
  }
};
