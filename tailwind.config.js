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
        'Open': ['Open Sans'],
        'Montserrat': ['Montserrat'],
      },

      fontSize: {
        '21f': '21.6px',
        '28f': '28.44px',
        '26f': '26px',
        '30f': '30px',
        '41f': '41px',
        '68f': '68px',
        '62f': '62px',
      },

      spacing: {
        '830': '830px',
        '700': '700px',
        '649': '649px',
        '624': '624px',
        '559': '559px',
        '522': '522px',
        '259': '259px',
        '254': '254px',
        '120': '120px',
        '110': '110px',
        '85': '85px',
        '38': '38px',
        
        '18w': '18px',
        '130w': '130px',
        '105w': '105.66px',
        '93w': '93px',
        '72w': '72px',
        '69w': '69px',
        
        '30w': '30px',
        
      },

      lineHeight: {
        '130L': '130px',
        '62L': '62px',
        '56L': '56px',
        '48L': '48px',
        '26L': '26px',
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
        'Wb': '#E5E7EB',
        'White': '#F7F8F9',
        
      },

      backgroundImage: {
        'ContactBg': "url('../src/assets/Contact.jpeg')",
        'FooterBg': "url('../src/assets/Footer.jpeg')",
      }
    },
  },
  plugins: [],
}

