import type { Meta } from '@storybook/react'
import { ButtonSignIn } from '.'

const meta = {
  title: 'pages/Login/ui/components/Button Sign In',
  component: ButtonSignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonSignIn>

export default meta

export const Default = () => <ButtonSignIn />
