// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	pages: true,
	future: {
		compatibilityVersion: 4,
	},
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/ui', '@nuxt/eslint'],

	runtimeConfig: {
		public: {
			someValue: process.env.PUBLIC_SOME_VALUE,
		},
		openaiApiKey: process.env.OPENAI_API_KEY,
	},
});
