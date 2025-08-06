import type { Chat, ChatMessage } from '../types';
import { MOCK_CHAT } from './mockData';

export default function useChat() {
	const chat = ref<Chat>({ ...MOCK_CHAT });
	const messages = computed(() => chat.value.messages);

	const createMessage = (
		content: string,
		role: 'user' | 'assistant'
	): ChatMessage => {
		return {
			id: (chat.value.messages.length + 1).toString(),
			role,
			content,
		};
	};

	const sendMessage = (message: string) => {
		messages.value.push(createMessage(message, 'user'));
		// Simulate assistant response

		setTimeout(() => {
			messages.value.push(
				createMessage('This is a mock response from the assistant.', 'assistant')
			);
		}, 200);
	};

	return {
		chat,
		messages,
		sendMessage,
	};
}
