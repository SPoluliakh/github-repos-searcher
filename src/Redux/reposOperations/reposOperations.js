import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reposApi = createApi({
  reducerPath: 'repos/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://github-repo-searcher-nodejs.onrender.com/api',
    // baseUrl: 'http://localhost:3001/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }
      return headers;
    },
  }),
  tagTypes: ['repos'],
  endpoints: builder => ({
    getAllRepos: builder.query({
      query: () => `/library`,
      transformResponse: response => response.data.result,

      providesTags: ['repos'],
    }),
    addRepo: builder.mutation({
      query: repo => ({
        method: 'post',
        url: '/library',
        body: repo,
      }),

      invalidatesTags: ['repos'],
    }),
    removeRepo: builder.mutation({
      query: id => ({
        method: 'delete',
        url: `/library/${id}`,
      }),
      invalidatesTags: ['repos'],
    }),
    updateRepoComents: builder.mutation({
      query: ({ data, id }) => ({
        method: 'PATCH',
        url: `/library/${id}/coments`,
        body: {
          coments: data,
        },
        // headers: {
        //   origin: '*',
        // },
      }),
      invalidatesTags: ['repos'],
    }),
  }),
});

export const {
  useGetAllReposQuery,
  useAddRepoMutation,
  useRemoveRepoMutation,
  useUpdateRepoComentsMutation,
} = reposApi;
