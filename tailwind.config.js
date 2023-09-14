/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				robotoSerif: ['Roboto Serif', 'serif'],
				robotoFlex: ['Roboto Flex', 'sans-serif'],
			},
			colors: {
				pink: '#E56584',
			},
		},
	},
	plugins: [],
};
