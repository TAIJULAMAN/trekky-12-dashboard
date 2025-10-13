import { baseApi } from "./baseApi";

const termsAndConditionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTermsAndConditions: builder.query({
      query: () => ({
        url: "manage/get-terms-conditions",
        method: "GET",
      }),
      providesTags: ["termsAndConditions"],
    }),
    createTerms: builder.mutation({
      query: ({ description }) => ({
        url: "manage/add-terms-conditions",
        method: "POST",
        body: { description },
      }),
      invalidatesTags: ["termsAndConditions"],
    }),
  }),
});

export const { useGetTermsAndConditionsQuery, useCreateTermsMutation } =
  termsAndConditionsApi;
