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
    img: "https://images.unsplash.com/photo-1690369519543-c81a2121f740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHVpJTIwZGVzaWdufGVufDB8fDB8fHww",
    category: "UI DESIGN",
    title: "Responsive Web UI",
    desc: "Designed modern and responsive user interfaces using Tailwind CSS focusing on user experience.",
  },
  {
    img: "https://images.unsplash.com/photo-1543331858-d844b6d0234e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI5fHxyZWFjdCUyMHVpJTIwY29tcG9uZW50fGVufDB8fDB8fHww",
    category: "FRONTEND",
    title: "React UI Components",
    desc: "Created reusable and scalable UI components using React.js for faster development.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
    category: "WEB DEV",
    title: "Web Development Projects",
    desc: "Built multiple responsive websites with modern technologies focusing on performance.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww",
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
            const index = parseInt(entry.target.getAttribute("data-index"), 10);
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const cards = document.querySelectorAll(".portfolio-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section ref={sectionRef} className="pb-10 md:px-10 px-5 overflow-hidden">
      <div className="text-center">

        {/* Heading */}
        <div
          className="transform transition-all duration-700 ease-out"
          style={{
            opacity: visibleItems.length > 0 ? 1 : 0,
            transform: visibleItems.length > 0 ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <p className="text-orange-500 uppercase tracking-widest text-base pb-4 font-medium">
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
              className="portfolio-card  bg-gradient-to-tr from-gray-100 to-white rounded-lg p-7 shadow-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 transform overflow-hidden "
              style={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index)
                  ? "translateY(0)"
                  : "translateY(50px)",
                transition:
                  "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 ease-out"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Category */}
              <p className="text-orange-500 text-sm uppercase mb-1 font-bold">
                {item.category}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base mb-3 leading-relaxed">
                {item.desc}
              </p>

              {/* Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 text-base font-medium hover:underline inline-flex items-center gap-1 transition-all duration-300 hover:gap-2"
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