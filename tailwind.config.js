/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: 0
      },
    },
    extend: {
      colors: {
        'color-primary': '#38BDF8',
        'color-secondary': '#EC4899',
        'color-third': '#6366f1',
        'color-text-dark': '#1F2937',
        'color-text-dark-opa': '#1F2937CC',
        'color-text-light': '#E1E7EF',
        'color-text-light-opa': '#E1E7EFCC',
        'color-text-light-primary': '#F3F4F6',
        'color-success': '#03a66d',
        'color-info': '#17a2b8',
        'color-warning': '#ffc107',
        'color-danger': '#cf304a',
        'color-bg-dark-primary': '#000000',
        'color-bg-dark-secondary': '#0f172a',
        'color-bg-dark-third': '#1F2937',
        'color-bg-dark-hover': '#F3F4F61A',
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
