import { Outlet } from "react-router-dom";
import Header from "../components/LayoutComponents/Header";
import SideBar from "../components/LayoutComponents/SideBar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Desktop Sidebar - Fixed */}
      <div className="lg:w-80 bg-white shadow-sm overflow-y-auto lg:fixed lg:top-0 lg:left-0 lg:bottom-0 hidden lg:block no-scrollbar border-r border-gray-200">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="lg:flex-1 lg:ml-80 flex flex-col min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white shadow-sm">
          <Header />
        </div>

        {/* Content Area */}
        <main className="flex-1 bg-[#27E2F5]">
          <div className="p-3 sm:p-4 md:p-5 lg:p-6 h-full min-h-[calc(100vh-80px)]">
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
