/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        vector: "url('/Vector.png')",
        soup: "url('/soup.png')",
        green: "url('/green.png')",
      },
      screens: {
        xs: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      // borderColor: theme => ({
      //   DEFAULT:
      // })
    },
  },
  variants: {
    backgroundImage: ["responsive"],
  },
  plugins: [],
};
