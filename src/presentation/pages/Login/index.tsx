import type React from 'react'
import { DashboardContainer } from '~/presentation/pages/Dashboard/ui'
import { States, type PageProps } from '~/presentation/pages/Login/types'

export const Component: React.FC<PageProps> = () => {
  const state = States.default

  return <DashboardContainer state={state} />
}

Component.displayName = 'Login'
