import { baseApi } from "../baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET /dashboard/:year
    getAllDashboard: builder.query({
      query: (year) => ({
        url: `dashboard/${year ?? new Date().getFullYear()}`,
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
    getSalesOverview: builder.query({
      query: ({ year } = {}) => ({
        url: "dashboard/sales-overview",
        method: "GET",
        params: { year },
      }),
      providesTags: ["dashboard"],
    }),
    
  }),
});

export const {
  useGetAllDashboardQuery,
  useGetSalesOverviewQuery,
} = dashboardApi;
