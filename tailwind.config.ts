import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFFFFF',
        primary: {
          DEFAULT: '#C8D94C',
          1000: '#49510D',
          900: '#687318',
          800: '#889526',
          700: '#A8B738',
          600: '#C8D94C',
          500: '#E9FB64',
          400: '#F0FF88',
          300: '#F5FFAA',
          200: '#F9FFCD',
          100: '#FDFFEF',
        },
        secondary: {
          DEFAULT: '#27291E',
          1000: '#404332',
          900: '#585C48',
          800: '#585C48',
          700: '#8A8F76',
          600: '#A4A88F',
          500: '#BDC2A9',
          400: '#D7DBC4',
          300: '#F1F5E1',
          200: '#F5F7EC',
          100: '#F9F9F7',
        },
      },
    },
  },
  plugins: [],
}
export default config
