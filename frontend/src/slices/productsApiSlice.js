import { PRODUCTS_URL} from "../constants.js";
import { apiSlice } from "./apiSlice";

//productsApiSlice is 'injecting' endpoints into our main apiSlice
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    //this endpoint fetches all of our products
    getProducts: builder.query({
      query: ({pageNumber}) => ({
        url: PRODUCTS_URL,
        params: {
          pageNumber,
        }
      }),
      keepUnusedDataFor: 5,
    }),

    //this endpoint fetches one product
    getProductDetails: builder.query({
        query: (productId) => ({
            url: `${PRODUCTS_URL}/${productId}`
        }),
        keepUnusedData: 5
    }),
    
  }),
});

export const { useGetProductsQuery , useGetProductDetailsQuery} = productsApiSlice;
