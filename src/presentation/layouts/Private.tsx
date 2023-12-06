import { Box, PageContainer } from '@stone-payments/jade'
import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useGlobalStore from '~/infra/store/useGlobalState'

/**
 * The primary application layout.
 */
const Layout = () => (
  <PageContainer>
    <Box hasPadding>
      <React.Suspense>
        <Outlet />
      </React.Suspense>
    </Box>
  </PageContainer>
)

export function PrivateLayout(): JSX.Element {
  const { isAuthenticated } = useGlobalStore((state) => state)

  return isAuthenticated ? <Layout /> : <Navigate to="/" />
}
