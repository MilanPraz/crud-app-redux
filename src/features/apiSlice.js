import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["Post"],
    }),
    addNewPost: builder.mutation({
      query: (post) => ({
        //i have to write query instead of mutation otherwise it will not work error gives
        url: "/users",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: (updatedUser) => ({
        url: `users/${updatedUser.id}`,
        method: "PUT",
        body: updatedUser,
      }),
      invalidatesTags: ["Post"],
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    changeToggle: builder.mutation({
      query: (updatedtoggle) => ({
        url: `users/${updatedtoggle.id}`,
        method: "PUT",
        body: updatedtoggle,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useGetPostByIdQuery,
  useChangeToggleMutation,
} = apiSlice;
//npm install json-server
// npx json-server --watch data/db.json --port 8000
