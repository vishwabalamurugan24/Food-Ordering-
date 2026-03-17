import OpenAI from 'openai';
import { db } from '../config/firebaseAdmin';

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

export const getSmartRecommendations = async (context: {
  weather: string;
  budget?: number;
  preference?: string;
}) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are a food recommendation assistant." },
      { role: "user", content: `Suggest items based on weather: ${context.weather}, budget: ${context.budget}, preference: ${context.preference}` }
    ],
  });

  // Placeholder logic to map AI text back to menu items or just return the text
  return { suggestion: completion.choices[0].message.content };
};

export const processAIInteraction = async (userId: string, message: string) => {
  // Intent Detection Step
  const intentCompletion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "Identify the user intent. Possible intents: SEARCH_RESTAURANT, GET_WEATHER, ORDER_FOOD, GENERAL_CHAT. Respond with only the intent name." },
      { role: "user", content: message }
    ],
  });

  const intent = intentCompletion.choices[0].message.content?.trim();
  console.log(`Detected Intent: ${intent}`);

  // Base Response Step
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: `You are a helpful food ordering assistant. The detected user intent is: ${intent}.` },
      { role: "user", content: message }
    ],
  });

  const response = completion.choices[0].message.content;
  
  await db.collection('aiInteractions').add({
    user_id: userId,
    user_message: message,
    ai_response: response,
    intent,
    timestamp: new Date()
  });

  return { response, intent };
};
