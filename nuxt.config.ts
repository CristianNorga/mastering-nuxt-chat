// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	future: {
		compatibilityVersion: 4,
	},

	devtools: { enabled: true },

	modules: ['@nuxt/eslint', '@nuxt/image', '@prisma/nuxt'],

	vite: {
		optimizeDeps: {
			include: ['debug'],
		},
	},
	nitro: {
		storage: {
			db: {
				driver: 'fs',
				base: './.data',
			},
		},
	},
	routeRules: {
		'/': {
			prerender: true,
		},
	},

	$production: {
		nitro: {
			storage: {
				db: {
					driver: 'netlify-blobs',
					name: 'db',
				},
			},
		},
	},
});
