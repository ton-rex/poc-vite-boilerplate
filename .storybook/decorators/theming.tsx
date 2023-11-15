import React from 'react'

import type { Decorator } from '@storybook/react'

export const ThemingDecorator: Decorator = (Story, context) => {
	const theme = context.globals.theme
	return (
		<div className={`jade ${theme}`}>
			<Story />
		</div>
	)
}
