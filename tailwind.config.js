/** @type {import('tailwindcss').Config} */
// eslint-disablt-next line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // overwrite default setting
  theme: {
    fontFamily: {
     sans: 'Roboto Mono, monospace',
    },
    // extend - add options
    extend: {
      colors: {
        pizza: '#123456',
      },
      height: {
        screen: '100dvh'
      }
    },
  },
  plugins: [],
};


