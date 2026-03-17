export interface MenuItem {
  food_id: string;
  food_name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  rating?: number;
  availability_status?: string;
}

export const API_BASE_URL = 'http://localhost:5000/api';

export const fetchMenu = async (): Promise<MenuItem[]> => {
  const response = await fetch(`${API_BASE_URL}/menu`);
  if (!response.ok) throw new Error('Failed to fetch menu');
  return response.json();
};

export const fetchRecommendations = async (context: any): Promise<MenuItem[]> => {
  const response = await fetch(`${API_BASE_URL}/ai/recommend`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(context)
  });
  if (!response.ok) throw new Error('Failed to fetch recommendations');
  return response.json();
};

export const sendAIChat = async (userId: string, message: string): Promise<{ response: string }> => {
  const response = await fetch(`${API_BASE_URL}/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, message })
  });
  if (!response.ok) throw new Error('AI Chat failed');
  return response.json();
};
