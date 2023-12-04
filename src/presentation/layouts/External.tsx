import { Box, PageContainer } from '@stone-payments/jade'
import * as React from 'react'
import { Outlet } from 'react-router-dom'

/**
 * The minimal app layout to be used on pages such Login
 */
export function ExternalLayout(): JSX.Element {
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
