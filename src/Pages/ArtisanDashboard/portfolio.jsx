import React, { useState } from "react";

const Portfolio = () => {
  const [works, setWorks] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setWorks([...works, ...urls]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        My Portfolio
      </h1>

      <input
        type="file"
        multiple
        onChange={handleUpload}
        className="mb-4 border p-2 rounded-lg"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {works.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="work"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
