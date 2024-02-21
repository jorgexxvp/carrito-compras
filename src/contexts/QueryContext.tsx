'use client'

import {
  QueryClient,
  QueryClientProvider,
  QueryKey,
  UseQueryOptions,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export type QueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>;


export interface QueryContextProviderProps {
  children: React.ReactNode;
}

export const QueryContextProvider: React.FC<QueryContextProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}