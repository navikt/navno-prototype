module.exports = {
  content: [
    './src/**/*.njk',
    './src/**/*.json',
    './src/**/*.js'
  ],
  theme: {
    screens: {
      xs: '640px',
      sm: '720px',
      md: '1000px',
      lg: '1280px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['"Source Sans 3"', 'Arial', 'sans-serif']
    },
    colors: {
      red: {
        DEFAULT: '#C30000',
        light: '#D2654C'
      },
      blue: {
        light: '#66CBEC',
        DEFAULT: '#0067C5',
        dark: '#19548A'
      },
      gray: {
        '100': '#F1F1F1',
        '200': '#E7E5E2',
        '300': '#C6C2BF',
        '400': '#59514B',
        '500': '#3E3832',
        '600': '#262626',
      },
      purple: '#5C4378',
      white: '#fff',
      black: '#000'
    },
    extend: {
      borderWidth: {
        '3': '3px'
      },
      keyframes: {
        'dropdown': {
          '0%': {
            transform: 'translateY(-1rem)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        'dropdown': 'dropdown 50ms ease-out forwards'
      }
    },
  },
  plugins: [],
}
