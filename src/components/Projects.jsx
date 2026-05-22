// import React, { useState, useEffect, useRef } from "react";

// const ResumeProjects = () => {
//   const [leftVisible, setLeftVisible] = useState(false);
//   const [rightVisible, setRightVisible] = useState(false);
//   const [cardsVisible, setCardsVisible] = useState([]);
//   const leftSectionRef = useRef(null);
//   const rightSectionRef = useRef(null);

//   const TimelineCard = ({ title, subtitle, desc, score, index, side }) => {
//     return (
//       <div 
//         className={`relative pl-12 ${cardsVisible.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 " + (side === 'left' ? "-translate-x-[50px]" : "translate-x-[50px]")}`}
//         style={{
//           transition: `all 600ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`
//         }}
//       >
//         {/* 1. Static Vertical Line: pointer-events-none taaki ispar hover na ho */}
//         <div className="absolute left-[7px] top-0 h-full w-[5px] bg-[#dce1e4] pointer-events-none"></div>

//         {/* 2. MAIN INTERACTION GROUP: Iske andar Dot aur Card dono hain */}
//         <div className="group relative mb-10">

//           {/* DOT & CONNECTOR: Ab ye group ka hissa hai */}
//           <div className="absolute -left-12 top-10 z-30 cursor-pointer">
//             <div className="w-5 h-5 rounded-full border-[3px] border-[#dce1e4] bg-[#f4f4f4] transition-all duration-300 
//               group-hover:bg-[#ff5b20] group-hover:border-[#ff5b20] shadow-sm scale-100 group-hover:scale-110">
//             </div>
//             <div className="absolute left-[15px] top-[7px] w-6 h-[5px] bg-[#dce1e4] transition-colors duration-300 
//               group-hover:bg-[#ff5b20]">
//             </div>
//           </div>

//           {/* THE CARD: group-hover se iska gradient badlega */}
//           <div
//             className="relative p-10 rounded-xl shadow-md transition-all duration-500 transform cursor-pointer
//             bg-gradient-to-r from-white to-gray-100 
//             group-hover:bg-gradient-to-br group-hover:from-[#ff5b20] group-hover:to-[#ff9100] 
//             group-hover:text-white group-hover:-translate-y-2"
//           >
//             <span className="absolute top-2 right-6 text-[12px] font-bold bg-white text-[#ff4522] px-4 py-1.5 rounded shadow-sm">
//               {score}
//             </span>

//             <h3 className="text-2xl font-bold mb-2 transition-colors text-[#1e2125] group-hover:text-white">
//               {title}
//             </h3>

//             <p className="text-sm font-medium mb-6 transition-colors text-gray-500 group-hover:text-white/90">
//               {subtitle}
//             </p>

//             <div className="w-full h-[1px] bg-gray-300 mb-6 transition-colors group-hover:bg-white/30"></div>

//             <p className="text-base leading-relaxed transition-colors text-gray-600 group-hover:text-white font-medium">
//               {desc}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   useEffect(() => {
//     const leftObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => { if (entry.isIntersecting) setLeftVisible(true); });
//       },
//       { threshold: 0.2 }
//     );

//     const rightObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => { if (entry.isIntersecting) setRightVisible(true); });
//       },
//       { threshold: 0.2 }
//     );

//     if (leftSectionRef.current) leftObserver.observe(leftSectionRef.current);
//     if (rightSectionRef.current) rightObserver.observe(rightSectionRef.current);

//     return () => {
//       if (leftSectionRef.current) leftObserver.disconnect();
//       if (rightSectionRef.current) rightObserver.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     if (leftVisible) {
//       setTimeout(() => { setCardsVisible(prev => [...new Set([...prev, 0, 1])]); }, 100);
//     }
//   }, [leftVisible]);

//   useEffect(() => {
//     if (rightVisible) {
//       setTimeout(() => { setCardsVisible(prev => [...new Set([...prev, 2, 3])]); }, 100);
//     }
//   }, [rightVisible]);

//   return (
//     <div className="py-10 px-7 md:px-10 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-10 text-center">
//           <h2 className="text-2xl md:text-4xl font-black text-[#1e2125] py-10">
//             My <span className="text-[#ff4522]">Projects</span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-16 items-stretch">
//           <div ref={leftSectionRef} className="flex flex-col">
//             <TimelineCard index={0} side="left" title="Portfolio Website" subtitle="Personal Project" score="Project" desc="Designed and developed a fully responsive personal portfolio website using React.js and Tailwind CSS. Showcases my skills, projects, and contact information with a modern UI and smooth user experience." />
//             <TimelineCard index={1} side="left" title="Job Portal Website" subtitle="Web Application" score="Project" desc="Developed a job portal platform where users can search and apply for jobs. Implemented features like job listings, user authentication, and application management using modern web technologies." />
//           </div>

//           <div ref={rightSectionRef} className="flex flex-col">
//             <TimelineCard index={2} side="right" title="E-commerce Website" subtitle="Web Application" score="Project" desc="Built a responsive e-commerce website with product listing, add to cart, and checkout functionality. Focused on performance optimization and user-friendly interface for better shopping experience." />
//             <TimelineCard index={3} side="right" title="Real-time Chat Application" subtitle="Web Application" score="Project" desc="Created a real-time chat application enabling instant messaging between users. Implemented real-time communication features using modern technologies, ensuring fast and smooth user interaction." />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeProjects;


