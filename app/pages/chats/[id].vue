<script setup lang="ts">
const { params } = useRoute();

const {
	chat: chatFromChats,
	messages,
	sendMessage,
} = useChat(params.id as string);

if (!chatFromChats.value) {
	await navigateTo('/', { replace: true });
}
const chat = computed(() => chatFromChats.value as Chat);

const typing = ref(false);

const handleSendMessage = async (message: string) => {
	typing.value = true;
	await sendMessage(message);
	typing.value = false;
};

const appConfig = useAppConfig();

const title = computed(() =>
	chat.value?.title
		? `${chat.value.title} - ${appConfig.title}`
		: appConfig.title
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
	<ChatWindow :typing :chat :messages @send-message="handleSendMessage" />
</template>
