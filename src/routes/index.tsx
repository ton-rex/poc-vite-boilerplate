import { createBrowserRouter } from 'react-router-dom'
import { AppLayout, ErrorLayout, ExternalLayout } from '../presentation/layouts'
import { privateRoutes } from './private-routes'
import { publicRoutes } from './public-routes'

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: '',
    element: <ExternalLayout />,
    errorElement: <ErrorLayout />,
    children: publicRoutes,
  },
  {
    path: '',
    element: <AppLayout />,
    errorElement: <ErrorLayout />,
    children: privateRoutes,
  },
])

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    router.dispose()
  })
}
