import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { SiFigma, SiSketch } from "react-icons/si";
import profile from "../assets/image.png"; // Apni image ka path yahan check kar lena

const ResumeHeader = () => {
  const [activeTab, setActiveTab] = useState("Professional Skills");

 
return(
  // Sub-component for Resume Tabs
 
    <section className="w-full bg-[#f4f4f4] pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-[#1e2125] mb-12">
          My Resume
        </h2>

        {/* Tab Buttons Container */}
        <div className="max-w-5xl mx-auto bg-[#eef0f3] rounded-xl shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] flex flex-wrap md:flex-nowrap p-1">
          {["Education", "Professional Skills", "Experience", "Interview"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-5 text-sm font-bold transition-all duration-300 rounded-lg
                ${activeTab === tab 
                  ? "bg-white text-[#ff4522] shadow-md" 
                  : "text-gray-600 hover:text-[#ff4522] opacity-80"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
 
        )
    }

export default ResumeHeader;