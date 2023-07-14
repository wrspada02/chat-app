/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
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
        },
        opacity_to_right_increasing: {
          '0%': { translate: '-400px', opacity: 0 },
          '100%': { translate: '0', opacity: 1 },
        },
        opacity_to_bottom_increasing: {
          '0%': { transform: 'translateY(-400px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
          },
        },
      },
      animation: {
        'group-members': 'group_members_initialize 1s ease-in-out normal',
        'screen-to-right': 'opacity_to_right_increasing 0.8s ease-in-out normal',
        'opacity': 'opacity 1s ease-in-out normal',
        'pulse': 'pulse 1.5s ease-in-out normal',
        'open_to_bottom': 'opacity_to_bottom_increasing 0.5s ease-in-out normal',
      },
    },
    plugins: [],
  };