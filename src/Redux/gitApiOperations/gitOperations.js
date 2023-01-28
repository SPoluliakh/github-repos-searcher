import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gitApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  tagTypes: ['gitApi'],
  endpoints: builder => ({
    seachAccount: builder.query({
      query: query => ({
        url: 'search/users',
        params: {
          q: `${query}`,
          per_page: 20,
        },
      }),
      transformResponse: response => response.items,
      providesTags: ['gitApi'],
    }),
    getUserRepos: builder.query({
      query: query => `users/${query}/repos`,
      providesTags: ['gitApi'],
    }),
  }),
});

export const { useSeachAccountQuery, useLazyGetUserReposQuery } = gitApi;
