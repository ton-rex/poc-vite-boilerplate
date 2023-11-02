import * as React from "react";
import { Outlet } from "react-router-dom";

/**
 * The minimal app layout to be used on pages such Login
 */
export function ExternalLayout(): JSX.Element {
  return (
    <React.Fragment>
      <p>Base</p>
      <React.Suspense>
        <Outlet />
      </React.Suspense>
    </React.Fragment>
  );
}