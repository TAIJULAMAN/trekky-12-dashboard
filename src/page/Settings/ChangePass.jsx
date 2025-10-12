import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

function ChangePass() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 rounded-lg shadow-sm">
        <h2 className="text-lg sm:text-xl lg:text-2xl text-[#0D0D0D] text-center font-bold mb-6">
          Change Password
        </h2>
        
        <form className="space-y-6">
          {/* Current Password */}
          <div className="space-y-2">
            <label
              htmlFor="currentPassword"
              className="block text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold"
            >
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                name="currentPassword"
                placeholder="Enter current password"
                className="w-full border-2 border-[#6A6D76] rounded-lg outline-none px-3 sm:px-4 py-3 pr-12 focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-[#6A6D76] hover:text-[#0b7bb3] transition-colors duration-200"
              >
                {showCurrentPassword ? (
                  <EyeInvisibleOutlined className="text-[20px]" />
                ) : (
                  <EyeOutlined className="text-[20px]" />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label
              htmlFor="newPassword"
              className="block text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                className="w-full border-2 border-[#6A6D76] rounded-lg outline-none px-3 sm:px-4 py-3 pr-12 focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-[#6A6D76] hover:text-[#0b7bb3] transition-colors duration-200"
              >
                {showNewPassword ? (
                  <EyeInvisibleOutlined className="text-[20px]" />
                ) : (
                  <EyeOutlined className="text-[20px]" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Password must be at least 8 characters long
            </p>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm new password"
                className="w-full border-2 border-[#6A6D76] rounded-lg outline-none px-3 sm:px-4 py-3 pr-12 focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-[#6A6D76] hover:text-[#0b7bb3] transition-colors duration-200"
              >
                {showConfirmPassword ? (
                  <EyeInvisibleOutlined className="text-[20px]" />
                ) : (
                  <EyeOutlined className="text-[20px]" />
                )}
              </button>
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-[#F9B038] hover:bg-[#E8A532] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base shadow-sm hover:shadow-md"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePass;
