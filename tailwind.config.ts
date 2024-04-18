/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": 'HelveticaNeue, "Helvetica Neue", Helvetica, Arial, 游ゴシック体, YuGothic, "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック, "Yu Gothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "MS ゴシック", "MS Gothic", sans-serif"',
      "fontFeatureSettings": "palt",
    },
    extend: {
      colors: {
        darkBackground: '#171717',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

