import React, { useState, useEffect, useRef } from "react";

const ResumeProjects = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const TimelineCard = ({ title, subtitle, desc, score, index, side }) => {
    return (
      <div 
        className={`relative pl-12 ${cardsVisible.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 " + (side === 'left' ? "-translate-x-[50px]" : "translate-x-[50px]")}`}
        style={{
          transition: `all 600ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`
        }}
      >
        {/* 1. Static Vertical Line: pointer-events-none taaki ispar hover na ho */}
        <div className="absolute left-[7px] top-0 h-full w-[5px] bg-[#dce1e4] pointer-events-none"></div>

        {/* 2. MAIN INTERACTION GROUP: Iske andar Dot aur Card dono hain */}
        <div className="group relative mb-10">
          
          {/* DOT & CONNECTOR: Ab ye group ka hissa hai */}
          <div className="absolute -left-12 top-10 z-30 cursor-pointer">
            <div className="w-5 h-5 rounded-full border-[3px] border-[#dce1e4] bg-[#f4f4f4] transition-all duration-300 
              group-hover:bg-[#ff5b20] group-hover:border-[#ff5b20] shadow-sm scale-100 group-hover:scale-110">
            </div>
            <div className="absolute left-[15px] top-[7px] w-6 h-[5px] bg-[#dce1e4] transition-colors duration-300 
              group-hover:bg-[#ff5b20]">
            </div>
          </div>

          {/* THE CARD: group-hover se iska gradient badlega */}
          <div
            className="relative p-10 rounded-xl shadow-md transition-all duration-500 transform cursor-pointer
            bg-gradient-to-r from-white to-gray-100 
            group-hover:bg-gradient-to-br group-hover:from-[#ff5b20] group-hover:to-[#ff9100] 
            group-hover:text-white group-hover:-translate-y-2"
          >
            <span className="absolute top-6 right-6 text-[12px] font-bold bg-white text-[#ff4522] px-4 py-1.5 rounded shadow-sm">
              {score}
            </span>

            <h3 className="text-2xl font-bold mb-2 transition-colors text-[#1e2125] group-hover:text-white">
              {title}
            </h3>

            <p className="text-sm font-medium mb-6 transition-colors text-gray-500 group-hover:text-white/90">
              {subtitle}
            </p>

            <div className="w-full h-[1px] bg-gray-300 mb-6 transition-colors group-hover:bg-white/30"></div>

            <p className="text-base leading-relaxed transition-colors text-gray-600 group-hover:text-white font-medium">
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
      { threshold: 0.2 }
    );

    const rightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setRightVisible(true); });
      },
      { threshold: 0.2 }
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
    <div className="py-10 px-4 md:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-[#1e2125] py-10">
            My <span className="text-[#ff4522]">Projects</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          <div ref={leftSectionRef} className="flex flex-col">
            <TimelineCard index={0} side="left" title="Portfolio Website" subtitle="Personal Project" score="Project" desc="Designed and developed a fully responsive personal portfolio website using React.js and Tailwind CSS. Showcases my skills, projects, and contact information with a modern UI and smooth user experience." />
            <TimelineCard index={1} side="left" title="Job Portal Website" subtitle="Web Application" score="Project" desc="Developed a job portal platform where users can search and apply for jobs. Implemented features like job listings, user authentication, and application management using modern web technologies." />
          </div>

          <div ref={rightSectionRef} className="flex flex-col">
            <TimelineCard index={2} side="right" title="E-commerce Website" subtitle="Web Application" score="Project" desc="Built a responsive e-commerce website with product listing, add to cart, and checkout functionality. Focused on performance optimization and user-friendly interface for better shopping experience." />
            <TimelineCard index={3} side="right" title="Real-time Chat Application" subtitle="Web Application" score="Project" desc="Created a real-time chat application enabling instant messaging between users. Implemented real-time communication features using modern technologies, ensuring fast and smooth user interaction." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeProjects;