import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			include: ['src/**/*.spec.*', 'src/**/*.test.*'],
			coverage: {
				include: ['src/**/*'],
			},
			environment: 'jsdom',
		},
	}),
)
