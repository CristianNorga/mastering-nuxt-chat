// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/ui', '@nuxt/eslint'],
});
