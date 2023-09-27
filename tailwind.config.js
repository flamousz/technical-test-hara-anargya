/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {},
      colors: {
        'sidebar-color': '#152544',
        'sidebar-hover': '#E3F2FD',
        'content-bg': '#f7f8fa',
        'downside-bg-card': '#F9FAFC',
        'p-card-color': '#727272',
        'p-card-green': '#4CBF93'
      },
    },
  },
  plugins: [],
};
