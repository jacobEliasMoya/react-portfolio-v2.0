/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'retro': ["Danfo", "serif"]
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-0deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },

    },
  },
  plugins: [],
  important:true
}

