/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/*.{js,jsx,ts,tsx}`,
    `./src/components/*.{js,jsx,ts,tsx}`,
    `./src/design-system/*.{js,jsx,ts,tsx}`,
    `./src/features/**/*.{js,jsx,ts,tsx}`,
    `./src/views/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: `class`,
  theme: {
    extend: {
      screens: {
        tn: `400px`,
      },
      colors: {
        lblue: '#1792D2',
      },
      fontFamily: {
        body: ['Ubuntu', 'serif'],
      },
    },
  },
  plugins: [],
};
