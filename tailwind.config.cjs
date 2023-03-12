/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '0px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      keyframes: {
        group_members_initialize: {
          '0%': { translate: '-2rem', opacity: 0 },
          '100%': { translate: '0', opacity: 1},
        }
      },
      animation: {
        'group-members': 'group_members_initialize 0.5s ease-in-out normal'
      }
    },
  },
  plugins: [],
}