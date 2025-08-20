import {
	createOllamaModel,
	createOpenAIModel,
	generateChatResponse,
} from '../service/ai-service';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { messages } = body;

	const id = messages[messages.length - 1];

	const { openaiApiKey, environment } = useRuntimeConfig();

	const model =
		environment === 'development'
			? createOllamaModel()
			: createOpenAIModel(openaiApiKey);

	const response = await generateChatResponse(model, messages);

	return {
		id,
		role: 'assistant',
		content: response,
	};
});
