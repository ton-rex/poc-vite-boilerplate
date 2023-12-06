import type React from 'react'
import { States } from '~/presentation/pages/Dashboard/types'
import { DashboardContainer } from '..'

const Container: React.FC<{ state: States }> = ({ state }) => (
  <DashboardContainer state={state} />
)

const Default: React.FC = () => <Container state={States.default} />
const Loading: React.FC = () => <Container state={States.loading} />
const NetworkError: React.FC = () => <Container state={States.networkError} />
const GenericError: React.FC = () => <Container state={States.genericError} />

export { Default, GenericError, Loading, NetworkError }
