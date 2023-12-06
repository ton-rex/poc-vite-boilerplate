/* eslint-disable react-refresh/only-export-components */
import {
  render,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react'
import { StyledThemeProvider } from '~/infra/providers/theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider>{children}</StyledThemeProvider>
)

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
