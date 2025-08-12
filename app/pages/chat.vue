<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();

const appConfig = useAppConfig();

const title = computed(() =>
	chat.value.title ? `${chat.value.title} - ${appConfig.title}` : appConfig.title
);

useHead({
	title: title,
	meta: [
		{ name: 'name', content: 'Chat with our AI' },
		{ name: 'description', content: 'Project Mastering Nuxt' },
	],
});
</script>

<template>
	<ChatWindow :chat :messages @send-message="sendMessage" />
</template>
