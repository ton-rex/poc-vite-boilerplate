import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['src/**/*.spec.*', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
      coverage: {
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        all: true,
      },
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/tests/setup.ts',
    },
  }),
)