import React, { useState, useEffect, useRef } from "react";

const ResumeProjects = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const TimelineCard = ({ title, subtitle, desc, score, index, side,link }) => {
    const isCardVisible = cardsVisible.includes(index);

    return (
      <div
        className={`relative pl-12 transition-all duration-700 ease-out ${isCardVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${side === 'left' ? "-translate-x-[50px]" : "translate-x-[50px]"}`
          }`}
        style={{
          transitionDelay: `${index * 150}ms`
        }}
      >
        {/* Neon Line indicator matching layout */}
        <div className="absolute left-[7px] top-0 h-full w-[3px] bg-[#a3e635]/20 pointer-events-none"></div>

        {/* MAIN INTERACTION GROUP */}
        <div className="group relative mb-10">

          {/* Glowing dot on timeline line */}
          <div className="absolute -left-12 top-10 z-30 cursor-pointer">
            <div className="w-5 h-5 rounded-full border-2 border-[#a3e635]/40 bg-[#000000] transition-all duration-300 
              group-hover:bg-[#a3e635] group-hover:border-[#a3e635] group-hover:shadow-[0_0_12px_#a3e635] scale-100 group-hover:scale-110">
            </div>
            {/* Connector line */}
            <div className="absolute left-[17px] top-[7px] w-6 h-[2px] bg-[#a3e635]/20 transition-colors duration-300 
              group-hover:bg-[#a3e635]">
            </div>
          </div>

          {/* Card Body - Glowing Pure Black Container */}
          <div
            className="relative p-8 rounded-2xl border transition-all duration-500 transform cursor-pointer flex flex-col justify-center"
            style={{
              backgroundColor: "#000000",
              borderColor: "rgba(163, 230, 53, 0.2)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#a3e635";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(163, 230, 53, 0.5)";
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(163, 230, 53, 0.2)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Project Tag */}
            <span className="absolute top-4 right-6 text-[11px] font-bold tracking-wider uppercase bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20 px-3 py-1 rounded-md">
              {score}
            </span>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-[#a3e635] max-w-[70%]">
              {title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm font-medium mb-5 text-gray-400">
              {subtitle}
            </p>

            {/* Subtle Separator */}
            <div className="w-full h-[1px] bg-gray-800 mb-5 transition-colors duration-300 group-hover:bg-[#a3e635]/20"></div>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
              {desc}
            </p>
           
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setLeftVisible(true); });
      },
      { threshold: 0.1 }
    );

    const rightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setRightVisible(true); });
      },
      { threshold: 0.1 }
    );

    if (leftSectionRef.current) leftObserver.observe(leftSectionRef.current);
    if (rightSectionRef.current) rightObserver.observe(rightSectionRef.current);

    return () => {
      if (leftSectionRef.current) leftObserver.disconnect();
      if (rightSectionRef.current) rightObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (leftVisible) {
      setTimeout(() => { setCardsVisible(prev => [...new Set([...prev, 0, 1])]); }, 100);
    }
  }, [leftVisible]);

  useEffect(() => {
    if (rightVisible) {
      setTimeout(() => { setCardsVisible(prev => [...new Set([...prev, 2, 3])]); }, 100);
    }
  }, [rightVisible]);

  return (
    // Replaced white bg and title text with custom brand architecture
    <div className="py-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Hidden internal heading to let tab system work cleaner */}
        <div className="pb-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#a3e635] tracking-widest uppercase">
            Development Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 items-stretch">
          {/* Left Column Projects */}
          <div ref={leftSectionRef} className="flex flex-col">
            <TimelineCard index={0} side="left" title="Portfolio Website" subtitle="Personal Project" score="Project" desc="Designed and developed a fully responsive personal portfolio website using React.js and Tailwind CSS. Showcases my skills, projects, and contact information with a modern UI and smooth user experience." />
            <TimelineCard index={1} side="left" title="Job Portal Website" subtitle="Web Application" score="Project" desc="Developed a job portal platform where users can search and apply for jobs. Implemented features like job listings, user authentication, and application management using modern web technologies." />
          </div>

          {/* Right Column Projects */}
          <div ref={rightSectionRef} className="flex flex-col">
            <TimelineCard
              index={2}
              side="right"
              title="E-commerce Website"
              subtitle="Web Application"
              score="Project"
              desc="Developed a full MERN E-Commerce website using React.js, Node.js, Express.js, and MongoDB with product listing, add to cart, authentication, payment integration, and checkout functionality. Focused on responsive design, performance optimization, and a user-friendly interface to provide a better shopping experience."
              link="https://mern-e-comerce-frontent.vercel.app/"
               />
            <TimelineCard
              index={3}
              side="right"
              title="Online Course Platform"
              subtitle="Web Application"
              score="Project"
              desc="Developed an online course platform with a modern and fully responsive UI for browsing courses and learning resources. Built using React.js and Tailwind CSS to provide a smooth and engaging user experience."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeProjects;