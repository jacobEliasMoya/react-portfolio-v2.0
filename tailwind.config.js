/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'retro': ["Danfo", "serif"],
      'libre': ["Libre Baskerville", "serif"],
      'ultra': ["Ultra", "serif"]

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
        
        grow:'grow .3s 2.25s ease-out forwards',
        growOne:'grow .3s 2.45s ease-out forwards',
        growTwo:'grow .3s 2.65s ease-out forwards',
        growThree:'grow .3s 2.85s ease-out forwards',
        growFour:'grow .3s 3.05s ease-out forwards',

        growProjectOne:'grow2 .4s .95s ease-out forwards',
        growProjectTwo:'grow2 .4s 1.05s ease-out forwards',
        growProjectThree:'grow2 .4s 1.25s ease-out forwards',
        growProjectFour:'grow2 .4s 1.45s ease-out forwards',

        growProjectOneNoDelay:'grow2 .4s .20s ease-out forwards',
        growProjectTwoNoDelay:'grow2 .4s .40s ease-out forwards',
        growProjectThreeNoDelay:'grow2 .4s .60s ease-out forwards',
        growProjectFourNoDelay:'grow2 .4s .80s ease-out forwards',

        fallTen: 'fall2 .4s 1.45s ease-out forwards',

        wiggle: 'wiggle 1s 2s ease-in-out infinite',

        expand: 'expand .6s 1.75s ease-in-out forwards',
        expandOne: 'expandOne .6s 1.75s ease-in-out forwards',
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

        // grow for link icons
        grow: {
          '0%,': { scale: '0;' },
          '40%': { scale: '1.4'},
          '60%': { scale: '1'},
          '80%': { scale: '1.2'},
          '100%': { scale: '1'},
        },

        // grow for project
        grow2: {
          '0%,': { scale: '0;' },
          '40%': { scale: '1.2'},
          '60%': { scale: '1'},
          '80%': { scale: '1.1'},
          '100%': { scale: '1'},
        },

        expand: {
          '0%,': { width: '0%', opacity:'0', padding:'0rem'},
          '100%': { width: '73.333333%', opacity:'1', padding:'1rem' },
        },

        expandOne: {
          '0%,': { height: '0rem', opacity:'0', padding:'0rem'},
          '100%': { height: '36rem', opacity:'1', padding:'1rem ' },
        },
      },

    },
  },
  plugins: [],
  important:false
}

