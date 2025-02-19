import React from "react";

const ImageCard = ({ imageUrl, text, bgColor }) => {
  return (
    <div
      className="w-64 h-80 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
      style={{ backgroundColor: bgColor || "#fff" }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Displayed"
          className="w-full h-48 object-cover rounded-xl"
        />
      )}
      {text && <p className="mt-3 text-lg font-semibold text-center">{text}</p>}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Click Me
      </button>
    </div>
  );
};

export default ImageCard;
