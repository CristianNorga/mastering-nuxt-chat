import {
	getMessagesByChatId,
	createMessageForChat,
} from '../../../../repository/chatRepository';
import {
	createOpenAIModel,
	generateChatResponse,
	createOllamaModel,
} from '../../../../services/ai-service';

export default defineEventHandler(async (_event) => {
	const { id } = getRouterParams(_event);

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
