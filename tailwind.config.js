/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        header: ['Fugaz One', 'cursive'],
        main: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mydark: {
          primary: '#FFFDD0',
          'primary-content': '#000000',
          secondary: '#6A4E42',
          'secondary-content': '#FFFFFF',
          accent: '#F5F5B5',
          'accent-content': '#FFFFFF',
          neutral: '#2C2C2C',
          'neutral-content': '#F8F8FF',
          'base-100': '#000300',
          'base-200': '#000000',
          'base-300': '#000000',
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
          accent: '#111827',
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
    ],
  },
};
