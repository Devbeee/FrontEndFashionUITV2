/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-cyan': '#00354b',
        'yellow': '#ffc107',
        'primary': '#007bff'
      },
      width: {
        '1200': '1200px'
      },
      willChange: {
        'opacity': 'opacity'
      },
      keyframes: {
        pulsate: {
          '0%': {
            transform: 'scale(0.1)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1.2)',
          },
        },
        aniName: {
          '0%': {
            left: '0px'
          },

          '50%': {
            left: '3%',
          },

          '100%': {
            left: '0px'
          }
        }
      },
      animation: {
        pulsate: 'pulsate 1s ease-out infinite',
        aniName: 'aniName 3s infinite'
      },
      backgroundImage: {
        'fire': "url('@/assets/images/fire.png')",
        'big-banner-sale': "url('@/assets/images/bg_banner_big.webp')"
      }
    }
  },
  plugins: []
}
