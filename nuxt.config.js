import { resolve } from 'path';

export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'AIMO',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [
			// { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Fascinate&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Matija added this
	tailwindcss: {
		jit: true,
	},

	autoprefixer: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	alias: {
		icons: resolve(__dirname, './components/icons'),
		UI: resolve(__dirname, './components/UI'),
		logo: resolve(__dirname, './components/logo'),
		layout: resolve(__dirname, './components/layout'),
		menus: resolve(__dirname, './components/menus'),
	},
};
