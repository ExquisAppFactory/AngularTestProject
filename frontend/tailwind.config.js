const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,ts}',
	],
	theme: {
		extend: {
			screens: {
				xs: { max: '639px' },
				...defaultTheme.screens
			},
			fontSize: {
				xxs: ['0.65rem'],
				...defaultTheme.fontSize
			},
      skew: {
        '15': '15deg',  // Custom skew value
        '-15': '-15deg',
      },
		},
	},
	plugins: [],
}

