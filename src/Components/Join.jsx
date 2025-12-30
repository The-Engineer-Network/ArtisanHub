import { useState } from "react";
import { motion } from "framer-motion";

import { useNavigate, Link } from "react-router-dom";// ✅ import navigate hook
import {
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Briefcase,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";

const JoinUs = () => {
  const navigate = useNavigate(); // ✅ initialize navigate
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    service: "",
    rememberMe: false,
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      if (!formData.email || !formData.password) {
        alert("Please fill in all fields");
        return;
      }
      alert(`Logging in with: ${formData.email}`);
      navigate("/dashboard");
    } else {
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.password ||
        !formData.phone ||
        !formData.location ||
        !formData.service
      ) {
        alert("Please fill in all fields");
        return;
      }
      if (!formData.agreeTerms) {
        alert("Please agree to the Terms of Service");
        return;
      }
      alert(`Creating account for: ${formData.fullName}`);
      navigate("/dashboard"); // ✅ navigate to dashboard
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block text-center md:text-left"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <div className="flex items-center justify-center gap-0">
                <img
                  src="/logo2.jpeg"
                  alt="ArtisanHub Logo"
                  className="w-16 h-16 object-contain"
                />
                <span className="text-3xl font-bold font-aladin text-gray-800">
                  Artisan<span className="text-orange-600">Hub</span>
                </span>
              </div>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">
              Join as an Artisan
            </h2>
            <p className="text-gray-600 mt-2">
              Create your profile and start getting jobs
            </p>
          </div>

          <p
            className="text-xl text-gray-600 mb-8"
            style={{ fontFamily: "Aladin, cursive" }}
          >
            {isLogin
              ? "Login to access your artisan profile and connect with customers"
              : "Connect with thousands of customers looking for skilled professionals"}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Verified Profiles</p>
                <p className="text-sm text-gray-600">
                  Get your professional badge
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">
                  Direct Customer Access
                </p>
                <p className="text-sm text-gray-600">
                  Connect via WhatsApp instantly
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">
                  Grow Your Business
                </p>
                <p className="text-sm text-gray-600">
                  Analytics and premium tools
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
        >
          <div className="md:hidden flex items-center gap-2 justify-center mb-6">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span
              className="text-3xl font-bold text-gray-800"
              style={{ fontFamily: "Aladin, cursive" }}
            >
              Artisan<span className="text-orange-600">Hub</span>
            </span>
          </div>

          <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${isLogin
                ? "bg-orange-600 text-white shadow-md"
                : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${!isLogin
                ? "bg-orange-600 text-white shadow-md"
                : "bg-transparent text-gray-600 hover:text-gray-900"
                }`}
            >
              Sign Up
            </button>
          </div>

          <div className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="080XXXXXXXX"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Lekki, Lagos"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select your service</option>
                    <option value="fashion">Fashion & Tailoring</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="beauty">Hair & Beauty</option>
                    <option value="painting">Painting</option>
                    <option value="mechanic">Mechanic</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-orange-600 hover:text-orange-700 font-semibold"
                  onClick={() => alert("Password reset feature coming soon")}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-1 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                    onClick={() => alert("Terms of Service")}
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                    onClick={() => alert("Privacy Policy")}
                  >
                    Privacy Policy
                  </button>
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-3.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-bold text-lg shadow-lg hover:shadow-xl"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 font-semibold text-gray-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2 font-semibold text-gray-700">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </motion.div>
      </div >
    </div >
  );
};

export default JoinUs;
