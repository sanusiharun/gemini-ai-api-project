import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generate text using Gemini AI
 * @param {string} prompt - The prompt to send to Gemini
 * @param {string} modelName - The model to use (default: gemini-pro)
 * @returns {Promise<string>} - The generated text
 */
export async function generateText(prompt, modelName = 'gemini-pro') {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating text:', error.message);
    throw error;
  }
}

/**
 * Start a chat session with Gemini AI
 * @param {string} modelName - The model to use (default: gemini-pro)
 * @returns {Object} - Chat session object
 */
export function startChat(modelName = 'gemini-pro') {
  const model = genAI.getGenerativeModel({ model: modelName });
  const chat = model.startChat({
    history: [],
  });
  return chat;
}

/**
 * Send a message in a chat session
 * @param {Object} chat - Chat session object
 * @param {string} message - Message to send
 * @returns {Promise<string>} - The response text
 */
export async function sendMessage(chat, message) {
  try {
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error sending message:', error.message);
    throw error;
  }
}

export default {
  generateText,
  startChat,
  sendMessage,
};
