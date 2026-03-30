import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaTachometerAlt,
  FaMobileAlt,
  FaGlobe,
  FaProjectDiagram,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Skilled in HTML, CSS, JavaScript, React.js and Tailwind CSS to build responsive and modern user interfaces.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Performance Optimization",
    desc: "Improving website speed and performance by optimizing code, images, and ensuring fast loading user experience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Creating fully responsive websites that work smoothly on mobile, tablet, and desktop devices.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Project Development",
    desc: "Developed projects like Cosmetic Website and Eduma Online Courses platform with modern UI and functionality.",
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    desc: "Capable of building complete web applications with modern technologies focusing on performance and user experience.",
  },
  {
    icon: <FaLaptopCode />,
    title: "UI & User Experience",
    desc: "Focused on clean UI design and user-friendly experience to improve usability and engagement.",
  },
];

const Features = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'), 10);
            setVisibleItems(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-5 overflow-hidden">
      <div className="">
        
        {/* Heading with slide-up animation */}
        <div
          className="transform transition-all duration-700 ease-out"
          style={{
            opacity: visibleItems.length > 0 ? 1 : 0,
            transform: visibleItems.length > 0 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <p className="text-orange-500 tracking-widest  uppercase text-sm mb-2">
            Feature
          </p>
          <h2 className="text-5xl font-bold text-gray-800 mb-14 ">
            What I Do
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10">
          {features.map((item, index) => (
            
            <div
              key={index}
              data-index={index}
              className="feature-card group relative p-7 min-h-[300px] rounded-xl overflow-hidden 
             bg-gradient-to-r from-white to-gray-100 flex justify-center items-center
                shadow-md hover:shadow-2xl 
                transition-all duration-500 transform"
              style={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) 
                  ? 'translateY(0)' 
                  : 'translateY(50px)',
                transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)`,
                transitionDelay: `${index * 100}ms`
              }}
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/20 blur-2xl"></div>

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition duration-500"
                style={{
                  backgroundImage: "url('/bg-pattern.png')"
                }}
              ></div>

              {/* Orange Overlay */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-90 transition duration-500"></div>

              {/* Content - slides in from bottom on hover */}
              <div className="relative z-10 transform transition-all duration-500 ease-out group-hover:translate-y-[-8px]">
                
                {/* Icon */}
                <div className="text-orange-500 text-3xl mb-6 group-hover:text-white transition duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-white transition duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed group-hover:text-white transition duration-300">
                  {item.desc}
                </p>

              </div>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;