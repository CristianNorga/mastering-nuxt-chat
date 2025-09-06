import { getAllChats } from '../../repository/chatRepository';
import { getAuthenticatedUserId } from '#layers/auth/server/utils/auth';

export default defineCachedEventHandler(
	async (_event) => {
		const userId = await getAuthenticatedUserId(_event);

		const storage = useStorage('db');
		await storage.setItem(`chats:has-new-chat:${userId}`, false);

		return getAllChats();
	},
	{
		name: 'getAllChats',
		maxAge: 0,
		swr: false,
		async shouldInvalidateCache(_event) {
			const userId = await getAuthenticatedUserId(_event);

			const storage = useStorage('db');
			const hasNewChat = await storage.getItem<boolean>(
				`chats:has-new-chat:${userId}`
			);
			return hasNewChat || false;
		},
	}
);
