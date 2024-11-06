/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
        'Raleway': ['Raleway'],
        'Roboto': ['Roboto'],
        'Bebas': ['Bebas Neue'],
        'Inter': ['Inter'],
      },

      fontSize: {
        '28f': '28.44px',
        '34f': '34px',
        '68f': '68px',
      },

      spacing: {
        '840': '840px',
        '700': '700px',
        '649': '649px',
        '522': '522px',
        '480': '480px',
        '259': '259px',
        
        
        '19': '19rem',
      },

      maxWidth: {
        'container': '1320px',
      },
      colors: {
        'Black': '#0A1425',
        'r1': '#BD1F17',
        'r2': '#A51D13',
        'r3': '#8E1B0F',
        'Yello': '#FEBF00',
        'Gray': '#333333',
        
      },

      backgroundImage: {
        'banner': "url('../src/assets/bannerBg.png')",
      }
    },
  },
  plugins: [],
}

