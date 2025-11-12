import React from "react";

const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h1>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700">Profile Picture</label>
          <input type="file" className="w-full p-2 border rounded-lg" />
        </div>

        <button
          type="submit"
          className="bg-orange-700 text-white px-6 py-2 rounded-lg hover:bg-orange-800"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
