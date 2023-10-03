import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
  
      colors: {
        white: '#FFFFFF',
        primary: {
          DEFAULT: '#E9FB64',
          1000: '#1A1E00',
          900: '#2E3400',
          850: '#383F00',
          800: '#434B00',
          750: '#4E5700',
          700: '#5A6400',
          600: '#717E00',
          500: '#8A9900',
          400: '#A4B420',
          300: '#BFD03D',
          200: '#DBED58',
          100: '#E9FB64',
          50: '#F8FFB9'
        },
        secondary: {
          DEFAULT: '#1A1D07',
          1000: '#1A1D07',
          900: '#2F321A',
          850: '#3A3D24',
          800: '#46492F',
          750: '#525539',
          700: '#5E6144',
          600: '#77795C',
          500: '#909374',
          400: '#ABAE8D',
          300: '#C7C9A7',
          200: '#E3E5C1',
          100: '#F1F3CF',
          50: '#FAFCD7'
        },
        neutral: {
          DEFAULT: '#FCF9F1',
          1000: '#1C1C17',
          900: '#31312B',
          850: '#3C3C36',
          800: '#474741',
          750: '#53534C',
          700: '#5F5F58',
          600: '#787770',
          500: '#929189',
          400: '#ADABA4',
          300: '#C9C6BE',
          200: '#E5E2DA',
          100: '#F3F1E8',
          50: '#FCF9F1'
        },
        neutralVariant: {
          DEFAULT: '#FBFAE8',
          1000: '#1B1C12',
          900: '#303126',
          850: '#3B3C30',
          800: '#474741',
          750: '#535346',
          700: '#5F5F52',
          600: '#78786A',
          500: '#929283',
          400: '#ACAC9C',
          300: '#C8C7B7',
          200: '#E4E3D2',
          100: '#F3F2E0',
          50: '#FBFAE8'
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/computer-bg.jpeg')",
      }
    },
  },
  plugins: [],
}
export default config
