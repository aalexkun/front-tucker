/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Scan all HTML and TypeScript files within the src directory
  ],
  theme: {
    extend: {
      // You can extend the default theme here
      // For example, add custom colors, fonts, etc.
      colors: {
        primary: {
          50: '#e6edf3',
          100: '#ccdbe7',
          200: '#99b7cf',
          300: '#6693b7',
          400: '#336f9f',
          500: '#004b87',
          600: '#003c6c',
          700: '#002e51',
          800: '#001f36',
          900: '#114577',
        },
        secondary: {
          50: '#e6f5ec',
          100: '#ccead9',
          200: '#99d5b3',
          300: '#66c18d',
          400: '#33ac67',
          500: '#009741',
          600: '#007934',
          700: '#005c28',
          800: '#003e1b',
          900: '#00732b',
        },
      },
    },
    screens: {
      'sm': '640px',  // Small devices (landscape phones)
      'md': '768px',  // Medium devices (tablets)
      'lg': '1024px', // Large devices (laptops/desktops)
      'xl': '1280px', // Extra large devices (large desktops)
      '2xl': '1536px',// 2x Extra large devices (larger desktops)
    },
  },
  plugins: [
    // Add any Tailwind plugins here, e.g., require('@tailwindcss/forms')
    function({ addBase }) {
      addBase({
        'button': { cursor: 'pointer' },
      });
    },
  ],
}
