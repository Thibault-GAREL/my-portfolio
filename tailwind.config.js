/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        streamlit: {
          bg: '#FFFFFF',
          secondary: '#F0F2F6',
          text: '#262730',
          accent: '#FF4B4B',
          border: '#E6E9EF',
        },
      },
    },
  },
  plugins: [],
}
