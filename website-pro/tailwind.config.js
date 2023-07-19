module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: false,
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px'
    },
    container: {
      padding: '15px'
    },
    extend: {
      colors: {
        'alert-purple': '#747ED1',
        'primary': 'rgb(1 100 80)',
        'secondary': 'rgb(255 101 0)',
      },
      text: {
        'primary': 'rgb(1 100 80)',
        'secondary': 'rgb(255 101 0)',
      },
      backgroundColor: {
        'primary': 'rgb(1 100 80)',
        'secondary': 'rgb(255 101 0)'
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20'
      }
    },
  },
  variants: {},
  plugins: [],
};
