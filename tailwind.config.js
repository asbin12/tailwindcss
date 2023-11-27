/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Manrope"],
      },
      backgroundImage: {
        "section-4": "url('assets/image/section-4-bg.png')",
      },
      fontSize: {
        "4.5xl": ["44px", "52px"],
        "3.5xl": ["32px", "40px"],
      },
    },
  },
  plugins: [],
};
