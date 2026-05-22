// import React, { useState, useEffect, useRef } from "react";
// import { FaBook, FaMusic, FaGlobe } from "react-icons/fa";

// const hobbies = [
//   {
//     icon: <FaBook />,
//     title: "Learning",
//     desc: "I enjoy learning new technologies and improving my skills by building small projects and exploring new ideas regularly.",
//   },
//   {
//     icon: <FaGlobe />,
//     title: "Dance",
//     desc: "I enjoy dancing as it keeps me active and energetic. It also helps me express myself and stay confident.",
//   },
//   {
//     icon: <FaMusic />,
//     title: "Music",
//     desc: "Listening to music helps me stay relaxed and focused. It keeps me motivated while working or learning.",
//   },
// ];

// const Hobbies = () => {
//   const [visibleItems, setVisibleItems] = useState([]);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.getAttribute("data-index"), 10);
//             setVisibleItems((prev) => {
//               if (!prev.includes(index)) {
//                 return [...prev, index];
//               }
//               return prev;
//             });
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const cards = document.querySelectorAll(".hobby-card");
//     cards.forEach((card) => observer.observe(card));

//     return () => {
//       cards.forEach((card) => observer.unobserve(card));
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-10 px-6 overflow-hidden">
//       <div className="">

//         {/* Heading */}
//         <div
//           className="transform transition-all duration-700 ease-out  text-center"
//           style={{
//             opacity: visibleItems.length > 0 ? 1 : 0,
//             transform:
//               visibleItems.length > 0
//                 ? "translateY(0)"
//                 : "translateY(30px)",
//           }}
//         >
//           <p className="text-orange-500 uppercase tracking-widest text-sm pb-5 font-medium">
//             My Interests
//           </p>
//           <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 pb-20">
//             Hobbies & Interests
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
//           {hobbies.map((item, index) => (
//             <div
//               key={index}
//               data-index={index}
//               className="hobby-card group relative p-7 min-h-[280px] rounded-xl overflow-hidden 
//               bg-gradient-to-r from-white to-gray-100 
//               shadow-md hover:shadow-2xl 
//               transition-all duration-500 transform"
//               style={{
//                 opacity: visibleItems.includes(index) ? 1 : 0,
//                 transform: visibleItems.includes(index)
//                   ? "translateY(0)"
//                   : "translateY(50px)",
//                 transition: "all 600ms ease",
//                 transitionDelay: `${index * 120}ms`,
//               }}
//             >

//               {/* Glow */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/20 blur-2xl"></div>

//               {/* Background pattern */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition duration-500"
//                 style={{
//                   backgroundImage: "url('/bg-pattern.png')",
//                 }}
//               ></div>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-90 transition duration-500"></div>

//               {/* Content */}
//               <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-2">

//                 {/* Icon */}
//                 <div className="text-orange-500 text-3xl mb-6 group-hover:text-white transition duration-300">
//                   {item.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-white transition duration-300">
//                   {item.title}
//                 </h3>

//                 {/* Desc */}
//                 <p className="text-gray-600 group-hover:text-white transition duration-300">
//                   {item.desc}
//                 </p>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hobbies;


import React, { useState, useEffect, useRef } from "react";
import { FaBook, FaMusic } from "react-icons/fa";
import { BiBody } from "react-icons/bi";

const hobbies = [
  { icon: <FaBook className="text-[#e34f26]" />, title: "Learning", desc: "I enjoy learning new technologies and improving my skills by building small projects and exploring new ideas regularly." },
  { icon: <BiBody className="text-[#06b6d4]" />, title: "Reading Books", desc: "I enjoy reading books because it helps me learn new things, improve my knowledge, and stay focused. It also inspires creativity and personal growth." },
  { icon: <FaMusic className="text-[#f59e0b]" />, title: "Music", desc: "Listening to music helps me stay relaxed and focused. It keeps me motivated while working or learning." },
];

const Hobbies = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"), 10);
            setVisibleItems((prev) => !prev.includes(index) ? [...prev, index] : prev);
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = document.querySelectorAll(".hobby-card");
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section ref={sectionRef} className="py-10 w-full overflow-hidden bg-[#050c1a] px-10">
      <div>
        <div className="pb-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">
            Hobbies & Interests
          </h2>
        </div>

        {/* 100% Image Matching Grid Layout */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {hobbies.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="hobby-card p-8 min-h-[280px] rounded-2xl flex flex-col justify-center items-center text-center transition-all duration-500 transform"
              style={{
                backgroundColor: "#000000",
                border: "2px solid #a3e635",
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) ? "translateY(0)" : "translateY(50px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Colored Icon - Center */}
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              {/* Title - Bold White directly below Icon */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Description - Center Aligned */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;