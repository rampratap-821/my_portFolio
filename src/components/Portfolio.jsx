import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    img: "https://images.pexels.com/photos/7514862/pexels-photo-7514862.jpeg",
    category: "PROJECT",
    title: "Cosmetic Website",
    desc: "Built a responsive cosmetic website using HTML, CSS and JavaScript with clean UI and smooth user experience.",
  },
  {
    img: "https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-1-370x230.jpg",
    category: "PROJECT",
    title: " Online Courses",
    desc: "Developed using React.js and Tailwind CSS with fully responsive course listing UI.",
    link: "https://ram-online-education.vercel.app",
  },
  {
    img: "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg",
    category: "UI DESIGN",
    title: "Responsive Web UI",
    desc: "Designed modern and responsive user interfaces using Tailwind CSS focusing on user experience.",
  },
  {
    img: "https://images.pexels.com/photos/16323581/pexels-photo-16323581.jpeg",
    category: "FRONTEND",
    title: "React UI Components",
    desc: "Created reusable and scalable UI components using React.js for faster development.",
  },
  {
    img: "https://images.pexels.com/photos/6322367/pexels-photo-6322367.jpeg",
    category: "WEB DEV",
    title: "Web Development Projects",
    desc: "Built multiple responsive websites with modern technologies focusing on performance.",
  },
  {
    img: "https://images.pexels.com/photos/34803992/pexels-photo-34803992.jpeg",
    category: "TOOLS",
    title: "Git & VS Code Workflow",
    desc: "Experienced in version control using Git and development using VS Code environment.",
  },
];

const Portfolio = () => {
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

    const cards = document.querySelectorAll('.portfolio-card');
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
    <section ref={sectionRef} className="pt-5 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading with slide-up animation */}
        <div
          className="transform transition-all duration-700 ease-out"
          style={{
            opacity: visibleItems.length > 0 ? 1 : 0,
            transform: visibleItems.length > 0 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <p className="text-orange-500 uppercase tracking-widest text-sm pb-6 font-medium">
            Visit My Portfolio and Keep Your Feedback
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 pb-[70px]">
            My Portfolio
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 text-left">
          {projects.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="portfolio-card  border bg-gradient-to-r from-white to-gray-200 rounded-lg p-7 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 transform overflow-hidden"
              style={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) 
                  ? 'translateY(0)' 
                  : 'translateY(50px)',
                transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container with overflow hidden */}
              <div className="overflow-hidden rounded-md mb-4 ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{
                    transition: 'transform 500ms ease-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Category */}
              <p className="text-orange-500 text-xs uppercase mb-1">
                {item.category}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-3">
                {item.desc}
              </p>

              {/* Live Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 text-sm font-medium hover:underline inline-flex items-center gap-1 transition-all duration-300 hover:gap-2"
                >
                  Live Demo →
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;