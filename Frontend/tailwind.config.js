/** @type {import('tailwindcss').Config} */
// import withMT from "@material-tailwind/react/utils/withMT";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        vector: "url('/Vector.png')",
        soup: "url('/soup.png')",
        green: "url('/green.png')",
        fullpageBg: "url('/fullpage-bg.jpg')",
        cameraBg: "url('/card2.jpg')",
        burgerBg: "url('/2.jpg')",
        momos: "url('/momos.png')",
        card1: "url('/card1.jpg')",
        card2: "url('/card2.jpg')",
        card3: "url('/card3.jpg')",
        group2: "url('/group2.png')",
        sekuwa: "url('/sekuwa.mp4')",
      },
      backgroundColor: {
        primary: "#FFF3DD",
        secondary: "#E3E6EA",
        success: "#DBF7E0",
        danger: "#FFE6E2",
        warning: "#FFF5CC",
        info: "#DEF4FE",
        light: "#FEFEFF",
        dark: "#CED1D4",
        darkprimary: "#FFC554",
        darksecondary: "#748194",
        darksuccess: "#4CD964",
        darkinfo: "#5AC8FA",
        darkwarning: "#FFCC00",
        darkdanger: "#FF806E",
        darklight: "#fff",
        darkdark: "#0B1727",
        bgDarkYellow: "#FFB82E",
        bgLightYellow: "#FFC554",
      },
      colors: {
        primary: "#4D5969",
        secondary: "#FFF",
        success: "#FFF",
        danger: "#FFF",
        warning: "#4D5969",
        info: "#FFF",
        light: "#4D5969",
        dark: "#FFF",
        darkprimary: "#FFC554",
        darksecondary: "#748194",
        darksuccess: "#4CD964",
        darkinfo: "#5AC8FA",
        darkwarning: "#FFCC00",
        darkdanger: "#FF806E",
        darklight: "#4D5969",
        darkdark: "#0B1727",
        bgDarkYellow: "#FFB82E",
        bgLightYellow: "#FFC554",
        text: "#FFAB08",
      },
      borderColor: {
        darkprimary: "#FFC554",
        darksecondary: "#748194",
        darksuccess: "#4CD964",
        darkinfo: "#5AC8FA",
        darkwarning: "#FFCC00",
        darkdanger: "#FF806E",
        darklight: "#fff",
        darkdark: "#0B1727",
        bgDarkYellow: "#FFB82E",
        bgLightYellow: "#FFC554",
        default: " #DEE2E6",
        cake: "#F8BBD0",
        stunning: "#FF4081",
        facebook: "#1877F2",
        twitter: "#1DA1F2",
        github: "#181717",
        googelPlus: "#DB4437",
      },
      fontSize: {
        lead: "1.25rem", // Custom size for lead
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".dropcap": {
            float: "left",
            top: "0",
            "font-size": "3rem",
            "line-height": "1",
            "margin-right": "0.25rem",
            "margin-bottom": "-0.25rem",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
