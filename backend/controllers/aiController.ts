import { Request, Response } from 'express';
import { getSmartRecommendations, processAIInteraction } from '../services/aiService';
import { getWeatherRecommendation } from '../services/weatherService';

export const getRecommendations = async (req: Request, res: Response) => {
  try {
    const context = req.body;
    const items = await getSmartRecommendations(context);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
};

export const chatWithAI = async (req: Request, res: Response) => {
  const { userId, message } = req.body;
  try {
    const aiResponse = await processAIInteraction(userId, message);
    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: 'AI interaction failed' });
  }
};

export const getSuggestionsByWeather = async (req: Request, res: Response) => {
  try {
    const { location } = req.query;
    const suggestions = await getWeatherRecommendation(location as string);
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get weather suggestions' });
  }
};
