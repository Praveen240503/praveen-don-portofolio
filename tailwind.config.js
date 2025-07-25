// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-background': '#282C33', // Add your custom color here
        // You can also add shades if needed, e.g.,
        // 'my-custom-blue': {
        //   100: '#E0F2F7',
        //   500: '#007BFF',
        //   900: '#003366',
        // },
      },
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace'], // Add Fira Code here
        // You can also extend 'sans' or 'mono' if you want to override defaults
        // sans:,
        // mono:,
      },
    },
  },
  plugins: [],
}