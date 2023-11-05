import { Box, PageContainer, Text } from '@stone-payments/jade'
import { useRouteError } from 'react-router-dom'

export function ErrorLayout(): JSX.Element {
	const error = useRouteError() as RouteError

	return (
		<PageContainer>
			<Box hasPadding>
				<Text>
					<strong>Error {error.status || 500}</strong>:{' '}
					{error.statusText ?? error.message}
				</Text>
			</Box>
		</PageContainer>
	)
}

type RouteError = Error & { status?: number; statusText?: string }
