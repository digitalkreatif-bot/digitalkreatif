/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neomorphism: '7px 7px 14px #c5c5c5, -7px -7px 14px #cbd2e0',
      },
      backgroundColor: {
        'active': '#e2e8f0', // Custom background color for active state
      },
      textShadow: {
        'inset': '1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.8)', // Shadow inset effect
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-inset': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.8)',
        },
      })
    }
  ],
}