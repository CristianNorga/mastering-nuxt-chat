import {
	createOllamaModel,
	createOpenAIModel,
	generateChatResponse,
} from '../services/ai-service';
import { ChatMessageSchema } from '../schemas';

export default defineEventHandler(async (_event) => {
	const { success, data } = await readValidatedBody(
		_event,
		ChatMessageSchema.safeParse
	);

	if (!success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
		});
	}

	const { messages } = data as {
		messages: Message[];
		chatId: string;
	};

	const { openaiApiKey, environment } = useRuntimeConfig();

	const model =
		environment === 'development'
			? createOllamaModel()
			: createOpenAIModel(openaiApiKey);

	const response = await generateChatResponse(model, messages);

	return {
		id: messages.length.toString(),
		role: 'assistant',
		content: response,
	};
});
