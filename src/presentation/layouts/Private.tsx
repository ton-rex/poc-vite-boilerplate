import { Box, PageContainer, Spinner } from '@stone-payments/jade'
import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useGlobalStore from '~/infra/store/useGlobalStore'

const Layout = () => (
  <PageContainer>
    <Box hasPadding>
      <React.Suspense fallback={<Spinner size="large" />}>
        <Outlet />
      </React.Suspense>
    </Box>
  </PageContainer>
)

export function PrivateLayout(): JSX.Element {
  const { isAuthenticated } = useGlobalStore((state) => state)

  return isAuthenticated ? <Layout /> : <Navigate to="/entrar" />
}
