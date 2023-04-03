/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#141414",
        'secondary': "#1D1D21",
        'tertiary': "#27292e",
        'primaryAccent': "#2F3036",
        'secondaryAccent': "#B1B5CC",
      },
    },
  },
  plugins: [],
}

