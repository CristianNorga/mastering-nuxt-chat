import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { createOllama } from 'ollama-ai-provider';
import type { Message, LanguageModelV1 } from 'ai';

export const createOllamaModel = () => {
	const ollama = createOllama();
	return ollama('llama3.2');
};

export const createOpenAIModel = (apikey: string) => {
	const openai = createOpenAI({ apiKey: apikey });
	return openai('gpt-4o-mini');
};

export async function generateChatResponse(
	model: LanguageModelV1,
	messages: Message[]
) {
	if (!Array.isArray(messages) || messages.length === 0) {
		throw new Error('Invalid messages');
	}

	const response = await generateText({
		model,
		messages,
	});

	return response.text.trim();
}

export async function generateChatTitle(
	model: LanguageModelV1,
	firstMessage: string
): Promise<string> {
	const response = await generateText({
		model,
		system:
			'Eres un experto en generar títulos atractivos y descriptivos para conversaciones de chat.',
		prompt: `Genera un título para la conversación de 3 palabras o menos (solo retorna el titulo): ${firstMessage}`,
	});
	return response.text.trim();
}
