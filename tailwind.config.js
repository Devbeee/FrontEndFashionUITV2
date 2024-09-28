/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{

        'blue-cyan': '#00354b',
        'yellow':'#ffc107',
        'primary': '#007bff'
      },
      width: {
        '1200': '1200px'
      }
    }
  },
  plugins: []
}
