import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    require("postcss-import"),
    require("tailwindcss")(path.resolve(__dirname, "./tailwind.config.js")),
    require("autoprefixer"),
  ],
});
