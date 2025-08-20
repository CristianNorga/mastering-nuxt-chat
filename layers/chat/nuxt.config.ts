// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	pages: true,
	future: {
		compatibilityVersion: 4,
	},
	devtools: { enabled: true },

	runtimeConfig: {
		openaiApiKey: process.env.OPENAI_API_KEY,
		environment: process.env.NODE_ENV,
	},
});
