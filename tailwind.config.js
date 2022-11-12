/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctorThem: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#191D24",
          "base-100": "#D4D9E3",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "chair-img": "url('/src/assets/images/chair.png')",
      }),
    },
  },
  plugins: [require("daisyui")],
};
