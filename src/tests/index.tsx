/* eslint-disable react-refresh/only-export-components */
import {
  render,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StyledThemeProvider } from '~/infra/providers/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <StyledThemeProvider>{children}</StyledThemeProvider>
  </QueryClientProvider>
)

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
