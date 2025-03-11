import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode)
  return {
    plugins: [react(), tsconfigPaths()],
    base: mode === "production" ? "/react-study-hp/" : "/",
  }
})
