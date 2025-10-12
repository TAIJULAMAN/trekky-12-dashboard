
import { useState } from "react";
import { CameraOutlined } from "@ant-design/icons";
import EditProfile from "./EditProfile";
import ChangePass from "./ChangePass";
import PageHeading from "../../shared/PageHeading";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8 pb-6">
        {/* Header Section */}
        <div className="mb-6">
          <PageHeading title="Admin Profile" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-200 rounded-full border-4 border-white shadow-xl overflow-hidden">
                  <img
                    src="https://avatar.iran.liara.run/public/44"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Upload Icon */}
                <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200">
                  <label htmlFor="profilePicUpload" className="cursor-pointer">
                    <CameraOutlined className="text-[#0b7bb3] text-xs sm:text-sm" aria-hidden="true" />
                  </label>
                  <input type="file" id="profilePicUpload" className="hidden" />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  Shah Aman
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Administrator
                </p>
              </div>
            </div>
          </div>

          {/* Tab Navigation Section */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-sm p-2 flex gap-2">
              <button
                onClick={() => setActiveTab("editProfile")}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 ${
                  activeTab === "editProfile"
                    ? "bg-[#0b7bb3] text-white shadow-md"
                    : "text-gray-600 hover:text-[#0b7bb3] hover:bg-gray-50"
                }`}
              >
                Edit Profile
              </button>
              <button
                onClick={() => setActiveTab("changePassword")}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200 ${
                  activeTab === "changePassword"
                    ? "bg-[#0b7bb3] text-white shadow-md"
                    : "text-gray-600 hover:text-[#0b7bb3] hover:bg-gray-50"
                }`}
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Tab Content Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8">
              {activeTab === "editProfile" && <EditProfile />}
              {activeTab === "changePassword" && <ChangePass />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
