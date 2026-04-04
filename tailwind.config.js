/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary: rgba(16, 25, 161) — deep blue
        brand: {
          50:  '#eef0ff',
          100: '#dde1fd',
          200: '#bbc3fb',
          300: '#99a5f9',
          400: '#7787f7',
          500: '#5569f5',
          600: '#334bf3',
          700: '#1019A1',
          800: '#0e1580',
          900: '#0b1060',
          950: '#070940',
        },
        // Secondary: rgba(199, 53, 72) — red (CTAs and highlights only)
        accent: {
          50:  '#fff0f2',
          100: '#ffe1e5',
          200: '#ffc3cb',
          300: '#ffa5b1',
          400: '#f97988',
          500: '#e94d5e',
          600: '#C73548',
          700: '#a22a3b',
          800: '#7e212e',
          900: '#5a1820',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 0.65s ease-out forwards',
        'fade-in':  'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'float':    'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'soft':   '0 4px 24px -4px rgba(0,0,0,0.08)',
        'card':   '0 2px 16px -2px rgba(0,0,0,0.06), 0 8px 32px -8px rgba(0,0,0,0.08)',
        'brand':  '0 8px 32px -8px rgba(16,25,161,0.40)',
        'accent': '0 8px 32px -8px rgba(199,53,72,0.40)',
      },
    },
  },
  plugins: [],
}
