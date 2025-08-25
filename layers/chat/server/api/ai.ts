import {
	createOllamaModel,
	createOpenAIModel,
	generateChatResponse,
} from '../services/ai-service';
import { ChatMessageSchema } from '../schemas';

export default defineEventHandler(async (event) => {
	const { success, data } = await readValidatedBody(
		event,
		ChatMessageSchema.safeParse
	);

	if (!success) {
		return 400;
	}

	const { messages } = data as {
		messages: ChatMessage[];
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
