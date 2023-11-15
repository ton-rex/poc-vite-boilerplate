import type { Meta } from '@storybook/react'
import { Component } from '.'

const meta = {
	title: 'pages/Login',
	component: Component,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} as Meta<typeof Component>

export default meta

export const Default = () => <Component />
