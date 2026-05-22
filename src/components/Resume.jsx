// import React, { useState } from 'react'
// import Education from './Education'
// import ResumeSkills from './ResumeSkills'
// import ResumeProjects from './Projects'

// const Resume = () => {
//   const [activeTab, setActiveTab] = useState("Education");

//   return (
//     <>
//       <div>
//         <section className="w-full pt-20 px-6">
//           <div className="w-full text-center px-5">
//             <h2 className=" text-3xl sm:text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold text-[#1e2125] mb-12">
//               My Resume
//             </h2>

//             {/* Tabs */}
//             <div className="container mx-auto w-full bg-gradient-to-tr from-gray-100 to-white rounded-xl shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] flex flex-wrap md:flex-nowrap p-1">
              
//               {["Education", "Skills", "Project"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`flex-1 py-5 text-sm font-bold transition-all duration-300 rounded-lg
//                     ${activeTab === tab 
//                       ? "bg-gradient-to-tr from-gray-100 to-white shadow-md" 
//                       : "text-gray-600 hover:text-[#ff4522] opacity-80"}`}
//                 >
//                   {tab}
//                 </button>
//               ))}

//             </div>
//           </div>
//         </section>

//         {/* Component Render */}
//         {activeTab === "Education" && <Education />}
//         {activeTab === "Skills" && <ResumeSkills />}
//         {activeTab === "Project" && <ResumeProjects />}
//       </div>
//     </>
//   )
// }

// export default Resume


import React, { useState } from 'react'
import Education from './Education'
import ResumeSkills from './ResumeSkills'
import ResumeProjects from './Projects'

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <>
      {/* Background matching other sections */}
      <div className="w-full min-h-screen bg-[#050c1a] pt-20 px-6">
        <section className="max-w-7xl mx-auto w-full">
          <div className="w-full text-center px-5">
            
            {/* Heading matching portfolio standards */}
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-14 tracking-wide">
              My Resume
            </h2>

            {/* 🔥 Fully Transformed Tabs - Matching Feature & Portfolio Design System */}
            <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              
              {["Skills","Education","Project"].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="group relative py-5 px-8 rounded-2xl font-bold tracking-wider text-lg transition-all duration-500 transform outline-none border"
                    style={{
                      // Features aur Portfolio component jaisa same rule
                      backgroundColor: "#000000",
                      borderColor: isActive ? "#a3e635" : "rgba(163, 230, 53, 0.2)",
                      boxShadow: isActive 
                        ? "0 0 20px rgba(163, 230, 53, 0.5)" 
                        : "0 4px 10px rgba(0, 0, 0, 0.3)",
                      transform: isActive ? "translateY(-4px)" : "translateY(0)",
                    }}
                    // Hover par smooth intensity boost jaisa images par tha
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "rgba(163, 230, 53, 0.6)";
                        e.currentTarget.style.boxShadow = "0 0 15px rgba(163, 230, 53, 0.3)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "rgba(163, 230, 53, 0.2)";
                        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
                      }
                    }}
                  >
                    {/* Glow effect matching feature components */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#a3e635]/10 to-transparent opacity-50 blur-xl rounded-2xl -z-10" />
                    )}

                    {/* Text Styling */}
                    <span className={`transition-colors duration-300 ${isActive ? "text-[#a3e635]" : "text-gray-400 group-hover:text-white"}`}>
                      {tab === "Project" ? "Projects" : tab} {/* Project ko Projects dikhane ke liye */}
                    </span>

                  </button>
                );
              })}

            </div>
          </div>
        </section>

        {/* Render Components box */}
        <div className="max-w-7xl mx-auto w-full pb-20">
          {activeTab === "Skills" && <ResumeSkills />}
           {activeTab === "Education" && <Education />}
          {activeTab === "Project" && <ResumeProjects />}
        </div>
      </div>
    </>
  )
}

export default Resume