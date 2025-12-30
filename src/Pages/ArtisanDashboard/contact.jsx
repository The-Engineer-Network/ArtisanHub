import React from "react";
import { motion } from "framer-motion";
/* import Navbar from "../components/Navbar"; */

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/*  <Navbar /> */}

      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-semibold leading-snug">
              Get in <span className="font-medium">touch with us</span>
            </h1>

            <p className="max-w-md mt-5 text-gray-600">
              We are here to help! Whether you have a question about our services,
              need assistance with your account, or want to provide feedback,
              our team is ready to assist you.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-gray-500">Email:</p>
                <p className="font-medium">artisanhub@gmail.com</p>
              </div>

              <div>
                <p className="text-gray-500">Phone:</p>
                <p className="font-medium">+234 813 388 8792</p>
                <p className="text-sm text-gray-400">Available Monday to Friday, 9 AM - 6 PM GMT</p>
              </div>
            </div>

            <button className="mt-8 bg-orange-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-md hover:scale-[1.05] transition cursor-pointer">
              <span>Live Chat</span>
              <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="black"
                  className="w-3 h-3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </div>
            </button>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.3)] rounded-3xl p-8"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-500">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name..."
                    className="w-full px-4 py-2 mt-1 border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name..."
                    className="w-full px-4 py-2 mt-1 border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-2 mt-1 border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">How can we help you?</label>
                <textarea
                  rows={4}
                  placeholder="Enter your message..."
                  className="w-full px-4 py-2 mt-1 border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 w-fit ml-auto flex items-center gap-2 rounded-full shadow-md hover:scale-[1.05] transition cursor-pointer"
              >
                Send Message
                <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="black"
                    className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div >
  );
}

export default Contact;