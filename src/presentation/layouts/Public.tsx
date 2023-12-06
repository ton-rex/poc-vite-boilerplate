import { Box, PageContainer } from '@stone-payments/jade'
import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useGlobalStore from '~/infra/store/useGlobalStore'

const Layout = () => (
  <PageContainer>
    <Box hasPadding>
      <React.Suspense>
        <Outlet />
      </React.Suspense>
    </Box>
  </PageContainer>
)

export function PublicLayout(): JSX.Element {
  const { isAuthenticated } = useGlobalStore((state) => state)

  return isAuthenticated ? <Navigate to="/" /> : <Layout />
}
