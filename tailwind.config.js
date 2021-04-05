module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    placeholderColor:{
      'dark-1':'hsl(207, 26%, 17%)',
      'dark-2':'hsl(209, 23%, 22%)',
      'light':'hsl(0, 0%, 98%)',
      'white':'hsl(0, 0%, 100%)'
    },
    fontFamily:{
      'app': ['Nunito Sans', 'sans-serif']
    },
    backgroundColor: theme =>({
      'dark-1':'hsl(207, 26%, 17%)',
      'dark-2':'hsl(209, 23%, 22%)',
      'light':'hsl(0, 0%, 98%)',
      'white':'hsl(0, 0%, 100%)'
    }),
    colors:{
      'dark-1':'hsl(207, 26%, 17%)',
      'dark-2':'hsl(209, 23%, 22%)',
      'light':'hsl(0, 0%, 98%)',
      'white':'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      scale: ['responsive', 'hover', 'focus','group-hover'],
    },
  },
  plugins: [],
}
