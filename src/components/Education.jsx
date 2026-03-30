import React, { useState, useEffect, useRef } from "react";

const Education = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const TimelineCard = ({ title, subtitle, desc, score, isTall, index, side }) => {
    return (
      <div 
        className={`relative pl-12 group ${isTall ? "h-full" : ""}`}
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

        {/* Card - Increased padding and size */}
        <div
          className={`bg-[#f0f2f5] p-10 rounded-xl shadow-md transition-all duration-500 cursor-pointer 
          hover:bg-orange-500 hover:text-white transform hover:-translate-y-2 relative mb-10
          ${isTall ? "h-[calc(100%-40px)] flex flex-col justify-center" : ""}`}
        >
          
          {/* Score - Slightly larger */}
          <span className="absolute top-6 right-6 text-[12px] font-bold bg-white text-[#ff4522] px-4 py-1.5 rounded shadow-sm">
            {score}
          </span>

          {/* Title - Larger text */}
          <h3 className="text-2xl font-bold mb-2 text-[#1e2125] group-hover:text-white">
            {title}
          </h3>

          {/* Subtitle - Larger text */}
          <p className="text-sm font-medium text-gray-500 mb-6 group-hover:text-white/80">
            {subtitle}
          </p>

          <div className="w-full h-[1px] bg-gray-300 mb-6 group-hover:bg-white/20"></div>

          {/* Description - Larger text */}
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
          if (!prev.includes(2)) {
            return [...prev, 2];
          }
          return prev;
        });
      }, 100);
    }
  }, [rightVisible]);

  return (
    <div className="py-5 px-4 md:px-10 overflow-hidden">
        <div className="mb-10 ml-4">
            <h2 className="text-4xl font-bold text-[#1e2125] text-center py-10">Education</h2>
          </div>
      
      <div className=" grid md:grid-cols-2 gap-16 items-stretch">
        
        {/* Schooling - Slide from left */}
        <div 
          ref={leftSectionRef}
          className="flex flex-col transform transition-all duration-800 ease-out"
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateX(0)' : 'translateX(-80px)',
            transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
        

          {/* 10th */}
          <TimelineCard
            index={0}
            side="left"
            title="High School (10th)"
            subtitle="A.H.M Inter College, Ratanpur Kalan ( 2020)"
            score="Passed"
            desc="Completed my High School (10th) from A.H.M Inter College, Ratanpur Kalan during the academic session 2019–2020. Built a strong foundation in core subjects along with discipline, dedication, and effective learning skills that contributed to my academic and personal growth."
          />

          {/* 12th */}
          <TimelineCard
            index={1}
            side="left"
            title="Intermediate (12th)"
            subtitle="Government Inter College, Pakbada, Moradabad (2022)"
            score="Passed"
            desc="Completed my Intermediate (12th) education from Government Inter College, Pakbada, District Moradabad in 2022. Focused on academic growth while strengthening analytical thinking, problem-solving abilities, and subject knowledge, which prepared me for higher education."
          />
        </div>

        {/* Degree - Slide from right */}
        <div 
          ref={rightSectionRef}
          className="flex flex-col h-full transform transition-all duration-800 ease-out"
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateX(0)' : 'translateX(80px)',
            transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
       

          {/* BCA */}
          <TimelineCard
            index={2}
            side="right"
            isTall={true}
            title="BCA (Bachelor of Computer Applications)"
            subtitle="Radha Govind Institute, Moradabad (2023 - 2025)"
            score="Completed"
            desc="Completed Bachelor of Computer Applications (BCA) from Radha Govind Institute, Moradabad (2022–2025). Developed strong expertise in web development, programming, and database management. Built multiple real-world projects using modern technologies, strengthening problem-solving skills and preparing for a professional career in software development."
          />
        </div>

      </div>
    </div>
  );
};

export default Education;