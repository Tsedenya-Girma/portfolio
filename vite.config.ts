import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

// Standard Vite config for a TanStack Start app — replaces the previous
// @lovable.dev/vite-tanstack-config wrapper. This config manually wires up:
//   - vite-tsconfig-paths (resolves the "@/" alias from tsconfig.json)
//   - @tailwindcss/vite (Tailwind CSS v4)
//   - tanstackStart (TanStack Start SSR plugin, pointed at our custom
//     src/server.ts entry, which wraps the default server entry for error handling)
//   - @vitejs/plugin-react (React Fast Refresh / JSX)
//
// NOTE: this hasn't been build-tested in this environment (no network/npm
// access here). Run `npm install && npm run dev` (and `npm run build`) after
// pulling this down — if the `tanstackStart({ server: { entry: "server" } })`
// option name doesn't match your installed @tanstack/react-start version,
// check that package's docs for the current server-entry override API.
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server", preset: "vercel" },
    }),
    viteReact(),
  ],
});
