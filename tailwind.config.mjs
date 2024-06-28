/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                poimandres: {
                    yellow: '#FFFAC2',
                    teal1: '#5DE4C7',
                    teal2: '#5FB3A1',
                    teal3: '#42675A',
                    blue1: '#89DDFF',
                    blue2: '#ADD7FF',
                    blue3: '#91B4D5',
                    blue4: '#7390AA',
                    pink1: '#FAE4FC',
                    pink2: '#FCC5E9',
                    pink3: '#D0679D',
                    blueGray1: '#A6ACCD',
                    blueGray2: '#767C9D',
                    blueGray3: '#506477',
                    background1: '#303340',
                    background2: '#1B1E28',
                    background3: '#171922',
                    text: '#E4F0FB',
                    white: '#FFFFFF',
                },
            }
        },
	},
	plugins: [],
}
