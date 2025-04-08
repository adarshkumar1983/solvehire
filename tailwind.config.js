/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}" // If using Next.js App Router
    ],
    theme: {
      extend: {
        colors: {
          customPurple: {
            DEFAULT: "rgb(37, 0, 91)", // Base color
            500: "rgb(37, 0, 91)",    // Optional: define shades
          },
        },
        
      },
    },
    plugins: [],
  };