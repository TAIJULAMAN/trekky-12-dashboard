import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../Redux/api/auth/authApi";
import Swal from "sweetalert2";
import Loader from "../shared/Loader";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email }).unwrap();
      await Swal.fire({
        icon: "success",
        title: "Check your email",
        text: "We sent a verification code to your email.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: "#111827",
        color: "#ffffff",
        iconColor: "#10B981",
      });
      navigate("/verify-mail", { state: { email } });
    } catch (err) {
      const msg = err?.data?.message || err?.error || "Failed to send reset email";
      await Swal.fire({
        icon: "error",
        title: msg,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: "#111827",
        color: "#ffffff",
        iconColor: "#EF4444",
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
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#313131] mb-2">
                Forgot your password?
              </h1>
              <p className="text-[#313131]">
                Don’t worry, happens to all of us. Enter your email below to
                recover your password.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="john.doe@gmail.com"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#27E2F5] text-white py-3 px-4 rounded-lg font-medium ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {/* Right Panel - Background Image */}
        <div className="hidden lg:flex flex-1 relative">
          <div className="w-full bg-cover bg-center bg-no-repeat">
            <img src="/forget.png" alt="forget pass image" />
          </div>
        </div>
      </div>
    </div>
  );
}
