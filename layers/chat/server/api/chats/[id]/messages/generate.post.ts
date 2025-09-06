import {
	getMessagesByChatId,
	createMessageForChat,
	getChatByIdForUser,
} from '../../../../repository/chatRepository';
import {
	createOpenAIModel,
	generateChatResponse,
	createOllamaModel,
} from '../../../../services/ai-service';
import { getAuthenticatedUserId } from '#layers/auth/server/utils/auth';

export default defineEventHandler(async (_event) => {
	const { id } = getRouterParams(_event);
	const userId = await getAuthenticatedUserId(_event);

	// Verify user owns the chat
	const chat = await getChatByIdForUser(id, userId);
	if (!chat) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Chat not found',
		});
	}

	const history = await getMessagesByChatId(id);

	const { openaiApiKey, environment } = useRuntimeConfig();

	const model =
		environment === 'development'
			? createOllamaModel()
			: createOpenAIModel(openaiApiKey);

	const reply = await generateChatResponse(model, history);

	return createMessageForChat({
		chatId: id,
		content: reply,
		role: 'assistant',
	});
});
