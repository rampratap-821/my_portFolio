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
        className="relative pl-12 group"
        style={{
          opacity: cardsVisible.includes(index) ? 1 : 0,
          transform: cardsVisible.includes(index) 
            ? 'translateX(0)' 
            : side === 'left' ? 'translateX(-50px)' : 'translateX(50px)',
          transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)`,
          transitionDelay: `${index * 150}ms`
        }}
      >
        
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-0 h-full w-[5px] bg-[#dce1e4]"></div>

        {/* Dot */}
        <div className="absolute left-0 top-10 w-5 h-5 rounded-full border-[3px] border-[#dce1e4] bg-[#f4f4f4] z-10 transition-all duration-300 group-hover:bg-[#ff4522] group-hover:border-[#ff4522]"></div>

        {/* Horizontal Line */}
        <div className="absolute left-[15px] top-[47px] w-6 h-[5px] bg-[#dce1e4] group-hover:bg-[#ff4522] transition-colors duration-300"></div>

        {/* Card - Same size as Education component */}
        <div className="bg-[#f0f2f5] p-10 rounded-xl shadow-md transition-all duration-500 cursor-pointer 
          hover:bg-orange-500 hover:text-white transform hover:-translate-y-2 relative mb-10">
          
          {/* Score - Same size as Education */}
          <span className="absolute top-6 right-6 text-[12px] font-bold bg-white text-[#ff4522] px-4 py-1.5 rounded shadow-sm">
            {score}
          </span>

          {/* Title - Same size as Education */}
          <h3 className="text-2xl font-bold mb-2 text-[#1e2125] group-hover:text-white">
            {title}
          </h3>

          {/* Subtitle - Same size as Education */}
          <p className="text-sm font-medium text-gray-500 mb-6 group-hover:text-white/80">
            {subtitle}
          </p>

          <div className="w-full h-[1px] bg-gray-300 mb-6 group-hover:bg-white/20"></div>

          {/* Description - Same size as Education */}
          <p className="text-base leading-relaxed text-gray-600 group-hover:text-white">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLeftVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const rightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRightVisible(true);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (leftSectionRef.current) {
      leftObserver.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      rightObserver.observe(rightSectionRef.current);
    }

    return () => {
      if (leftSectionRef.current) {
        leftObserver.unobserve(leftSectionRef.current);
      }
      if (rightSectionRef.current) {
        rightObserver.unobserve(rightSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (leftVisible) {
      setTimeout(() => {
        setCardsVisible(prev => {
          const newVisible = [...prev];
          if (!newVisible.includes(0)) newVisible.push(0);
          if (!newVisible.includes(1)) newVisible.push(1);
          return newVisible;
        });
      }, 100);
    }
  }, [leftVisible]);

  useEffect(() => {
    if (rightVisible) {
      setTimeout(() => {
        setCardsVisible(prev => {
          const newVisible = [...prev];
          if (!newVisible.includes(2)) newVisible.push(2);
          if (!newVisible.includes(3)) newVisible.push(3);
          return newVisible;
        });
      }, 100);
    }
  }, [rightVisible]);

  return (
    <div className="py-5 px-4 md:px-10 overflow-hidden">
      
      {/* Heading - Same style as Education */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e2125] text-center py-10">Projects</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-stretch">
        
        {/* Left Side - Slide from left */}
        <div 
          ref={leftSectionRef}
          className="flex flex-col transform transition-all duration-800 ease-out"
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateX(0)' : 'translateX(-80px)',
            transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Portfolio */}
          <TimelineCard
            index={0}
            side="left"
            title="Portfolio Website"
            subtitle="Personal Project"
            score="Project"
            desc="Designed and developed a fully responsive personal portfolio website using React.js and Tailwind CSS. Showcases my skills, projects, and contact information with a modern UI and smooth user experience."
          />

          {/* Job Portal */}
          <TimelineCard
            index={1}
            side="left"
            title="Job Portal Website"
            subtitle="Web Application"
            score="Project"
            desc="Developed a job portal platform where users can search and apply for jobs. Implemented features like job listings, user authentication, and application management using modern web technologies."
          />
        </div>

        {/* Right Side - Slide from right */}
        <div 
          ref={rightSectionRef}
          className="flex flex-col transform transition-all duration-800 ease-out"
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateX(0)' : 'translateX(80px)',
            transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* E-commerce */}
          <TimelineCard
            index={2}
            side="right"
            title="E-commerce Website"
            subtitle="Web Application"
            score="Project"
            desc="Built a responsive e-commerce website with product listing, add to cart, and checkout functionality. Focused on performance optimization and user-friendly interface for better shopping experience."
          />

          {/* Real-time Chat */}
          <TimelineCard
            index={3}
            side="right"
            title="Real-time Chat Application"
            subtitle="Web Application"
            score="Project"
            desc="Created a real-time chat application enabling instant messaging between users. Implemented real-time communication features using modern technologies, ensuring fast and smooth user interaction."
          />
        </div>

      </div>
    </div>
  );
};

export default ResumeProjects;