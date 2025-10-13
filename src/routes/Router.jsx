import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../shared/Loader";

const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));
const Profile = lazy(() => import("../page/Settings/Profile"));
const TermsCondition = lazy(() => import("../page/Settings/TermsCondition"));
const PrivacyPolicy = lazy(() => import("../page/Settings/PrivacyPolicy"));
const VerificationCode = lazy(() => import("../auth/VerificationCode"));
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Faq = lazy(() => import("../page/Settings/faq/Faq"));
const ResetPassword = lazy(() => import("../auth/ResetPassword"));
const ForgetPassword = lazy(() => import("../auth/ForgetPassword"));
const Users = lazy(() => import("../page/UserManagement/Users"));
const SignIn = lazy(() => import("../auth/SignIn"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/user-management",
        element: <Users />,
      },
      {
        path: "/dashboard/Settings/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/Settings/Terms&Condition",
        element: <TermsCondition />,
      },
      {
        path: "/dashboard/Settings/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <Suspense fallback={<Loader />}>
        <ForgetPassword />
      </Suspense>
    ),
  },
  {
    path: "/verify-mail",
    element: (
      <Suspense fallback={<Loader />}>
        <VerificationCode />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<Loader />}>
        <ResetPassword />
      </Suspense>
    ),
  },
]);
