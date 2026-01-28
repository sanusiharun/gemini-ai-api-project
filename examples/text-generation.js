import { generateText } from '../index.js';

/**
 * Contoh penggunaan Gemini AI untuk generate text
 * Example of using Gemini AI for text generation
 */

async function main() {
  console.log('=== Gemini AI Text Generation Example ===\n');
  
  // Contoh 1: Generate cerita pendek
  console.log('1. Generating a short story...');
  const storyPrompt = 'Tuliskan cerita pendek tentang seorang programmer yang belajar AI';
  const story = await generateText(storyPrompt);
  console.log('Story:');
  console.log(story);
  console.log('\n---\n');
  
  // Contoh 2: Explain konsep programming
  console.log('2. Explaining a programming concept...');
  const explainPrompt = 'Jelaskan apa itu API dalam bahasa yang sederhana';
  const explanation = await generateText(explainPrompt);
  console.log('Explanation:');
  console.log(explanation);
  console.log('\n---\n');
  
  // Contoh 3: Generate code
  console.log('3. Generating code example...');
  const codePrompt = 'Buatkan contoh function JavaScript untuk menghitung faktorial';
  const code = await generateText(codePrompt);
  console.log('Code:');
  console.log(code);
}

// Run the examples
main().catch(console.error);
