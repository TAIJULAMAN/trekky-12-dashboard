import React, { useState } from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('john.doe@gmail.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className='min-h-screen container mx-auto'>
      <div>
        <img src='/logo.png' alt='log in image' width={200} height={200}
        />
      </div>
      <div className=" flex items-center justify-center">
        {/* Left Panel - Login Form */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16 bg-white">
          <div className="container w-full mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#313131] mb-2">Set a password</h1>
              <p className="text-[#313131]">Your previous password has been reseted. Please set a new password for your account.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
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
                    {showPassword ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
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
                    {showPassword ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#27E2F5] text-white py-3 px-4 rounded-lg font-medium"
              >
                Set password
              </button>
            </form>
          </div>
        </div>
        {/* Right Panel - Background Image */}
        <div className="hidden lg:flex flex-1 relative">
          <div
            className="w-full bg-cover bg-center bg-no-repeat"
          >
            <img src='/reset.png' alt='reset password image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;