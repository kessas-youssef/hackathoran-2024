/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Press_Start_2P: ['"Press Start 2P"'],
        Rock_Salt: ['"Rock Salt"'],
        Ubuntu: ['"Ubuntu"']
      }
    },
  },
  plugins: [],
}

