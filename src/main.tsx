import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

import './styles/globals'

const rootElement = document.querySelector("#root") as Element;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <div className="jade ton">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
}
