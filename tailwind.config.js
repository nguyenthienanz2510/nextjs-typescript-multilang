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
        'color-primary': '#6467F2',
        'color-secondary': '#BF83FC',
        'color-third': '#ff5874',
        'color-text-dark': '#1F2937',
        'color-text-dark-opa': '#1F2937CC',
        'color-text-light': '#E1E7EF',
        'color-text-light-opa': '#E1E7EFCC',
        'color-text-light-primary': '#F3F4F6',
        'color-success': '#03a66d',
        'color-info': '#17a2b8',
        'color-warning': '#ffc107',
        'color-danger': '#cf304a',
        'color-bg-dark-primary': '#121827',
        'color-bg-dark-secondary': '#2A303C',
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
