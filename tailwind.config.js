/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mydark: {
          primary: '#FFFDD0', // Dark version of light primary
          'primary-content': '#000000', // White
          secondary: '#6A4E42', // Dark version of light secondary
          'secondary-content': '#FFFFFF', // White
          accent: '#F5F5B5', // Darker version of primary color for hover effect
          'accent-content': '#FFFFFF',
          neutral: '#2C2C2C', // Dark version of light neutral
          'neutral-content': '#F8F8FF',
          'base-100': '#000300', // Extremely dark grey
          'base-200': '#000150', // Even darker grey
          'base-300': '#000000', // Pure black
          'base-content': '#F8F8FF',
          info: '#00a4e6',
          'info-content': '#FFFFFF',
          success: '#008a4b',
          'success-content': '#FFFFFF',
          warning: '#f97316',
          'warning-content': '#FFFFFF',
          error: '#ff4d4d',
          'error-content': '#FFFFFF',
        },
      },
      {
        mylight: {
          primary: '#6A4E42',
          'primary-content': '#FFFFFF',
          secondary: '#FFFDD0',
          'secondary-content': '#111827',
          accent: '#5A3E32',
          'accent-content': '#FFFFFF',
          neutral: '#D3D3D3',
          'neutral-content': '#111827',
          'base-100': '#FFFDD0',
          'base-200': '#EFE8B0',
          'base-300': '#DFD292',
          'base-content': '#111827',
          info: '#00a4e6',
          'info-content': '#FFFFFF',
          success: '#008a4b',
          'success-content': '#FFFFFF',
          warning: '#f97316',
          'warning-content': '#FFFFFF',
          error: '#ff4d4d',
          'error-content': '#FFFFFF',
        },
      },
      'retro',
      'cyberpunk',
      'coffee',
      'aqua',
      'synthwave',
    ],
  },
};
