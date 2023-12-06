import React from 'react';

import type { Decorator } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, refetchOnMount: true } },
});

export const QueryDecorator: Decorator = (Story) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <Story />
    </QueryClientProvider>
  )
}
