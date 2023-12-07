import type { Meta, StoryFn } from '@storybook/react'
import type { LoginContainerProps } from '~/presentation/pages/Login/types'
import { LoginContainer } from '~/presentation/pages/Login/ui'

const meta = {
  title: 'pages/Login',
  component: LoginContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    doLogin: () => {
      alert('doLogin :)')
    },
  },
} as Meta<typeof LoginContainer>

export const Default: StoryFn<LoginContainerProps> = ({ ...args }) => (
  <LoginContainer {...args} />
)

export default meta
