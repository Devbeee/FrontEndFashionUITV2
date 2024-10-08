/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{

        'blue-cyan': '#00354b',
        'yellow':'#ffc107',
        'primary': '#007bff',
        'gray100': '#f3f4f6' ,
        'gray200':'#e5e7eb ',
        'gray400':'#9ca3af  ',
        'gray600': '#4b5563 ',
        'white-primary': '#ffffff'
      },
      width: {
        '1200': '1200px'
      },
      maxWidth: {
        '1200': '1200px'
      }
    }
  },
  plugins: []
}
