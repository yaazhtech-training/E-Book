/** @type {import('tailwindcss').Config} */
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

