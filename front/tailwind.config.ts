import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {  
        // Produto  
        'purple-light': '#A881E6',  
        purple: '#7450AC',  
        'purple-dark': '#523480',  

        // Base  
        'gray-100': '#FBF9FE',  
        'gray-200': '#AFABB6',  
        'gray-300': '#252529',  
        'gray-400': '#17171A',  
        'gray-500': '#111112',  
        'gray-600': '#0C0C0D',  

        // Feedback  
        'success-light': '#FFFFFF',  
        success: '#FFFFFF',  

        // Cores de Apoio  
        pink: '#DB5BBF',  
        orange: '#E07B67',  
        yellow: '#B9F3A3',  
        green: '#8CAD51',  
        blue: '#7B94CB',  
        'pink-dark': '#251622',  
        'orange-dark': '#261A17',  
        'yellow-dark': '#211E12',  
        'green-dark': '#1C2015',  
        'blue-dark': '#1A1D23',  
      },  
      fontFamily: {  
        inter: ['Inter', 'sans-serif'],  
      },  
      fontSize: {  
        heading1: ['24px', { lineHeight: '100%', fontWeight: '700' }],  
        heading2: ['14px', { lineHeight: '130%', fontWeight: '700' }],  
        button: ['14px', { lineHeight: '130%', fontWeight: '600' }],  
        tag: ['12px', { lineHeight: '130%', fontWeight: '600' }],  
        body: ['12px', { lineHeight: '130%', fontWeight: '400' }],  
      },  
    },
  },
  plugins: [],
};
export default config;
