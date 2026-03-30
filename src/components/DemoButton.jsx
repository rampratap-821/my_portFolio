import React from "react";

const DemoButton = () => {
  return (
    <div className="hidden lg:block fixed top-1/2 right-0 -translate-y-1/2 z-50">
      <div
        className="bg-gradient-to-r from-gray-300 to-gray-50 px-8 py-2 shadow-lg 
        transition cursor-pointer rounded-b"
        style={{
          transform: "rotate(90deg)",
          transformOrigin: "right center",
          marginRight: "20px",
        }}
      >
        DEMOS
      </div>
    </div>
  );
};

export default DemoButton;