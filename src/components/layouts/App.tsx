import { Box, PageContainer } from '@stone-payments/jade'
import * as React from 'react'
import { Outlet } from 'react-router-dom'

/**
 * The primary application layout.
 */
export function AppLayout(): JSX.Element {
	return (
		<PageContainer>
			<Box hasPadding>
				<React.Suspense>
					<Outlet />
				</React.Suspense>
			</Box>
		</PageContainer>
	)
}
