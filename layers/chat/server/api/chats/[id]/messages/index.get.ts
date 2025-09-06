import {
	getMessagesByChatId,
	getChatByIdForUser,
} from '../../../../repository/chatRepository';
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

	const messages = await getMessagesByChatId(id);
	return messages;
});
