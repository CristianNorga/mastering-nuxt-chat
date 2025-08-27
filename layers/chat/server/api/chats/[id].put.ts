import { updateChat } from '../../repository/chatRepository';
import { UpdateChatSchema } from '../../schemas';

export default defineEventHandler(async (_event) => {
	const { id } = getRouterParams(_event);

	const { success, data } = await readValidatedBody(
		_event,
		UpdateChatSchema.safeParse
	);

	if (!success) {
		return 400;
	}

	const storage = useStorage('db');
	await storage.setItem('chats:has-new-chat', true);

	return updateChat(id, data);
});
