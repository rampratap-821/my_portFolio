import React, { useState } from 'react'
import Education from './Education'
import ResumeSkills from './ResumeSkills'
import ResumeProjects from './Projects'

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <>
      <div>
        <section className="w-full pt-20 px-6">
          <div className="w-full text-center px-5">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e2125] mb-12">
              My Resume
            </h2>

            {/* Tabs */}
            <div className="container mx-auto w-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 rounded-xl shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] flex flex-wrap md:flex-nowrap p-1">
              
              {["Education", "Skills", "Project"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-5 text-sm font-bold transition-all duration-300 rounded-lg
                    ${activeTab === tab 
                      ? "bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 shadow-md" 
                      : "text-gray-600 hover:text-[#ff4522] opacity-80"}`}
                >
                  {tab}
                </button>
              ))}

            </div>
          </div>
        </section>

        {/* Component Render */}
        {activeTab === "Education" && <Education />}
        {activeTab === "Skills" && <ResumeSkills />}
        {activeTab === "Project" && <ResumeProjects />}
      </div>
    </>
  )
}

export default Resume