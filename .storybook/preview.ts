import type { Preview } from '@storybook/react'
import { ThemingDecorator } from './decorators/theming'

import '@stone-payments/jade-design-tokens/pagarme/bundle.css'
import '@stone-payments/jade-design-tokens/stone/bundle.css'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export const decorators = [ThemingDecorator]

export default preview
