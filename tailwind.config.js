/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#eefaff',
          '100': '#dcf5ff',
          '200': '#b2edff',
          '300': '#6de1ff',
          '400': '#20d3ff',
          '500': '#00beff',
          '600': '#0099df',
          '700': '#0079b4',
          '800': '#006795',
          '900': '#00547a',
          'DEFAULT': '#003049',
        },
        'secondary': {
          '50': '#f4f7fb',
          '100': '#e9eff5',
          '200': '#cddeea',
          '300': '#a2c2d7',
          'DEFAULT': '#669bbc',
          '500': '#4e86a9',
          '600': '#3b6c8e',
          '700': '#315773',
          '800': '#2c4a60',
          '900': '#283f52',
          '950': '#1b2936',
        },
        'accent': {
          '50': '#fff1f2',
          '100': '#ffe0e2',
          '200': '#ffc7cb',
          '300': '#ffa0a7',
          '400': '#ff6974',
          '500': '#fa3947',
          '600': '#e71b2a',
          'DEFAULT': '#c1121f',
          '800': '#a1131e',
          '900': '#85171f',
          '950': '#49060b',
        },
    
      
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
};
