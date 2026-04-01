import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiSketch, SiFigma } from "react-icons/si";
import profile from "../assets/image.png"; // Apni photo ka path check kar lena

const ResumeSkills = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [progressBarsVisible, setProgressBarsVisible] = useState([]);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

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
        setProgressBarsVisible(prev => {
          const newVisible = [...prev];
          if (!newVisible.includes(0)) newVisible.push(0);
          if (!newVisible.includes(1)) newVisible.push(1);
          if (!newVisible.includes(2)) newVisible.push(2);
          return newVisible;
        });
      }, 100);
    }
  }, [leftVisible]);

  useEffect(() => {
    if (rightVisible) {
      setTimeout(() => {
        setProgressBarsVisible(prev => {
          const newVisible = [...prev];
          if (!newVisible.includes(3)) newVisible.push(3);
          if (!newVisible.includes(4)) newVisible.push(4);
          if (!newVisible.includes(5)) newVisible.push(5);
          return newVisible;
        });
      }, 100);
    }
  }, [rightVisible]);

  return (
    <div className=" font-sans overflow-hidden px-5">
      
      {/* Heading with fade-in animation */}
      <div
        className="transform transition-all duration-700 ease-out "
        style={{
          opacity: (leftVisible || rightVisible) ? 1 : 0,
          transform: (leftVisible || rightVisible) ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
         <div className="py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-[#1e2125]">Skills</h2>
         
        </div>
      </div>

      {/* --- SKILLS PROGRESS SECTION --- */}
      <section className=" px-6">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Design Skill - Slide from left */}
          <div 
            ref={leftSectionRef}
            className="transform transition-all duration-800 ease-out"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-80px)',
              transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="space-y-8">
              <ProgressBar 
                title="HTML/HTML5" 
                percentage="95%" 
                index={0}
                isVisible={progressBarsVisible.includes(0)}
              />
              <ProgressBar 
                title="Tailwind" 
                percentage="90%" 
                index={1}
                isVisible={progressBarsVisible.includes(1)}
              />
              <ProgressBar 
                title="React.js" 
                percentage="90%" 
                index={2}
                isVisible={progressBarsVisible.includes(2)}
              />
            </div>
          </div>

          {/* Development Skill - Slide from right */}
          <div 
            ref={rightSectionRef}
            className="transform transition-all duration-800 ease-out"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateX(0)' : 'translateX(80px)',
              transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 800ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="space-y-8">
              <ProgressBar 
                title="CSS" 
                percentage="95%" 
                index={3}
                isVisible={progressBarsVisible.includes(3)}
              />
              <ProgressBar 
                title="Javascript" 
                percentage="90%" 
                index={4}
                isVisible={progressBarsVisible.includes(4)}
              />
              <ProgressBar 
                title="Node.js" 
                percentage="65%" 
                index={5}
                isVisible={progressBarsVisible.includes(5)}
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

// Reusable Icon Box
const IconBox = ({ children, color, hoverBg, scaleOnly }) => (
  <div 
    className={`w-14 h-14 bg-white rounded-xl shadow-[5px_5px_15px_#d1d1d1,-5px_-5px_15px_#ffffff] flex items-center justify-center text-xl transition-all duration-300 cursor-pointer
    ${hoverBg ? "hover:bg-[#ff4522] hover:text-white hover:-translate-y-2" : ""}
    ${scaleOnly ? "hover:scale-110" : ""}`}
    style={{ color: color }}
  >
    {children}
  </div>
);

// Reusable Progress Bar with animation
const ProgressBar = ({ title, percentage, index, isVisible }) => {
  const [currentPercentage, setCurrentPercentage] = useState("0%");

  useEffect(() => {
    if (isVisible) {
      // Animate the progress bar when visible
      const timer = setTimeout(() => {
        setCurrentPercentage(percentage);
      }, 100 + (index * 150));
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, index]);

  return (
    <div 
      className="w-full transform transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <p className="text-[12px] font-bold tracking-[1px] text-gray-500 uppercase">{title}</p>
        <p className="text-[12px] text-gray-400 font-bold">{currentPercentage}</p>
      </div>
      <div className="w-full h-[12px] bg-[#dce1e4] rounded-full p-[3px] shadow-inner">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-[#ff4522] to-[#ff8d75] relative shadow-[0_0_10px_rgba(255,69,34,0.3)] transition-all duration-1000 ease-out"
          style={{ 
            width: currentPercentage,
            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <span className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full border-2 border-[#ff4522]"></span>
        </div>
      </div>
    </div>
  );
};

export default ResumeSkills;