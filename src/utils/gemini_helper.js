// Load environment variables from .env file using ES module syntax
import 'dotenv/config';

import { GoogleGenerativeAI } from "@google/generative-ai";

// Configure the Gemini API with your API key from environment variables
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("Error: GEMINI_API_KEY environment variable not set.");
    console.error("Please ensure your .env file is in the project root and contains GEMINI_API_KEY='YOUR_API_KEY_HERE'");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContentFromGemini(promptText) {
    /**
     * Asynchronously generates content using the Gemini Pro model.
     *
     * Args:
     * promptText (string): The text prompt to send to the model.
     *
     * Returns:
     * string: The generated text content, or an error message.
     */
    try {
        // Initialize the GenerativeModel for text generation
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Generate content asynchronously
        console.log(`Sending prompt to Gemini Pro: '${promptText}'...`);
        const result = await model.generateContent(promptText);
        const response = await result.response;

        // Return the generated text
        return response.text();

    } catch (error) {
        return `An error occurred: ${error.message}`;
    }
}

async function main() {
    /**
     * Main function to run the Gemini CLI example.
     */
    // Example prompt - you can change this
    const userPrompt = "Write a short, inspiring quote about learning.";

    // Get the generated content
    const generatedText = await generateContentFromGemini(userPrompt);

    // Print the result
    console.log("\n--- Gemini Pro Response ---");
    console.log(generatedText);
    console.log("---------------------------\n");
}

// Run the main asynchronous function
main();
