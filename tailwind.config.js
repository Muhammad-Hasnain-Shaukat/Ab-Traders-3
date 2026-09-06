/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pistachio: {
          DEFAULT: '#5C8358',
          50: '#F4F7F2',
          100: '#EAF1E8',
          200: '#D7E5D4',
          300: '#BDD4B9',
          400: '#8FB888',
          500: '#5C8358',
          600: '#4F724B',
          700: '#385934',
          800: '#2E442B',
          900: '#1E2D1D',
          950: '#121C11',
        },
        ivory: {
          DEFAULT: '#F4F7F2',
          50: '#FFFFFF',
          100: '#F4F7F2',
          200: '#EAF1E8',
          300: '#D7E3D4',
        },
        beige: {
          DEFAULT: '#EAF1E8',
          light: '#F4F7F2',
          dark: '#D7E3D4',
        },
        taupe: {
          DEFAULT: '#586956',
          light: '#7A8C78',
          dark: '#385934',
        },
        gold: {
          DEFAULT: '#5C8358',
          light: '#8FB888',
          dark: '#385934',
          muted: '#BDD4B9',
        },
        charcoal: {
          DEFAULT: '#1E2B1D',
          50: '#F9FAF8',
          100: '#F4F7F2',
          200: '#EAF1E8',
          300: '#D7E3D4',
          400: '#7A8C78',
          500: '#586956',
          600: '#3D4D3B',
          700: '#2E3E2C',
          800: '#1E2B1D',
          900: '#141E13',
          950: '#0C120B',
        },
        deepbrown: '#182317',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(46, 68, 43, 0.06), 0 2px 6px -1px rgba(46, 68, 43, 0.03)',
        'soft-hover': '0 12px 32px -4px rgba(46, 68, 43, 0.12), 0 4px 12px -2px rgba(46, 68, 43, 0.05)',
        'pistachio': '0 8px 30px rgba(92, 131, 88, 0.15)',
      },
    },
  },
  plugins: [],
}
