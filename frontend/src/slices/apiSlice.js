//parent to other api slices
//redux slices allow you to not have to FETCH requests or AXIOS request. It is ALL done through redux tool kit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User", 'Featured'],
  endpoints: (builder) => ({}),
});
