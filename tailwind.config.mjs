/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
      },
      fontFamily: {
        Outfit: ["Outfit", "sanserif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black': "4px 4px 0 #000"
      }
    },
  },
  plugins: [],
};
