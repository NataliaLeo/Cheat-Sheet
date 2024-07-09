/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: [
		"./src/*.tsx",
		"./src/**/*.tsx",
		"./src/**/**/*.tsx",
		"./src/**/**/**/*.tsx",
		"./public/*.html",
	],
	theme: {
		extend: {},
		fontFamily: {
			font: "Helvetica, sans-serif",
		},
		colors: {
			white: "white",
			gray: "#cbcbcb",
			peach: "#f6b893",
			darkPeach: "#a47457",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
