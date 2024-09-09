'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = (props: ProvidersProps) => {
  const { children } = props;
  const [client] = React.useState(() => new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
