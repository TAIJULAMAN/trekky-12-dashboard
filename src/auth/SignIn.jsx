import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { useLogInMutation } from '../Redux/api/auth/authApi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('john.doe@gmail.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const navigate = useNavigate();
  const [logIn, { isLoading }] = useLogInMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    try {
      const res = await logIn({ email, password }).unwrap();
      const token = res?.data?.accessToken || res?.accessToken || res?.token;
      if (token) {
        localStorage.setItem('accessToken', token);
      }
      navigate('/');
    } catch (err) {
      const msg = err?.data?.message || err?.error || 'Login failed';
      setSubmitError(msg);
    }
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


            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#313131] mb-2">Login</h1>
              <p className="text-[#313131]">Login to access your U Tee Hub account</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                    {showPassword ? (
                      <EyeInvisibleOutlined className="w-5 h-5" />
                    ) : (
                      <EyeOutlined className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>
                <a href="/forget-password" className="text-sm text-[#FF8682]">
                  Forgot Password
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#27E2F5] text-white py-3 px-4 rounded-lg font-medium ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              {submitError ? (
                <p className="text-red-600 text-sm mt-2">{submitError}</p>
              ) : null}
            </form>
          </div>
        </div>

        {/* Right Panel - Background Image */}
        <div className="hidden lg:flex flex-1 relative">
          <div
            className="w-full bg-cover bg-center bg-no-repeat"
          >
            <img src='/log.png' alt='log in image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;