// import React, { useState, useEffect, useRef } from "react";
// import { FaUser, FaPhone, FaEnvelope, FaTag, FaComment } from "react-icons/fa";

// const Contact = () => {
//   const [sectionVisible, setSectionVisible] = useState(false);
//   const [leftVisible, setLeftVisible] = useState(false);
//   const [rightVisible, setRightVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const leftCardRef = useRef(null);
//   const rightFormRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setSectionVisible(true);

//             // Trigger individual card animations
//             if (leftCardRef.current) {
//               setLeftVisible(true);
//             }
//             if (rightFormRef.current) {
//               setRightVisible(true);
//             }
//           }
//         });
//       },
//       { threshold: 0.2, rootMargin: '50px' }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-24 px-6 overflow-hidden">
//       <div className="w-full max-w-[1300px] mx-auto">

//         {/* Heading */}
//         <div
//           className="transform transition-all duration-700 ease-out mb-16"
//           style={{
//             opacity: sectionVisible ? 1 : 0,
//             transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)',
//           }}
//         >
//           <p className="text-orange-500 text-xs tracking-[4px] text-center uppercase mb-2">
//             Contact
//           </p>
//           <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold text-center text-gray-800">
//             Contact With Me
//           </h2>
//         </div>

//        <div className="flex flex-col md:flex-row gap-6 md:gap-10">

//           {/* LEFT CARD */}
//           <div
//             ref={leftCardRef}
//             className="transform transition-all duration-800 ease-out w-full md:w-[70%]"
//             style={{
//               opacity: leftVisible ? 1 : 0,
//               transform: leftVisible ? 'translateX(0)' : 'translateX(-80px)',
//             }}
//           >
//             <div className="bg-gradient-to-r from-gray-200 to-gray-50 rounded-xl shadow-lg p-8 group hover:shadow-2xl transition duration-500 h-full">

//               {/* Image */}
//               <div className="overflow-hidden rounded-xl mb-6">
//                 <img
//                   src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
//                   alt="contact"
//                   className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-1">
//                 Rampratap
//               </h3>
//               <p className="text-md text-orange-500 mb-4">
//                 Software Engineer
//               </p>

//               <p className="text-md text-gray-600  leading-relaxed">
//                 I am open to work. Connect with me via phone or email.
//               </p>

//               <div className=" text-md text-gray-700">
//                 <p>
//                   <span className="font-semibold">Phone:</span>{" "}
//                   <span className="hover:text-orange-500 cursor-pointer transition">
//                     +91 9520791411
//                   </span>
//                 </p>
//                 <p>
//                   <span className="font-semibold">Email:</span>{" "}
//                   <span className="hover:text-orange-500 cursor-pointer transition">
//                     ramratap8218253@gmail.com
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div
//             ref={rightFormRef}
//             className="w-[100%] transform transition-all duration-800 ease-out"
//             style={{
//               opacity: rightVisible ? 1 : 0,
//               transform: rightVisible ? 'translateX(0)' : 'translateX(80px)',
//             }}
//           >
//             <div className="bg-gradient-to-r from-gray-200 to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-500 h-full">

//               <form className="space-y-7">

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    
//                       <span className="text-gray-700 text-[15px]">Your Name</span>
//                     </label>
//                     <input
//                       type="text"
                    
//                       className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
//                     />
//                   </div>
//                   <div>
//                     <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  
//                       <span className="text-gray-700 text-[15px]">Phone Number</span>
//                     </label>
//                     <input
//                       type="text"
                    
//                       className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  
//                     <span className="text-gray-700 text-[15px]">Email</span>
//                   </label>
//                   <input
//                     type="email"
                 
//                     className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
               
//                     <span className="text-gray-700 text-[15px]">Subject</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
               
//                     <span className="text-gray-700 text-[15px]">Your Message</span>
//                   </label>
//                   <textarea
//                     rows="6"
                  
//                     className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
//                   ></textarea>
//                 </div>

