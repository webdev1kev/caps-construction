import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "rgb(234, 233, 230)",
        "black-alt": "rgb(36, 33, 33)",
        tan: "rgb(240, 239, 225)",
      },
    },
  },
  plugins: [],
};
export default config;
