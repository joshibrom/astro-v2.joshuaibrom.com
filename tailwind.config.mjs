import defaultTheme from 'tailwindcss/defaultTheme';
import { poimandres, poimandresStorm } from "./colorscheme.config.mjs";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                poimandres,
                poimandresStorm
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            },
            typography: ({theme}) => ({
                poimandres: {
                    css: {
                        '--tw-prose-body': theme('colors.poimandres.white'),
                        '--tw-prose-headings': theme('colors.poimandres.offWhite'),
                        '--tw-prose-lead': theme('colors.poimandres.white'),
                        '--tw-prose-links': theme('colors.poimandres.brightMint'),
                        '--tw-prose-bold': theme('colors.poimandres.white'),
                        '--tw-prose-counters': theme('colors.poimandres.white'),
                        '--tw-prose-bullets': theme('colors.poimandres.white'),
                        '--tw-prose-hr': theme('colors.poimandres.white'),
                        '--tw-prose-quotes': theme('colors.poimandres.white'),
                        '--tw-prose-quote-borders': theme('colors.poimandres.pink'),
                        '--tw-prose-captions': theme('colors.poimandres.white'),
                        '--tw-prose-code': theme('colors.poimandres.white'),
                        '--tw-prose-pre-code': theme('colors.poimandres.white'),
                        '--tw-prose-pre-bg': theme('colors.poimandresStorm.bg'),
                        '--tw-prose-th-borders': theme('colors.poimandres.white'),
                        '--tw-prose-td-borders': theme('colors.poimandres.white'),
                        '--tw-prose-invert-body': theme('colors.poimandres.white'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.poimandres.white'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.poimandres.white'),
                        '--tw-prose-invert-bullets': theme('colors.poimandres.white'),
                        '--tw-prose-invert-hr': theme('colors.poimandres.white'),
                        '--tw-prose-invert-quotes': theme('colors.poimandres.white'),
                        '--tw-prose-invert-quote-borders': theme('colors.poimandres.white'),
                        '--tw-prose-invert-captions': theme('colors.poimandres.white'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.poimandres.white'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.poimandres.white'),
                        '--tw-prose-invert-td-borders': theme('colors.poimandres.white'),
                    }
                }
            }),
        },
	},
	plugins: [ require('@tailwindcss/typography') ],
}
