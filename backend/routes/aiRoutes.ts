import { Router } from 'express';
import { getRecommendations, chatWithAI, getSuggestionsByWeather } from '../controllers/aiController';

const router = Router();

router.post('/recommend', getRecommendations);
router.post('/chat', chatWithAI);
router.get('/weather-suggestions', getSuggestionsByWeather);

export default router;
