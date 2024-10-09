/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-cyan': '#00354b',
        yellow: '#ffc107',
        primary: '#007bff',
        'off-white': '#f7f8f9',
        'text-dark-blue': '#01567f'
      },
      width: {
        1200: '1280px'
      },
      screens: {
        xs: '480px'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-thin': {
          '::-webkit-scrollbar': {
            width: '4px',
            height: '4px'
          }
        },
        '.scrollbar-thumb': {
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#01567f',
            borderRadius: '10px'
          }
        },
        '.scrollbar-track': {
          '::-webkit-scrollbar-track': {
            backgroundColor: '#ccc',
            borderRadius: '10px'
          }
        },
        '.scrollbar-thumb:hover': {
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00354b'
          }
        }
      })
    }
  ]
}
