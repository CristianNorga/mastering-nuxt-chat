import { updateChat } from '../../../repository/chatRepository';
import {
	createOpenAIModel,
	generateChatTitle,
	createOllamaModel,
} from '../../../services/ai-service';

export default defineEventHandler(async (event) => {
	const { id } = getRouterParams(event);
	const { message } = await readBody(event);

	const { openaiApiKey, environment } = useRuntimeConfig();

	const model =
		environment === 'development'
			? createOllamaModel()
			: createOpenAIModel(openaiApiKey);

	const title = await generateChatTitle(model, message);

	return updateChat(id, { title });
});
