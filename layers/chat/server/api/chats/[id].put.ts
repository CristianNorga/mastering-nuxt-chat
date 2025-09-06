import {
	updateChat,
	getChatByIdForUser,
} from '../../repository/chatRepository';
import { UpdateChatSchema } from '../../schemas';
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

	const { success, data } = await readValidatedBody(
		_event,
		UpdateChatSchema.safeParse
	);

	if (!success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
		});
	}

	const storage = useStorage('db');
	await storage.setItem(`chats:has-new-chat:${userId}`, true);

	return updateChat(id, data);
});
