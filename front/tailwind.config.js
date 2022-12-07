/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			poppins: 'Poppins',
		},
		colors: {
			'double-light-blue': '#dbdee8',
			'light-blue': '#37397c',
			'dark-blue': '#06084c',
			'more-blue': '#070945',
			'card-blue': '#20234b',
			'light-gray': '#e9e9ed',
			'more-gray': '#b0afc0',
			white: '#fff',
			'background-color': '#f8f8f8',
			'light-purple': '#50578b',
			blue: '#4a5286',
		},

		extend: {},
	},
	plugins: [],
};
