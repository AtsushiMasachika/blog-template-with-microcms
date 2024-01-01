/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
theme: {
	extend: {
	container: {
		center: true,
	},
	
	height: {
		'screen': ['100vh', '100dvh'],
	},
	minHeight: {
		'screen': ['100vh', '100dvh'],
	},
	maxHeight: {
		'screen': ['100vh', '100dvh'],
	},
	colors: {
		dominant: '#63A6DB',
		complement: '#6D9EFE',
		accent: '#E281AF',
		backgrounddark: '#9EADBD',
		accentdark: '#995092',
		shadow: '#000000',
		heartgradient: 'linear-gradient(45deg, #9EADBD, #63A6DB)',
	},
	textShadow: {
		sm: '0 1px 2px var(shadow)',
		DEFAULT: '0 2px 4px var(shadow)',
		lg: '0 8px 16px var(shadow)',
	},
	animation: {
		"slide-in": "slide-in 0.5s ease-in-out",
	},
	keyframes: {
		"slide-in": {
		"0%": { transform: 'translateY(-100%)' },
		to: { transform: 'translateY(0)' },
		},
	},
	variants: {
		fill: ['hover', 'active'],
	},
	},
},
plugins: [
	plugin(function ({ matchUtilities, theme }) {
		matchUtilities(
			{
			'text-shadow': (value) => ({
				textShadow: value,
			}),
			},
			{ values: theme('textShadow') }
		)
		}),
	function ({ addUtilities }) {
		const newUtilities = {
			".hide-scrollbar::-webkit-scrollbar": {
			  display: "none",
			},
			".hide-scrollbar": {
			  scrollbarWidth: "none",
			  "-ms-overflow-style": "none"
			},
		};
			addUtilities(newUtilities);
		},
	plugin(function({ addVariant }) {
	addVariant('current', '&.active');
	})

],
};
