import type { MenuItem } from './data';
import { menuItems } from './data';

export interface OrderState {
  items: { product: MenuItem; quantity: number }[];
  total: number;
}

export interface RecommendationContext {
  weather: 'Hot' | 'Rainy' | 'Cold';
  budget?: number;
  preference?: 'Healthy' | 'Spicy' | 'Sweet';
}

export const parseVoiceCommand = (command: string, _currentState: OrderState): { 
  action: 'ADD' | 'REMOVE' | 'CLEAR' | 'RECOMMEND' | 'UNKNOWN';
  item?: MenuItem;
  quantity?: number;
  message: string;
} => {
  const lower = command.toLowerCase();

  // Simple keyword matching for demo purposes
  if (lower.includes('add') || lower.includes('order')) {
    const found = menuItems.find(item => lower.includes(item.name.toLowerCase()));
    if (found) {
      return { action: 'ADD', item: found, quantity: 1, message: `Added ${found.name} to your cart.` };
    }
  }

  if (lower.includes('remove') || lower.includes('delete')) {
    const found = menuItems.find(item => lower.includes(item.name.toLowerCase()));
    if (found) {
      return { action: 'REMOVE', item: found, quantity: 1, message: `Removed ${found.name} from your cart.` };
    }
  }

  if (lower.includes('recommend') || lower.includes('suggest') || lower.includes('budget')) {
    return { action: 'RECOMMEND', message: "Let me find something perfect for you!" };
  }

  return { action: 'UNKNOWN', message: "I'm not sure I understood that. Could you try again?" };
};

export const getSmartRecommendations = (context: RecommendationContext): MenuItem[] => {
  return menuItems.filter(item => {
    let match = true;
    
    if (context.weather === 'Hot' && !item.isCooling) match = false;
    if (context.weather === 'Rainy' && item.isCooling) match = false;
    if (context.budget && item.price > context.budget) match = false;
    if (context.preference === 'Healthy' && item.healthScore < 8) match = false;
    if (context.preference === 'Spicy' && !item.isSpicy) match = false;
    
    return match;
  }).slice(0, 3);
};
