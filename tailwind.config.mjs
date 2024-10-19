/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-proyecto-web': '#FF885B',
				'background-proyecto-web-light': '#ea5753',
			},
		},
	},
	plugins: [],
}
