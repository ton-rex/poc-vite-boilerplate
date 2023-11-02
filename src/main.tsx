import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

const rootElement = document.querySelector("#root") as Element;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
