import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3344,
  },
  plugins: [
    tsConfigPaths(),
    autoImport({
      include: [/\.[jt]sx?$/],
      imports: ['react'],
      dts: 'src/auto-imports.d.ts',
    }),
    tanstackStart({
      spa: {
        enabled: false,
      },
    }),
    viteReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tailwindcss(),
  ],
})
