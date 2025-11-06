/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFF7F0',
          50: '#FFFBF7',
          100: '#FFF7F0',
          200: '#FEEDE0',
          300: '#FCE3D1',
        },
        orange: {
          DEFAULT: '#D7552A',
          50: '#FDF2ED',
          100: '#FCE5DD',
          200: '#F9CBCB',
          300: '#F6B1B1',
          400: '#F39797',
          500: '#D7552A',
          600: '#C44A24',
          700: '#A33D1D',
          800: '#823116',
          900: '#61250F',
        },
        gray: {
          DEFAULT: '#6B6B6B',
          50: '#F9F9F9',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#D1D1D1',
          400: '#C2C2C2',
          500: '#A3A3A3',
          600: '#8A8A8A',
          700: '#6B6B6B',
          800: '#5A5A5A',
          900: '#494949',
        }
      },
      fontFamily: {
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '14': '14px',
        '18': '18px',
      },
      boxShadow: {
        'custom': '0 6px 18px rgba(15,15,15,0.06)',
        'focus': '0 0 0 4px rgba(215,85,42,0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 1s ease-in-out 1',
      }
    },
  },
  plugins: [],
}