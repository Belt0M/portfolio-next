import type { Config } from 'tailwindcss'

const config: Config = {
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
				'light-gray': '#c1c1c1',
				'stack-1': '#944CF6',
				'stack-2': '#A742D4',
				'stack-3': '#E554EB',
				'stack-4': '#D44294',
			},
			boxShadow: {
				'lg-center': '0 0 50px 10px rgba(139, 92, 246, 0.3)',
			},
		},
	},
	plugins: [],
}
export default config
