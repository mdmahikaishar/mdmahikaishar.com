import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/**.{ts,tsx,css,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
