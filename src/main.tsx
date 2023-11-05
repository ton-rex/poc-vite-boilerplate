import React from 'react'
import ReactDOM from 'react-dom/client'
import Providers from './providers'

import './styles/globals'

const rootElement = document.querySelector('#root') as Element

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)

	root.render(
		<React.StrictMode>
			<Providers />
		</React.StrictMode>,
	)
}
