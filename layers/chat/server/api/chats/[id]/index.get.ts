import { getChatByIdForUser } from '../../../repository/chatRepository';
import { getAuthenticatedUserId } from '#layers/auth/server/utils/auth';

export default defineEventHandler(async (_event) => {
	const { id } = getRouterParams(_event);
	const userId = await getAuthenticatedUserId(_event);

	const chat = await getChatByIdForUser(id, userId);

	if (!chat) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Chat not found',
		});
	}

	return chat;
});
