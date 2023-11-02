import * as React from "react";
import { Outlet } from "react-router-dom";

/**
 * The primary application layout.
 */
export function AppLayout(): JSX.Element {
  return (
    <React.Fragment>
      <p>App</p>
      <React.Suspense>
        <Outlet />
      </React.Suspense>
    </React.Fragment>
  );
}