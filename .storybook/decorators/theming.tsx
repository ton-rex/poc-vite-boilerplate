import jade from '@stone-payments/jade-design-tokens/js/ton';
import type { Decorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemingDecorator: Decorator = (Story, context) => {
	const theme = context.globals.theme

	return (
		<ThemeProvider theme={jade.theme}>
			<div className={`jade ${theme}`}>
				<Story />
			</div>
		</ThemeProvider>
	)
}
