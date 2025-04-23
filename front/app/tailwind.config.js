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
        primary: '#your-primary-color', // Example custom color
        secondary: '#your-secondary-color', // Example custom color
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
  ],
}