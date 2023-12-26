// SocialContactFloating.js
import React, { useState } from "react";

const SocialContactFloating = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleListClick = () => {
    // Do something when a social item is clicked
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        onClick={handleListClick}
      >
        Social #1
      </button>

      {isHovered && (
        <div
          className="absolute top-10 left-0 p-4 bg-white shadow-md rounded-md z-10 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="hover-item hover:text-yellow-200">Facebook</p>
          <p className="hover-item hover:text-yellow-200">Line</p>
          <p className="hover-item hover:text-yellow-200">Twitter</p>
          <p className="hover-item hover:text-yellow-200">GitHub</p>
        </div>
      )}
    </div>
  );
};

export default SocialContactFloating;
