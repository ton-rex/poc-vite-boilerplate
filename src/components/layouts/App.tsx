import * as React from "react";
import { Outlet } from "react-router-dom";
import { Box, PageContainer } from "@stone-payments/jade";

/**
 * The primary application layout.
 */
export function AppLayout(): JSX.Element {
  return (
    <PageContainer>
      <Box hasPadding>
        <React.Suspense>
          <Outlet />
        </React.Suspense>
      </Box>
    </PageContainer>
  );
}