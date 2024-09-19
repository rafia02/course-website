/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        primaryGradiant: "linear-gradient(90deg, #2B388F 0%, #304996 100%)",
        secondaryGradiant: "linear-gradient(90deg, #C62F8F 0%, #CE2786 100%)",
        loginButton:
          "linear-gradient(95deg, #EB31A2 -46.2%, #2B388F 39.88%, #2B388F 72.9%, rgba(224, 56, 158, 0.80) 143.06%)",
        linearGradiant:
          "linear-gradient(95deg, #EB31A2 -1.37%, #2B388F 39.88%, #2B388F 52.27%, rgba(224, 56, 158, 0.80) 103.75%)",
      },


      
      colors: {


        primary: "#2B388F",
        primary2: "#7209b7",
        secondary: "#C82E8E",
        accent: "#22D3EE",
        light: "#F3F4F6"



        // primary: "#2A368B",
        // primary2: "#13442F",
        // secondary: "#CB2A8A",
        // accent: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
