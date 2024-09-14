/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {


        primary: "#3a0ca3",
        primary2: "#7209b7",
        secondary: "#d61e92",
        accent: "#E6E6E6",



        // primary: "#2A368B",
        // primary2: "#13442F",
        // secondary: "#CB2A8A",
        // accent: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
