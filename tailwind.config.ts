import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'dark-bg': '#121212',
				'sub-dark-bg': '#1e1e1f',
				'light-bg': '#f9f9f9',
				'sub-light-bg': '#fff',
				'light-gray': '#c1c1c1',
				'dark-gray': '#5c5b5c',
				'dark-gray-hover': '#7d7c7d',
				'stack-1': '#944CF6',
				'stack-2': '#A742D4',
				'stack-3': '#E554EB',
				'stack-4': '#D44294',
				'stack-5': '#d44251',
			},
			boxShadow: {
				'lg-center': '0 0 50px 10px rgba(139, 92, 246, 0.3)',
				'dark-center': '0 0 20px 5px #00000010',
			},
		},
	},
	plugins: [],
}
export default config
