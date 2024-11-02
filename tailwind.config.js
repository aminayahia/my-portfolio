/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      '8xl': ['69px', {
        lineHeight: '5rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '7xl': ['55px', {
        lineHeight: '3rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '6xl': ['44px', {
        lineHeight: '5rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '5xl': ['35px', {
        lineHeight: '5rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '4xl': ['28px', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '3xl': ['23px', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      
      
    },
     colors: {
      orange: {
        50: '#FFF1E6',
        100: '#FFE9D9',
        200: '#FED2B0',
        300: '#FD6F00',
        400: '#E46400',
        500: '#CA5900',
        600: '#BE5300',
        700: '#984300',
        800: '#723200',
        900: '#592700',
      },
      white: {
        50: '#FFFFFF',
        100: '#FEFEFE',
        200: '#FDFDFD',
        300: '#F8F8F8',
        400: '#DFDFDF',
        500: '#BABABA',
        600: '#959595',
        700: '#707070',
        800: '#575757',
      },
      
      'black': '#000000',
    },
    borderRadius: {
      DEFAULT: '8px',
      full:"9999px"
    
    }
  },
  plugins: [],
}

