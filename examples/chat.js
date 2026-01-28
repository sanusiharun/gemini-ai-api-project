import { startChat, sendMessage } from '../index.js';
import readline from 'readline';

/**
 * Contoh penggunaan Gemini AI untuk chat interaktif
 * Example of using Gemini AI for interactive chat
 */

// Create readline interface untuk input dari user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  console.log('=== Gemini AI Chat Example ===');
  console.log('Mulai chat dengan Gemini AI. Ketik "exit" untuk keluar.\n');
  
  // Start chat session
  const chat = startChat();
  
  // Fungsi untuk menanyakan pertanyaan
  const askQuestion = (query) => {
    return new Promise((resolve) => {
      rl.question(query, resolve);
    });
  };
  
  // Chat loop
  while (true) {
    const userInput = await askQuestion('You: ');
    
    if (userInput.toLowerCase() === 'exit') {
      console.log('Terima kasih! Sampai jumpa!');
      rl.close();
      break;
    }
    
    if (!userInput.trim()) {
      continue;
    }
    
    try {
      const response = await sendMessage(chat, userInput);
      console.log(`\nGemini: ${response}\n`);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}

// Run the chat
main().catch(console.error);
