import type { Meta } from '@storybook/react'
import { LoginContainer } from '~/presentation/pages/Login/ui'

const meta = {
  title: 'pages/Login',
  component: LoginContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} as Meta<typeof LoginContainer>

export default meta

export const Default = () => <LoginContainer />
