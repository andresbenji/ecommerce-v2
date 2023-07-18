import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../constants";

export const featuredApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeatured: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/featured`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetFeaturedQuery } = featuredApiSlice;
