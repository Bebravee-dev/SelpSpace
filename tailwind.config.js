/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        "355px": "340px",
      },
      width: {
        "1600px": "1600px",
      },
      lineHeight: {
        20: "350px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #d5147e, #ff8c29)",
      },

      maxWidth: {
        "580px": "580px",
        "602px": "602px",
        "674px": "674px",
        "730px": "730px",
        "1088px": "1088px",
      },
      fontFamily: {
        Unbounded: ["Unbounded", "system-ui"],
        Involve: ["Involve", "sans-serif"],
      },
      fontWeight: {
        700: "700",
      },
      fontSize: {
        "16px": "clamp(4px, 4vw, 16px);",
        "24px": "24px",
        "40px": "clamp(10px, 4vw, 40px);",
        "48px": "clamp(12px, 8vw, 48px);",
        "500px": "400px",
      },
      height: {
        "320px": "320px",
        "450px": "450px",
        "950px": "950px",
      },
      backgroundColor: {
        "bg-color1": "#121212",
        "bg-color3": "#202020",
      },
      colors: {
        primary: "#fff",
        secondary: "#bfbfbf",
      },
      gap: {
        "section-gap": "150px",
        "10px": "10px",
        "20px": "20px",
        "50px": "50px",
        "60px": "60px",
        "90px": "90px",
        "120px": "120px",
        "150px": "150px",
        "170px": "170px",
        "300px": "300px",
      },
      padding: {
        "5px": "5px",
        "52px": "52px",
        "60px": "60px",
        "74px": "74px",
        "100px": "100px",
        "200px": "200px",
      },
      margin: {
        "100px": "100px",
        "200px": "200px",
      },
    },
  },
  plugins: [],
};
