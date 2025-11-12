import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h1>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-gray-700">Change Password</label>
          <input
            type="password"
            placeholder="New password"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700">Notification Preferences</label>
          <select className="w-full p-2 border rounded-lg">
            <option>Email Notifications</option>
            <option>SMS Notifications</option>
            <option>Push Notifications</option>
          </select>
        </div>

        <button className="bg-orange-700 text-white px-6 py-2 rounded-lg hover:bg-orange-800">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
