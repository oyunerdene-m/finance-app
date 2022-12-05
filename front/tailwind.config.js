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
			'light-blue': '#37397c',
			'dark-blue': '#06084c',
			'more-blue': '#070945',
			'card-blue': '#20234b',
			'light-gray': '#e9e9ed',
			'more-gray': '#b0afc0',
			white: '#fff',
			'background-color': '#f8f8f8',
		},

		screens: {
			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1280px',
			// => @media (min-width: 1280px) { ... }
		},
		extend: {},
	},
	plugins: [],
};
