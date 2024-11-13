import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'text-shadow': '0px 0px 5px rgba(0, 0, 0, .485)',
      },
      colors: {
        'custom-blue': '#044e83',
       // Adding your custom blue color
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundImage: {
        'custom-image': "url('/governor-house.jpg')",
      },
      fontFamily: {
        poppins: ['_Poppins_Fallback_092cb9', 'sans-serif'], // Add your custom font name here
      },
    },
  },
  plugins: [],
};
export default config;
