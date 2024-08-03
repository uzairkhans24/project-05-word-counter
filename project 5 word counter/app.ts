#!/usr/bin/env node
import * as readline from 'readline';

// Function to count words in a given string
function countWords(text: string): number {
  // Split the text by spaces and filter out any empty strings
  const words = text.trim().split(/\s+/);
  return words.length;
}

// Setup readline interface to read from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Please enter a text: ', (answer) => {
  const wordCount = countWords(answer);
  console.log(`Word count: ${wordCount}`);
  rl.close();
});
