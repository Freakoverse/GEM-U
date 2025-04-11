// tailwind-config.js
tailwind.config = {
    theme: {
        extend: {
          colors: {
            'bgMain': '#1E1E2F',          // Main background color
            'bgMain2': '#2A2A3D',         // Background color for product cards
            'textMain': '#EAEAEA',         // Main text color
            'textMain2': '#B0B0C0',        // Alt text color
            'linkMain': '#A77BFF',         // Color for links
            'btnMain': '#5E5E8D',          // Background color for buttons
            'btnMain2': '#A77BFF',         // Alt background color for buttons
          },
          screens: {
            'xs': '480px', // Add xs size
          },
          fontFamily: {
              libre: ['"archivo"', 'serif'], // Add archivo
          },
        }
    }
};
