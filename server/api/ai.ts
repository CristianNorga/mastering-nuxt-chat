export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { messages } = body;

	const id = messages[messages.length - 1];
	const lastMessage = messages[messages.length - 1];
	return {
		id,
		role: 'assistant',
		content: `(server): do you said ${lastMessage.content} `,
	};
});
