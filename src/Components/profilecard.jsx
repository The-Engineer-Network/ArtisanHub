import React, { useState } from "react";

const ProfileCard = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-lg mx-auto">
      <div className="flex flex-col items-center text-center">
        <label className="cursor-pointer relative group">
          <img
            src={image || "/src/assets/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <span className="absolute bottom-1 right-1 bg-orange-600 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
            Change
          </span>
        </label>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-gray-500">Fashion Designer • Lagos, Nigeria</p>
        <p className="mt-3 text-sm text-gray-600">
          “Creating unique outfits that bring confidence and style.”
        </p>

        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
            Edit Profile
          </button>
          <button className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
