import { createMessageForChat } from '../../../../repository/chatRepository';

export default defineEventHandler(async (_event) => {
	const { id } = getRouterParams(_event);
	const body = await readBody(_event);

	return createMessageForChat({
		chatId: id,
		content: body.content,
		role: body.role,
	});
});
