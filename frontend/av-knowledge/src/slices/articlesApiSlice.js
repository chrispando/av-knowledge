import { ARTICLES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: `${ARTICLES_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getArticle: builder.query({
      query: (id) => ({
        url: `${ARTICLES_URL}/${id}`,
      }),
    }),
    postArticle: builder.mutation({
      query: (data) => ({
        url: `${ARTICLES_URL}`,
        method: "POST",
        body: data,
        credentials: "include", // Ensures cookies are sent with the request
      }),
      invalidatesTags: ["Articles"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  usePostArticleMutation,
} = articlesApiSlice;
