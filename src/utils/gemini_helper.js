import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { promises as fs } from 'fs'; // Import Node.js file system promises API
import path from 'path'; // Import Node.js path module
import readline from 'readline'; // Import Node.js readline module for interactive input

// Configure the Gemini API with your API key from environment variables
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("Error: GEMINI_API_KEY environment variable not set.");
    console.error("Please ensure your .env file is in the project root and contains GEMINI_API_KEY='YOUR_API_KEY_HERE'");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateCodeFromGemini(promptText) {
    /**
     * Asynchronously generates code using the Gemini 2.5 Flash model.
     *
     * Args:
     * promptText (string): The text prompt to send to the model, specifically asking for code.
     *
     * Returns:
     * string: The generated code content, or an error message.
     */
    try {
        // Initialize the GenerativeModel for text generation, using 'gemini-2.5-flash'
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Craft a prompt that explicitly asks for code and no extra text
        const fullPrompt = `Generate only the JavaScript code for the following request. Do not include any explanations, markdown code block delimiters (like \`\`\`javascript), or extra text. Just the raw code.\n\nRequest: ${promptText}`;

        console.log(`\nSending prompt to Gemini 2.5 Flash for code generation...`);
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;

        // Return the generated text (which should be just code based on the prompt)
        return response.text();

    } catch (error) {
        return `An error occurred during code generation: ${error.message}`;
    }
}

async function main() {
    /**
     * Main function to run the Gemini CLI example for interactive code generation and file output.
     *
     * Usage: node src/utils/gemini_helper.js <output_filename.js>
     * Example: node src/utils/gemini_helper.js Button.jsx
     * The script will then prompt you for the code generation request.
     */
    const args = process.argv.slice(2); // Get command-line arguments (excluding 'node' and script path)

    if (args.length < 1) {
        console.log("Usage: node src/utils/gemini_helper.js <output_filename.js>");
        console.log("Example: node src/utils/gemini_helper.js Button.jsx");
        process.exit(1);
    }

    const outputFilename = args[0];
    const componentsDirPath = path.join(process.cwd(), 'src', 'components'); // Path to your components folder

    // Create a readline interface for interactive input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        // Ensure the components directory exists
        await fs.mkdir(componentsDirPath, { recursive: true });
        console.log(`Ensured directory exists: ${componentsDirPath}`);

        const outputPath = path.join(componentsDirPath, outputFilename);

        // Prompt the user for input
        const userPrompt = await new Promise(resolve => {
            rl.question('Enter your code generation request (e.g., "a React component for a button"): ', resolve);
        });

        if (!userPrompt.trim()) {
            console.error("Error: No prompt entered. Exiting.");
            process.exit(1);
        }

        const generatedCode = await generateCodeFromGemini(userPrompt);

        if (generatedCode.startsWith("An error occurred:")) {
            console.error(generatedCode); // Log the error from Gemini generation
            process.exit(1);
        }

        // Write the generated code to the specified file
        await fs.writeFile(outputPath, generatedCode);

        console.log("\n--- Gemini Pro Code Generation Complete ---");
        console.log(`Code successfully written to: ${outputPath}`);
        console.log("-------------------------------------------\n");

    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        process.exit(1);
    } finally {
        rl.close(); // Close the readline interface
    }
}

// Run the main asynchronous function
main();
