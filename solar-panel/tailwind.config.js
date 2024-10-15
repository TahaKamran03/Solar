/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-500': '#86BE3F',
        'grey': '#8A8888',
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/hero-image.svg')",
        'feature-bg': "url('/src/assets/bg-feature-section.svg')",
        'connection-bg': "url('/src/assets/bg-connection.svg')",
        'bg-box-one': "url('/src/assets/connection-box-one.svg')",
        'bg-box-two': "url('/src/assets/connection-box-two.svg')",
        'bg-box-three': "url('/src/assets/connection-box-three.svg')",
        'bg-box-four': "url('/src/assets/connection-box-four.svg')",
        'cta-bg': "url('/src/assets/cta-bg.svg')",
        'footer-bg': "url('/src/assets/footer-bg.svg')",
      },
      fontFamily: {
        'playfair' : ['Playfair Display', 'serif']
      },
      boxShadow: {
       'custom-shadow': '0 0 4px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        '350': '350px',
      }
    },
  },
  plugins: [],
}
