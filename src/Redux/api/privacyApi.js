import { baseApi } from "./baseApi";

const privacyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacy: builder.query({
      query: () => ({
        url: "manage/get-privacy-policy",
        method: "GET",
      }),
      providesTags: ["privacy"],
    }),

    createPrivacy: builder.mutation({
      query: ({ description }) => ({
        url: "manage/add-privacy-policy",
        method: "POST",
        body: { description },
      }),
      invalidatesTags: ["privacy"],
    }),
  }),
});

export const { useGetPrivacyQuery, useCreatePrivacyMutation } = privacyApi;
