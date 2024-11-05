import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export async function askQuestion(question, context = '', apiKey = process.env.OPENAI_API_KEY) {
    try {
        const openai = new OpenAI({
            apiKey: apiKey
        });
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: context ? `Context: ${context}\n\nQuestion: ${question}` : question
                }
            ],
            model: "gpt-4o-mini",
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error querying OpenAI:', error.message);
        throw error;
    }
}
