import { MOCK_CHAT } from './mockData';

export default function useChat() {
	const chat = ref<Chat>(MOCK_CHAT);
	const messages = computed<ChatMessage[]>(() => chat.value.messages);

	function createMessage(message: string, role: ChatMessage['role']) {
		const id = messages.value.length.toString();

		return {
			id,
			role,
			content: message,
		};
	}

	async function sendMessage(message: string) {
		messages.value.push(createMessage(message, 'user'));

		const response = await $fetch<ChatMessage>('/api/ai', {
			method: 'POST',
			body: {
				messages: messages.value,
			},
		});

		messages.value.push(response);
	}

	return {
		chat,
		messages,
		sendMessage,
	};
}
