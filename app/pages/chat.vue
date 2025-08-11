<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();

useHead({
	title: chat.value.title,
	meta: [
		{ name: 'name', content: 'Chat with our AI' },
		{ name: 'description', content: 'Project Mastering Nuxt' },
	],
});
</script>

<template>
	<ChatWindow :chat :messages @send-message="sendMessage" />
</template>
