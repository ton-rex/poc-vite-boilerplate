import { Navigate } from 'react-router-dom'

export const privateRoutes = [
  { index: true, element: <Navigate to="/dashboard" replace /> },
  { path: 'dashboard', lazy: () => import('../presentation/pages/Dashboard') },
]
