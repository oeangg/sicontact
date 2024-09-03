/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "0rem",
        lg: "0rem",
        xl: "0rem",
        "2xl": "0rem",
      },
    },
    extend: {
      fontFamily: {
        Pacifico: ["var(--font-pacifico)"],
        Poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
