/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Keeps dark mode class-based
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: [
    //   "light", // Default to the light theme
    //   "dark",  // Add dark mode as an option
    // ],
  },
};
