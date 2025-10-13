import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../Redux/api/auth/authApi";
import Swal from "sweetalert2";
import Loader from "../shared/Loader";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const location = useLocation();
  const email = location.state?.email;
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      await Swal.fire({
        icon: "error",
        title: "Missing fields",
        text: "Please enter and confirm your new password.",
        confirmButtonColor: "#27E2F5",
      });
      return;
    }
    if (password !== confirmPassword) {
      await Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "New password and confirm password must be the same.",
        confirmButtonColor: "#27E2F5",
      });
      return;
    }
    try {
      await resetPassword({ email, newPassword: password, confirmPassword }).unwrap();
      await Swal.fire({
        icon: "success",
        title: "Password reset",
        text: "Your password has been reset successfully.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
        background: "#111827",
        color: "#ffffff",
        iconColor: "#10B981",
      });
      navigate("/login");
    } catch (err) {
      const msg =
        err?.data?.message || err?.error || "Failed to reset password";
      Swal.fire({
        icon: "error",
        title: "Password reset failed",
        text: msg,
        confirmButtonColor: "#27E2F5",
      });
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen container mx-auto">
      <div>
        <img src="/logo.png" alt="log in image" width={200} height={200} />
      </div>
      <div className=" flex items-center justify-center">
        {/* Left Panel - Login Form */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16 bg-white">
          <div className="container w-full mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#313131] mb-2">
                Set a password
              </h1>
              <p className="text-[#313131]">
                Your previous password has been reseted. Please set a new
                password for your account.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Password Field */}
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="••••••••••••••••••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? (
                      <EyeInvisibleOutlined className="w-5 h-5" />
                    ) : (
                      <EyeOutlined className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="••••••••••••••••••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? (
                      <EyeInvisibleOutlined className="w-5 h-5" />
                    ) : (
                      <EyeOutlined className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#27E2F5] text-white py-3 px-4 rounded-lg font-medium ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Setting...' : 'Set password'}
              </button>
            </form>
          </div>
        </div>
        {/* Right Panel - Background Image */}
        <div className="hidden lg:flex flex-1 relative">
          <div className="w-full bg-cover bg-center bg-no-repeat">
            <img src="/reset.png" alt="reset password image" />
          </div>
        </div>
      </div>
    </div>
  );
}
