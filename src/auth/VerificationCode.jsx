import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../Redux/api/auth/authApi";
import Swal from "sweetalert2";
import Loader from "../shared/Loader";

export default function VerificationCode() {
  const location = useLocation();
  const email = location.state?.email;
  const [code, setCode] = useState(new Array(6).fill(""));
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!isNaN(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleVerifyCode = async () => {
    const codeValue = code.join("");
    if (!email) {
      await Swal.fire({
        icon: "error",
        title: "Missing email",
        text: "Please start from Forgot Password again.",
        confirmButtonColor: "#27E2F5",
      });
      return navigate("/forget-password");
    }
    if (codeValue.length !== 6) return;
    try {
      await verifyEmail({ email, code: codeValue }).unwrap();
      await Swal.fire({
        icon: "success",
        title: "Code verified",
        text: "You can now reset your password.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
        background: "#111827",
        color: "#ffffff",
        iconColor: "#10B981",
      });
      navigate("/reset-password", { state: { email } });
    } catch (err) {
      const msg = err?.data?.message || err?.error || "Invalid or expired code";
      Swal.fire({
        icon: "error",
        title: "Verification failed",
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
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#313131] mb-2">
                Verify code
              </h1>
              <p className="text-[#313131]">
                An authentication code has been sent to your email.
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-5">
              <div className="flex justify-center gap-2">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    className="shadow-xs w-12 h-12 text-2xl text-center border border-[#0b7bb3] text-[#0b7bb3] rounded-lg focus:outline-none"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-5 justify-center items-center text-white">
                <button
                  onClick={handleVerifyCode}
                  type="button"
                  disabled={isLoading || code.join("").length !== 6}
                  className={`whitespace-nowrap w-full bg-[#27E2F5] text-white font-semibold py-3 rounded-lg shadow-lg my-5 ${
                    isLoading || code.join("").length !== 6 ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  {isLoading ? "Verifying..." : "Verify"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Panel - Background Image */}
        <div className="hidden lg:flex flex-1 relative">
          <div className="w-full bg-cover bg-center bg-no-repeat">
            <img src="/verify.png" alt="verification  image" />
          </div>
        </div>
      </div>
    </div>
  );
};

