import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  user: User;
};

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts/' }),
  endpoints: builder => ({
    getPostsWithAuthor: builder.query<Post[], number>({
      query: page => `?_page=${page}&_limit=10&_expand=user`,
    }),
    getPostWithAuthor: builder.query<Post, number>({
      query: postId => `${postId}?_expand=user`,
    }),
  }),
});

export const {
  useGetPostsWithAuthorQuery,
  useGetPostWithAuthorQuery,
  util: { resetApiState: resetPostsCache },
} = postsApi;
