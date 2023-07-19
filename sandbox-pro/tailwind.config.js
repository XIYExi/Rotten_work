module.exports = {
  purge: ["./src/**/*.{ts,tsx,js,jsx}"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'alert-purple': '#747ED1'
      }
    },
  },
  variants: {},
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
