import type { Preview } from '@storybook/react'
import { QueryDecorator } from './decorators/query'
import { ThemingDecorator } from './decorators/theming'

import '@stone-payments/jade-design-tokens/stone/bundle.css'
import '@stone-payments/jade-design-tokens/ton/theme.css'

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
  globals: {
    theme: 'ton',
  },
}

export const decorators = [ThemingDecorator, QueryDecorator]

export default preview
