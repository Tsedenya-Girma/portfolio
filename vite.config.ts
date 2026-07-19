import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

// Standard Vite config for a TanStack Start app.
// Plugins:
//   - vite-tsconfig-paths  → resolves the "@/" alias from tsconfig.json
//   - @tailwindcss/vite    → Tailwind CSS v4
//   - tanstackStart        → TanStack Start SSR plugin (custom server entry)
//   - nitro                → generates platform-specific output for Vercel /
//                            Netlify / Cloudflare etc.  Auto-detects the
//                            deployment target at build time.
//   - @vitejs/plugin-react → React Fast Refresh / JSX
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
  ],
});
