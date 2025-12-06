export default {
  darkMode: 'class',
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'background': '#000000',      // Main background (Black)
        'surface': '#EFECE3',         // Text & main surface color (Cream)
        'primary': '#4A70A9',         // Primary Accent (Muted Blue)
        'secondary': '#8FABD4',       // Secondary Accent / Hover (Soft Blue)
      },
      fontFamily: {
        // You can define modern fonts here if you like
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

