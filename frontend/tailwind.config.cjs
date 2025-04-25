module.exports = {  
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  theme: {  
    extend: {  
      colors: {  
        // Base  
        black: '#000000',  
        white: '#FFFFFF',  
        // Gray scale  
        gray: {  
          100: '#F5F5F5',  
          200: '#E5E5E5',  
          500: '#737373',  
        },  
        // Accent (deep blue)  
        accent: '#1A365D',  
      },  
      // Global border color  
      borderColor: {  
        DEFAULT: '#E5E5E5',  // gray-200  
      },  
    },  
  },  
  plugins: [],  
};  