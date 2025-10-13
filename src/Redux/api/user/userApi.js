import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => ({
        url: "dashboard/users",
        method: "GET",
        params,
      }),

      providesTags: ["user"],
    }),
    blockUser: builder.mutation({
      query: ({ id }) => ({
        url: `dashboard/toggle-block/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetAllUsersQuery, useBlockUserMutation } = userApi;
