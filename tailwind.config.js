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
        fall: 'fall .4s ease-out forwards',
        fallOne: 'fall .4s .15s ease-out forwards',
        fallTwo: 'fall .4s .35s ease-out forwards',
        fallThree: 'fall .4s .55s ease-out forwards',
        fallFour: 'fall .4s .75s ease-out forwards',
        fallFive: 'fall .4s .95s ease-out forwards',
        fallSix: 'fall .4s 1.05s ease-out forwards',
        fallSeven: 'fall .4s 1.25s ease-out forwards',
        fallEight: 'fall .4s 1.45s ease-out forwards',
        fallNine: 'fall .4s 1.65s ease-out forwards',
        
        grow:'grow .2s 1.45s ease-out forwards',
        growOne:'grow .2s 1.65s ease-out forwards',

        fallTen: 'fall2 .4s 1.85s ease-out forwards',

        wiggle: 'wiggle 1s 2s ease-in-out infinite',

        expand: 'expand .5s 2.25s ease-in-out forwards',
        expandOne: 'expandOne .5s 2.25s ease-in-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-0deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fall: {
          '0%,': { top: '-200px', opacity:'0' },
          '60%': { top: '0px', opacity:'1' },
          '70%': { top: '20px', opacity:'1' },
          '80%': { top: '0px', opacity:'1' },
          '90%': { top: '10px', opacity:'1' },
          '100%': { top: '0px', opacity:'1' },
        },
        fall2: {
          '0%,': { top: '-200%', opacity:'0' },
          '60%': { top: '50%', opacity:'1' },
          '70%': { top: '30%', opacity:'1' },
          '80%': { top: '50%', opacity:'1' },
          '90%': { top: '40%', opacity:'1' },
          '100%': { top: '50%', opacity:'1' },
        },
        grow: {
          '0%,': { scale: '0', opacity:'0' },
          '60%,': { scale: '1.4', opacity:'1' },
          '70%,': { scale: '.8', opacity:'1' },
          '80%,': { scale: '1.2', opacity:'1' },
          '90%,': { scale: '.9', opacity:'1' },
          '100%': { scale: '1', opacity:'1' },
        },

        expand: {
          '0%,': { width: '0%', opacity:'0' },
          '100%': { width: '83.333333%', opacity:'1' },
        },
        expandOne: {
          '0%,': { height: '0rem', opacity:'0' },
          '100%': { height: '24rem', opacity:'1' },
        },
      },

    },
  },
  plugins: [],
  important:false
}

