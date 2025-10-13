import { baseApi } from "./baseApi";

const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaq: builder.query({
      query: (params) => ({
        url: "manage/get-faq",
        method: "GET",
        params,
      }),
      providesTags: ["faq"],
    }),
    createFaq: builder.mutation({
      query: (data) => ({
        url: "manage/add-faq",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["faq"],
    }),
    updateFaq: builder.mutation({
      query: (body) => ({
        url: "manage/update-faq",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["faq"],
    }),
    // Delete FAQ
    deleteFaq: builder.mutation({
      query: (faqId) => ({
        url: "manage/delete-faq",
        method: "DELETE",
        params: { faqId },
      }),
      invalidatesTags: ["faq"],
    }),
  }),
});

export const {
  useGetAllFaqQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqApi;

export default faqApi;