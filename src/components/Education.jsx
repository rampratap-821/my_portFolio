import React, { useState, useEffect, useRef } from "react";

const Education = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const TimelineCard = ({ title, subtitle, desc, score, index, side, isTall }) => {
    return (
      <div 
        // yahan h-full add kiya taaki height parent se inherit ho sake
        className={`relative pl-12 ${isTall ? "h-full" : ""} ${cardsVisible.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 " + (side === 'left' ? "-translate-x-[50px]" : "translate-x-[50px]")}`}
        style={{
          transition: `all 600ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`
        }}
      >
        <div className="absolute left-[7px] top-0 h-full w-[5px] bg-[#dce1e4] pointer-events-none"></div>

        {/* MAIN INTERACTION GROUP: added h-full if isTall */}
        <div className={`group relative ${isTall ? "h-full" : ""}`}>
          
          <div className="absolute -left-12 top-10 z-30 cursor-pointer">
            <div className="w-5 h-5 rounded-full border-[3px] border-[#dce1e4] bg-[#f4f4f4] transition-all duration-300 
              group-hover:bg-[#ff5b20] group-hover:border-[#ff5b20] shadow-sm scale-100 group-hover:scale-110">
            </div>
            <div className="absolute left-[15px] top-[7px] w-6 h-[5px] bg-[#dce1e4] transition-colors duration-300 
              group-hover:bg-[#ff5b20]">
            </div>
          </div>

          <div
            // Yahan mb-10 ko tall cards ke liye remove kiya hai taaki alignment perfect rahe
            className={`relative p-10 rounded-xl shadow-md transition-all duration-500 transform cursor-pointer
            bg-gradient-to-r from-white to-gray-100 
            group-hover:bg-gradient-to-br group-hover:from-[#ff5b20] group-hover:to-[#ff9100] 
            group-hover:text-white group-hover:-translate-y-2
            ${isTall ? "h-full flex flex-col justify-center" : "mb-10"}`}
          >
            <span className="absolute top-2 right-6 text-[12px] font-bold bg-white text-[#ff4522] px-4 py-1.5 rounded shadow-sm">
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
      setTimeout(() => { setCardsVisible(prev => [...new Set([...prev, 2])]); }, 100);
    }
  }, [rightVisible]);

  return (
    <div className="py-20 px-8 md:px-10 bg-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-[#1e2125]">Education</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div ref={leftSectionRef} className="flex flex-col h-full">
            <TimelineCard 
              index={0} 
              side="left" 
              title="High School (10th)" 
              subtitle="A.H.M Inter College, Ratanpur Kalan (2020)" 
              score="Passed" 
              desc="Completed my High School (10th) from A.H.M Inter College, Ratanpur Kalan during the academic session 2020. Built a strong foundation in core subjects along with discipline, dedication, and effective learning skills." 
            />
            <TimelineCard 
              index={1} 
              side="left" 
              title="Intermediate (12th)" 
              subtitle="Government Inter College, Pakbada, Moradabad (2022)" 
              score="Passed" 
              desc="Completed my Intermediate (12th) education from Government Inter College, Pakbada in 2022. Focused on academic growth while strengthening analytical thinking and problem-solving abilities." 
            />
          </div>

          <div ref={rightSectionRef} className="flex flex-col h-full">
            <TimelineCard 
              index={2} 
              side="right" 
              isTall={true} 
              title="BCA (Bachelor of Computer Applications)" 
              subtitle="Radha Govind Institute, Moradabad (2023 - 2025)" 
              score="Completed" 
              desc="Completed Bachelor of Computer Applications (BCA) from Radha Govind Institute (2022–2025). Developed strong expertise in web development, programming, and database management. Built multiple real-world projects using modern technologies, strengthening problem-solving skills and preparing for a professional career in software development." 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;