//                 <button
//                   className="w-full 
//                             bg-gradient-to-r from-gray-300 to-gray-50 
//                             hover:from-orange-400 hover:to-orange-500
//                             hover:-translate-y-1
//                             overflow-hidden group py-4 rounded-md font-medium text-sm 
//                             flex items-center justify-center gap-2 
//                             transition-all duration-300 ease-out
//                             border"


//                   type="submit"

//                 >


//                   <span className="relative z-10 group-hover:text-white transition">
//                     SEND MESSAGE →
//                   </span>
//                 </button>

//               </form>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaPhone, FaEnvelope, FaTag, FaComment } from "react-icons/fa";

const Contact = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightFormRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);

            if (leftCardRef.current) {
              setLeftVisible(true);
            }
            if (rightFormRef.current) {
              setRightVisible(true);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    // मुख्य बैकग्राउंड को डार्क थीम दिया
    <section ref={sectionRef} className="py-24 px-6 overflow-hidden bg-[#070b14] border-b border-gray-900 text-white font-sans">
      <div className="w-full max-w-[1300px] mx-auto">

        {/* Heading */}
        <div
          className="transform transition-all duration-700 ease-out mb-16"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p className="text-[#f05423] text-xs tracking-[4px] text-center uppercase mb-2 font-semibold">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-100 tracking-wide">
            Contact With Me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">

          {/* LEFT CARD */}
          <div
            ref={leftCardRef}
            className="transform transition-all duration-800 ease-out w-full md:w-[40%]" // विड्थ को थोड़ा बैलेंस किया ताकि लेआउट सही दिखे
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-80px)',
            }}
          >
            {/* नियॉन ग्रीन बॉर्डर और ड्रॉप ग्लो शैडो के साथ डार्क कार्ड */}
            <div className="bg-[#0a0e17] border-2 border-[#82db26] shadow-[0_0_20px_rgba(130,219,38,0.25)] rounded-2xl p-8 group transition-all duration-500 hover:-translate-y-2 h-full">

              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
                  alt="contact"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-1">
                Rampratap
              </h3>
              <p className="text-md text-[#f05423] font-medium mb-4">
                Software Engineer
              </p>

              <p className="text-md text-gray-400 leading-relaxed mb-6">
                I am open to work. Connect with me via phone or email.
              </p>

              <div className="text-md text-gray-300 space-y-2">
                <p>
                  <span className="font-semibold text-gray-400">Phone:</span>{" "}
                  <span className="hover:text-[#f05423] cursor-pointer transition">
                    +91 9520791411
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Email:</span>{" "}
                  <span className="hover:text-[#f05423] cursor-pointer transition break-all">
                    ramratap8218253@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            ref={rightFormRef}
            className="w-full md:w-[60%] transform transition-all duration-800 ease-out"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateX(0)' : 'translateX(80px)',
            }}
          >
            {/* फॉर्म कंटेनर को भी सेम नियॉन थीम दी */}
            <div className="bg-[#0a0e17] border-2 border-[#82db26] shadow-[0_0_20px_rgba(130,219,38,0.25)] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 h-full">

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      // इनपुट फील्ड्स को डार्क बैकग्राउंड और फोकस होने पर ऑरेंज ग्लो इफेक्ट दिया
                      className="w-full p-4 bg-[#101626] rounded-md border border-gray-800 text-gray-200 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-[#101626] rounded-md border border-gray-800 text-gray-200 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 bg-[#101626] rounded-md border border-gray-800 text-gray-200 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 bg-[#101626] rounded-md border border-gray-800 text-gray-200 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full p-4 bg-[#101626] rounded-md border border-gray-800 text-gray-200 focus:outline-none focus:border-[#f05423] focus:ring-1 focus:ring-[#f05423] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* प्रीमियम डार्क बटन जो होवर करने पर आपकी पूरी थीम के साथ वाइब्रेंट ऑरेंज में बदल जाता है */}
                <button
                  className="w-full bg-[#101626] border border-gray-800 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#f05423] hover:to-orange-600 hover:border-transparent hover:shadow-[0_5px_15px_rgba(240,84,35,0.4)] py-4 rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ease-out transform hover:-translate-y-0.5"
                  type="submit"
                >
                  <span>SEND MESSAGE →</span>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;