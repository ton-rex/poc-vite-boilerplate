import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
	mode: 'development',
	base: '/',
	includeAssets: ['favicon.ico'],
	manifest: {
		name: 'REX POC',
		short_name: 'REX',
		theme_color: '#ffffff',
		icons: [
			{
				src: 'android-chrome-192x192.png', // <== don't add slash, for testing
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/android-chrome-512x512.png', // <== don't remove slash, for testing
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: 'android-chrome-512x512.png', // <== don't add slash, for testing
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any maskable',
			},
		],
	},
	devOptions: {
		enabled: process.env.SW_DEV === 'true',
		/* when using generateSW the PWA plugin will switch to classic */
		type: 'module',
		navigateFallback: 'index.html',
	},
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), VitePWA(pwaOptions)],
	server: {
		host: true,
		strictPort: true,
	},
})
