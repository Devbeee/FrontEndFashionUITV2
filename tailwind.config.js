/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-cyan': '#00354b',
        'yellow': '#ffc107',
        'primary': '#007bff',
        'white-0.3': 'rgba(255,255,255,0.3)'
      },
      width: {
        '1200': '1200px'
      },
      maxWidth: {
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
        },
        shine: {
          '100%': {
            left: '125%'
          }
        }
      },
      animation: {
        pulsate: 'pulsate 1s ease-out infinite',
        aniName: 'aniName 3s infinite',
        shine: 'shine 1.1s'
      },
      backgroundImage: {
        'fire': "url('@/assets/images/fire.png')",
        'big-banner-sale': "url('@/assets/images/bg_banner_big.webp')"
      }
    }
  },
  plugins: []
}
