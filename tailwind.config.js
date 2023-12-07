/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        sm: "640px",

        md: "768px",
        mds:"913px",
        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
      fontFamily: {
        primary: ["Manrope"],
        outfit: ["Outfit"],
      },
      backgroundImage: {
        "section-4": "url('assets/image/section-4-bg.png')",
      },
      fontSize: {
        "4.5xl": ["44px", "52px"],
        "3.5xl": ["32px", "40px"],
        "1.5xl": ["22px", "28px"],
        "2.5xl": ["26px", "28px"],
        sml: ["16px", "24px"],
      },
    },
  },
  plugins: [],
};
