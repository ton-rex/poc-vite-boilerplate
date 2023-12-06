import type { Meta } from '@storybook/react'
import { DashboardContainer } from '../index'

const meta = {
  title: 'pages/Dashboard',
  component: DashboardContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} as Meta<typeof DashboardContainer>

export default meta

export const Default = () => <DashboardContainer />
