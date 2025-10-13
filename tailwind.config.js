/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nasalization: ['var(--font-nasalization)', 'sans-serif'],
        tommy: ['var(--font-tommy-medium)', 'sans-serif'],
        'tommy-bold': ['var(--font-tommy-bold)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

