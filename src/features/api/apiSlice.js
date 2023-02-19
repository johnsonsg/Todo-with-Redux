import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  endpoints: builder => ({
    // return builder method
    getTodos: builder.query({
      query: () => '/todos'
    })
  })
})

// RTK Query allows you to create custom hooks
export const { useGetTodosQuery } = apiSlice // when naming hook, use this method: 'use....Query'
