import { Box, PageContainer } from '@stone-payments/jade'
import * as React from 'react'
import { Outlet } from 'react-router-dom'

export function PublicLayout(): JSX.Element {
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
