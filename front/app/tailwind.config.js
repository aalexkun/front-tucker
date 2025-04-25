/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Scan all HTML and TypeScript files within the src directory
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',  // Small devices (landscape phones)
      'md': '768px',  // Medium devices (tablets)
      'lg': '1024px', // Large devices (laptops/desktops)
      'xl': '1280px', // Extra large devices (large desktops)
      '2xl': '1536px',// 2x Extra large devices (larger desktops)
    },
  },
  plugins: [],
}
