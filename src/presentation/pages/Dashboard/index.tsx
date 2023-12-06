import type React from 'react'
import { States, type PageProps } from '~/presentation/pages/Dashboard/types'
import { DashboardContainer } from '~/presentation/pages/Dashboard/ui'

export const Component: React.FC<PageProps> = () => {
  const state = States.default

  return <DashboardContainer state={state} />
}

Component.displayName = 'Dashboard'
