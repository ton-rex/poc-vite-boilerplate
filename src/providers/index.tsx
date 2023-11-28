import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { AxiosProvider } from '~/providers/axios'
import { router } from '~/routes'
import { StyledThemeProvider } from './theme'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			suspense: true,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
			refetchInterval: false,
		},
	},
});

export interface ProvidersProps { }

function Providers(): React.ReactElement {
	return (
		<AxiosProvider>
			<QueryClientProvider client={queryClient}>
				<div className="jade ton">
					<StyledThemeProvider>
						{/* Error boundary */}
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
