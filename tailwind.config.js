import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.purple,
        secondary: colors.pink,
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Updated deprecated colors
        sky: colors.sky,
        stone: colors.stone,
        neutral: colors.neutral,
        gray: colors.gray,
        slate: colors.slate,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 0deg at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
