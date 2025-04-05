import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/schedule",
  "/aboutus",
  "/contact",
  "/class",
  "/faq",
  "/terms-of-service",
  "/privacy-policy",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Sitemap({
      hostname: "https://tldancestudio.com",
      routes,
    }),
  ],
  publicPath: process.env.NODE_ENV === "production" ? "/tl-studio/" : "/",
});
