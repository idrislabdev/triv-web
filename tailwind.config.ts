import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/@core/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/@core/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#71BBED',
        neutral: {
          100: '#F0F1F3',
          200: '#EBEEF4',
          300: '#C1C3CC',
          500: '#838899',
          700: '#4B5060',
          800: '#2E3339',
          900: '#191B20'
        },
        red: {
          600: '#EB5757'
        },
        yellow: {
          600: '#F2AF22'
        }
      },
      screens: {
        "2xl": { max: "1535px" },  
        xl: { max: "1279px" },  
        lg: { max: "1180px" },  
        md: { max: "850px" },  
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
export default config;
