import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { AxiosProvider } from '~/infra/providers/axios'
import { router } from '~/routes'
import { StyledThemeProvider } from './theme'

interface MyQueryConfig {
  retry: number
  suspense: boolean
  refetchOnMount: boolean
  refetchOnWindowFocus: boolean
  refetchOnReconnect: boolean
  refetchInterval: false
}

const queryConfig: MyQueryConfig = {
  retry: 0,
  suspense: true,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: true,
  refetchInterval: false,
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: queryConfig,
  },
})

function Providers(): React.ReactElement {
  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient} contextSharing>
        <div className="jade ton">
          <StyledThemeProvider>
            <Suspense
            // fallback={<PossibleFallback />}
            >
              <RouterProvider router={router} />
            </Suspense>
          </StyledThemeProvider>
        </div>
      </QueryClientProvider>
    </AxiosProvider>
  )
}

export default Providers
