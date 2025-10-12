import { Outlet } from "react-router-dom";
import Header from "../components/LayoutComponents/Header";
import SideBar from "../components/LayoutComponents/SideBar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Skip to content for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3] focus:outline-none px-3 py-2 rounded-md shadow"
      >
        Skip to main content
      </a>
      {/* Desktop Sidebar - Fixed */}
      <div
        className="lg:w-80 bg-white shadow-sm overflow-y-auto lg:fixed lg:top-0 lg:left-0 lg:bottom-0 hidden lg:block no-scrollbar"
        role="navigation"
        aria-label="Primary"
      >
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="lg:flex-1 lg:ml-80 flex flex-col min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white shadow-sm">
          <Header />
        </div>

        {/* Content Area */}
        <main id="main-content" role="main" className="flex-1 bg-gray-50">
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 h-full min-h-[calc(100vh-80px)]">
            <div className="max-w-full mx-auto">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
