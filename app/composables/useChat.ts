import type { Chat, ChatMessage } from '../types';
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

		// Simulate an API call to send the message
		setTimeout(() => {
			const response = `Response to: ${message}`;

			messages.value.push(createMessage(response, 'assistant'));
		}, 1000);
	}

	return {
		chat,
		messages,
		sendMessage,
	};
}
