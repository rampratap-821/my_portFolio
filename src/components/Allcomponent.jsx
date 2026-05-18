// import Navbar from "../components/Navbar"
// import Hero from "../components/Hero";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import Features from "../components/Features";
// import Portfolio from "../components/Portfolio";
// import Resume from "../components/Resume";
// import Hobbies from "../components/Hobbies";
// import Blog from "../components/Blog";
// import React, { useState, useRef, useEffect } from "react";
// import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import pdf from "../../public/Rampratap_Resume.pdf"

// const AllComponent = () => {
//   const [open, setOpen] = useState(false);
  
//   const heroRef = useRef(null);
//   const featuresRef = useRef(null);
//   const portfolioRef = useRef(null);
//   const resumeRef = useRef(null);
//   const hobbiesRef = useRef(null);
//   const blogRef = useRef(null);
//   const contactRef = useRef(null);

//   const scrollToSection = (ref) => {
//     if (ref && ref.current) {
//       const offset = 80; 
//       const elementPosition = ref.current.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: "smooth" });
//       setOpen(false);
//     }
//   };

//   const [footerVisible, setFooterVisible] = useState(false);
//   const footerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setFooterVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '50px' }
//     );
//     if (footerRef.current) { observer.observe(footerRef.current); }
//     return () => { if (footerRef.current) { observer.unobserve(footerRef.current); } };
//   }, []);

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = pdf;
//     link.download = "Rampratap_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <>
//    <nav className="w-full bg-white text-black shadow-md fixed top-0 left-0 z-[100] h-20 flex items-center">
//   <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
    
//     {/* LOGO */}
//     <div
//       className="flex items-center gap-2 cursor-pointer flex-shrink-0"
//       onClick={() => scrollToSection(heroRef)}
//     >
//       <img
//         src="https://scontent.fdel27-9.fna.fbcdn.net/v/t39.30808-6/467468453_122127745556427436_9180433924243760972_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_ohc=4-LWk5UmhE0Q7kNvwEzY25D&_nc_oc=AdqDXlugz_X5_dOmz0RPJFryvMlj5D7l-8xDg_dYGjx9162L1BXUB8Am7hHhx45D78Gw6zlo0YhDVpmqZ0-zP5jQ&_nc_zt=23&_nc_ht=scontent.fdel27-9.fna&_nc_gid=26L1pxbq7xbchRK3QHXA1w&_nc_ss=7a3a8&oh=00_Af2GIqHk-_zRTvUcRbJ8K-G1nnhHOFQDHAE80H-wGvsjWg&oe=69EB41FB"
//         alt="logo"
//         className="w-8 h-8 rounded-full object-cover"
//       />
//       <h1 className="font-semibold text-lg text-black">
//         RamPortfolio<span className="text-gray-600">.info</span>
//       </h1>
//     </div>

//     {/* DESKTOP MENU */}
//     <ul className="hidden lg:flex items-center gap-6 text-sm font-bold">
//       <li onClick={() => scrollToSection(heroRef)} className="cursor-pointer hover:text-orange-500">HOME</li>
//       <li onClick={() => scrollToSection(featuresRef)} className="cursor-pointer hover:text-orange-500 uppercase">FEATURES</li>
//       <li onClick={() => scrollToSection(portfolioRef)} className="cursor-pointer hover:text-orange-500 uppercase">PORTFOLIO</li>
//       <li onClick={() => scrollToSection(resumeRef)} className="cursor-pointer hover:text-orange-500 uppercase">RESUME</li>
//       <li onClick={() => scrollToSection(hobbiesRef)} className="cursor-pointer hover:text-orange-500 uppercase">HOBBIES</li>
//       <li onClick={() => scrollToSection(blogRef)} className="cursor-pointer hover:text-orange-500 uppercase">BLOG</li>
//       <li onClick={() => scrollToSection(contactRef)} className="cursor-pointer hover:text-orange-500 uppercase">CONTACT</li>
//     </ul>

//     {/* RIGHT SIDE */}
//     <div className="flex items-center gap-4">
//       <button
//         onClick={handleDownload}
//         className="hidden lg:block bg-orange-500 text-white px-5 py-2.5 rounded-md text-xs font-bold uppercase hover:bg-orange-600 transition shadow-md"
//       >
//         Download CV
//       </button>

//       {/* HAMBURGER */}
//       <div
//         className="lg:hidden text-2xl cursor-pointer text-black"
//         onClick={() => setOpen(true)}
//       >
//         <FaBars />
//       </div>
//     </div>
//   </div>

//   {/* SIDEBAR */}
//   <div className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-[110] lg:hidden`}>
    
//     <div className="flex justify-between items-center p-6 border-b">
//       <div
//         className="flex items-center gap-2 cursor-pointer"
//         onClick={() => scrollToSection(heroRef)}
//       >
//         <img
//           src="https://scontent.fdel27-9.fna.fbcdn.net/v/t39.30808-6/467468453_122127745556427436_9180433924243760972_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_ohc=4-LWk5UmhE0Q7kNvwEzY25D&_nc_oc=AdqDXlugz_X5_dOmz0RPJFryvMlj5D7l-8xDg_dYGjx9162L1BXUB8Am7hHhx45D78Gw6zlo0YhDVpmqZ0-zP5jQ&_nc_zt=23&_nc_ht=scontent.fdel27-9.fna&_nc_gid=26L1pxbq7xbchRK3QHXA1w&_nc_ss=7a3a8&oh=00_Af2GIqHk-_zRTvUcRbJ8K-G1nnhHOFQDHAE80H-wGvsjWg&oe=69EB41FB"
//           alt="logo"
//           className="w-8 h-8 rounded-full object-cover"
//         />
//         <h1 className="font-semibold text-lg text-black">
//           RamPortfolio<span className="text-gray-500">.info</span>
//         </h1>
//       </div>

//       <FaTimes className="text-2xl cursor-pointer text-black" onClick={() => setOpen(false)} />
//     </div>

//     <ul className="flex flex-col gap-6 p-8 text-sm font-bold text-black">
//       <li onClick={() => scrollToSection(heroRef)} className="hover:text-orange-500 cursor-pointer uppercase">HOME</li>
//       <li onClick={() => scrollToSection(featuresRef)} className="hover:text-orange-500 cursor-pointer uppercase">FEATURES</li>
//       <li onClick={() => scrollToSection(portfolioRef)} className="hover:text-orange-500 cursor-pointer uppercase">PORTFOLIO</li>
//       <li onClick={() => scrollToSection(resumeRef)} className="hover:text-orange-500 cursor-pointer uppercase">RESUME</li>
//       <li onClick={() => scrollToSection(hobbiesRef)} className="hover:text-orange-500 cursor-pointer uppercase">HOBBIES</li>
//       <li onClick={() => scrollToSection(blogRef)} className="hover:text-orange-500 cursor-pointer uppercase">BLOG</li>
//       <li onClick={() => scrollToSection(contactRef)} className="hover:text-orange-500 cursor-pointer uppercase">CONTACT</li>
//     </ul>

//     <div className="px-8 mt-4">
//       <button
//         onClick={handleDownload}
//         className="w-full bg-orange-500 text-white py-3 rounded-md text-xs font-bold uppercase shadow-lg"
//       >
//         Download CV
//       </button>
//     </div>
//   </div>

//   {/* OVERLAY */}
//   {open && (
//     <div
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[105] lg:hidden"
//       onClick={() => setOpen(false)}
//     ></div>
//   )}
// </nav>

//       <main className="pt-20">
//         <div ref={heroRef}><Hero /></div>
//         <div ref={featuresRef}><Features /></div>
//         <div ref={portfolioRef}><Portfolio /></div>
//         <div ref={resumeRef}><Resume /></div>
//         <div ref={hobbiesRef}><Hobbies /></div>
//         <div ref={blogRef}><Blog /></div>
//         <div ref={contactRef}><Contact /></div>
//       </main>

//       {/* --- FOOTER (UNCHANGED) --- */}
//       <footer ref={footerRef} className="pt-16 pb-6 px-6 border overflow-hidden">
//   <div className="max-w-7xl mx-auto">
//     <div className="grid md:grid-cols-4 gap-12 mb-12">

//       <div
//         className="transform transition-all duration-700 ease-out"
//         style={{
//           opacity: footerVisible ? 1 : 0,
//           transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
//           transitionDelay: '0ms'
//         }}
//       >
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">About Me</h3>
//         <p className="text-base text-gray-500 leading-relaxed">
//           Professional developer specializing in creating exceptional digital
//           experiences. Available for freelance opportunities.
//         </p>
//       </div>

//       <div
//         className="transform transition-all duration-700 ease-out"
//         style={{
//           opacity: footerVisible ? 1 : 0,
//           transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
//           transitionDelay: '100ms'
//         }}
//       >
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
//         <ul className="space-y-2 text-base text-gray-500">
//           <li className="hover:text-orange-500 cursor-pointer transition" onClick={() => scrollToSection(portfolioRef)}>Portfolio</li>
//           <li className="hover:text-orange-500 cursor-pointer transition" onClick={() => scrollToSection(resumeRef)}>Resume</li>
//           <li className="hover:text-orange-500 cursor-pointer transition" onClick={() => scrollToSection(featuresRef)}>Features</li>
//           <li className="hover:text-orange-500 cursor-pointer transition" onClick={() => scrollToSection(contactRef)}>Contact</li>
//         </ul>
//       </div>

//       <div
//         className="transform transition-all duration-700 ease-out"
//         style={{
//           opacity: footerVisible ? 1 : 0,
//           transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
//           transitionDelay: '200ms'
//         }}
//       >
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h3>
//         <p className="text-base text-gray-500 mb-2">+91 9520791411</p>
//         <p className="text-base text-gray-500 mb-2">rampratap8218253@gmail.com</p>
//         <p className="text-base text-gray-500 leading-relaxed">
//           Pakbada Dehli Road<br />Moradabad
//         </p>
//       </div>

//       <div
//         className="transform transition-all duration-700 ease-out"
//         style={{
//           opacity: footerVisible ? 1 : 0,
//           transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
//           transitionDelay: '300ms'
//         }}
//       >
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">Newsletter</h3>
//         <input
//           type="email"
//           placeholder="Your email"
//           className="w-full p-3 text-base rounded-md focus:outline-none mb-3 bg-gray-50"
//         />
//         <button className="w-full bg-gray-100 text-orange-500 py-3 rounded-md text-base font-medium shadow-sm hover:shadow-md transition hover:bg-orange-500 hover:text-white">
//           Subscribe
//         </button>
//       </div>
//     </div>

//     <div
//       className="transform transition-all duration-700 ease-out"
//       style={{
//         opacity: footerVisible ? 1 : 0,
//         transform: footerVisible ? 'translateY(0)' : 'translateY(30px)',
//         transitionDelay: '400ms'
//       }}
//     >
//       <div className="border-t border-gray-300 mb-6"></div>
//     </div>

//     <div
//       className="flex flex-col md:flex-row justify-between items-center transform transition-all duration-700 ease-out"
//       style={{
//         opacity: footerVisible ? 1 : 0,
//         transform: footerVisible ? 'translateY(0)' : 'translateY(30px)',
//         transitionDelay: '500ms'
//       }}
//     >
//       <p className="text-base text-gray-500 mb-4 md:mb-0">
//         © 2026 All rights reserved.
//       </p>

//       <div className="flex gap-4">
//         <div onClick={() => window.open("https://www.facebook.com/ram.pratap.495594", "_blank")} className="bg-gray-300 text-black p-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white group cursor-pointer transition">
//           <FaFacebookF size={16} className="text-gray-600 group-hover:text-white transition" />
//         </div>
//         <div onClick={() => window.open("https://www.instagram.com/ramp.ratap8218/", "_blank")} className="bg-gray-300 p-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white group cursor-pointer transition">
//           <FaInstagram size={16} className="text-gray-600 group-hover:text-white transition" />
//         </div>
//         <div onClick={() => window.open("https://www.linkedin.com/in/ram-pratap-477346320/", "_blank")} className="bg-gray-300  text-black p-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white group cursor-pointer transition">
//           <FaLinkedinIn size={16} className="text-gray-600 group-hover:text-white transition" />
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
//     </>
//   );
// }

// export default AllComponent;



import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Hobbies from "../components/Hobbies";
import Blog from "../components/Blog";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import pdf from "../../public/Rampratap_Resume.pdf"

const AllComponent = () => {
  const [open, setOpen] = useState(false);
  
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const hobbiesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const offset = 80; 
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setOpen(false);
    }
  };

  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFooterVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (footerRef.current) { observer.observe(footerRef.current); }
    return () => { if (footerRef.current) { observer.unobserve(footerRef.current); } };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Rampratap_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* UPDATE: Image Ke Jaisa Dark Navy Blue Navbar */}
      <nav className="w-full bg-[#050c1a] text-[#fbe3b5] shadow-lg fixed top-0 left-0 z-[100] h-20 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
          
          {/* LOGO SECTION */}
          <div
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection(heroRef)}
          >
            <img
              src="https://scontent.fdel65-3.fna.fbcdn.net/v/t39.30808-6/467468453_122127745556427436_9180433924243760972_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=NpdqKw7_mKMQ7kNvwFBIoNQ&_nc_oc=AdqeS2mkApbkt2IGkYNLWBfwoh6YfbVOruG5CyXKxl4_Q-WGnls9_IZP6OVHwaSIWI7UFG5saH31Ie4lpnVlmvs8&_nc_zt=23&_nc_ht=scontent.fdel65-3.fna&_nc_gid=JhgaHdOW2V846kD_ge6GTA&_nc_ss=7b2a8&oh=00_Af7-uCLCPcFvnQNN8pe3Ob-4kq4DQwFZnzGKPsikv2MUPA&oe=6A102BFB"
              alt="logo"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-orange-500/30"
            />
            <h1 className="font-bold text-xl text-white tracking-wide">
              Portfolio<span className="text-orange-500">.info</span>
            </h1>
          </div>

          {/* DESKTOP MENU (Image Match Text Color) */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider">
            <li onClick={() => scrollToSection(heroRef)} className="cursor-pointer text-[#fbe3b5] hover:text-orange-400 transition-colors duration-200">Home</li>
            <li onClick={() => scrollToSection(featuresRef)} className="cursor-pointer text-[#fbe3b5] hover:text-orange-400 transition-colors duration-200">Experience</li>
            <li onClick={() => scrollToSection(portfolioRef)} className="cursor-pointer text-[#fbe3b5] hover:text-orange-400 transition-colors duration-200">Skills</li>
            <li onClick={() => scrollToSection(resumeRef)} className="cursor-pointer text-[#fbe3b5] hover:text-orange-400 transition-colors duration-200">Projects</li>
            <li onClick={() => scrollToSection(contactRef)} className="cursor-pointer text-[#fbe3b5] hover:text-orange-400 transition-colors duration-200">Contact</li>
          </ul>

          {/* RIGHT SIDE BUTTON & HAMBURGER */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleDownload}
              className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-xs font-bold uppercase transition duration-300 shadow-md transform hover:-translate-y-0.5"
            >
              Download CV
            </button>

            {/* HAMBURGER FOR MOBILE */}
            <div
              className="lg:hidden text-2xl cursor-pointer text-[#fbe3b5] hover:text-orange-400 transition"
              onClick={() => setOpen(true)}
            >
              <FaBars />
            </div>
          </div>
        </div>

        {/* MOBILE SIDEBAR (Matching Theme) */}
        <div className={`fixed top-0 right-0 h-full w-[280px] bg-[#0a192f] shadow-2xl transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-[110] lg:hidden border-l border-gray-800`}>
          
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <div className="flex items-center gap-2" onClick={() => scrollToSection(heroRef)}>
              <img
                src="https://scontent.fdel65-3.fna.fbcdn.net/v/t39.30808-6/467468453_122127745556427436_9180433924243760972_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=NpdqKw7_mKMQ7kNvwFBIoNQ&_nc_oc=AdqeS2mkApbkt2IGkYNLWBfwoh6YfbVOruG5CyXKxl4_Q-WGnls9_IZP6OVHwaSIWI7UFG5saH31Ie4lpnVlmvs8&_nc_zt=23&_nc_ht=scontent.fdel65-3.fna&_nc_gid=JhgaHdOW2V846kD_ge6GTA&_nc_ss=7b2a8&oh=00_Af7-uCLCPcFvnQNN8pe3Ob-4kq4DQwFZnzGKPsikv2MUPA&oe=6A102BFB"
                alt="logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <h1 className="font-semibold text-lg text-white">
                Portfolio<span className="text-orange-500">.info</span>
              </h1>
            </div>
            <FaTimes className="text-2xl cursor-pointer text-[#fbe3b5] hover:text-orange-400" onClick={() => setOpen(false)} />
          </div>

          <ul className="flex flex-col gap-6 p-8 text-sm font-semibold text-[#fbe3b5]">
            <li onClick={() => scrollToSection(heroRef)} className="hover:text-orange-400 cursor-pointer">Home</li>
            <li onClick={() => scrollToSection(featuresRef)} className="hover:text-orange-400 cursor-pointer">Experience</li>
            <li onClick={() => scrollToSection(portfolioRef)} className="hover:text-orange-400 cursor-pointer">Skills</li>
            <li onClick={() => scrollToSection(resumeRef)} className="hover:text-orange-400 cursor-pointer">Projects</li>
            <li onClick={() => scrollToSection(contactRef)} className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>

          <div className="px-8 mt-4">
            <button
              onClick={handleDownload}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md text-xs font-bold uppercase transition shadow-lg"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* OVERLAY */}
        {open && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] lg:hidden"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="pt-20">
        <div ref={heroRef}><Hero /></div>
        <div ref={featuresRef}><Features /></div>
        <div ref={portfolioRef}><Portfolio /></div>
        <div ref={resumeRef}><Resume /></div>
        <div ref={hobbiesRef}><Hobbies /></div>
        <div ref={blogRef}><Blog /></div>
        <div ref={contactRef}><Contact /></div>
      </main>

      {/* --- FOOTER (UNCHANGED) --- */}
    <footer ref={footerRef} className="pt-16 pb-6 px-6 bg-[#070b14] border-t border-gray-900 overflow-hidden text-white font-sans">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        
        {/* About Me */}
        <div
          className="transform transition-all duration-700 ease-out"
          style={{
            opacity: footerVisible ? 1 : 0,
            transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
            transitionDelay: '0ms'
          }}
        >
          {/* हेडिंग को ग्रीन कलर दिया */}
          <h3 className="text-xl font-bold text-[#82db26] mb-4 tracking-wide">About Me</h3>
          <p className="text-base text-gray-400 leading-relaxed">
            Professional developer specializing in creating exceptional digital
            experiences. Available for freelance opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div
          className="transform transition-all duration-700 ease-out"
          style={{
            opacity: footerVisible ? 1 : 0,
            transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
            transitionDelay: '100ms'
          }}
        >
          {/* हेडिंग को ग्रीन कलर दिया */}
          <h3 className="text-xl font-bold text-[#82db26] mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-base text-gray-400">
            <li className="hover:text-[#82db26] cursor-pointer transition-colors duration-300" onClick={() => scrollToSection(portfolioRef)}>Portfolio</li>
            <li className="hover:text-[#82db26] cursor-pointer transition-colors duration-300" onClick={() => scrollToSection(resumeRef)}>Resume</li>
            <li className="hover:text-[#82db26] cursor-pointer transition-colors duration-300" onClick={() => scrollToSection(featuresRef)}>Features</li>
            <li className="hover:text-[#82db26] cursor-pointer transition-colors duration-300" onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div
          className="transform transition-all duration-700 ease-out"
          style={{
            opacity: footerVisible ? 1 : 0,
            transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
            transitionDelay: '200ms'
          }}
        >
          {/* हेडिंग को ग्रीन कलर दिया */}
          <h3 className="text-xl font-bold text-[#82db26] mb-4 tracking-wide">Contact Info</h3>
          <p className="text-base text-gray-400 mb-2 hover:text-[#82db26] cursor-pointer transition-colors">+91 9520791411</p>
          <p className="text-base text-gray-400 mb-2 hover:text-[#82db26] cursor-pointer transition-colors break-all">rampratap8218253@gmail.com</p>
          <p className="text-base text-gray-400 leading-relaxed">
            Pakbada Dehli Road<br />Moradabad
          </p>
        </div>

        {/* Newsletter */}
        <div
          className="transform transition-all duration-700 ease-out"
          style={{
            opacity: footerVisible ? 1 : 0,
            transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
            transitionDelay: '300ms'
          }}
        >
          {/* हेडिंग को ग्रीन कलर दिया */}
          <h3 className="text-xl font-bold text-[#82db26] mb-4 tracking-wide">Newsletter</h3>
          {/* ईमेल इनपुट: फोकस करने पर परफेक्ट नियॉन ग्रीन बॉर्डर */}
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 text-base rounded-md focus:outline-none mb-3 bg-[#101626] border border-gray-800 text-gray-200 focus:border-[#82db26] focus:ring-1 focus:ring-[#82db26] transition-all"
          />
          {/* बटन: होवर करने पर प्रीमियम ग्रीन ग्रेडिएंट और ग्लो शैडो इफ़ेक्ट */}
          <button className="w-full bg-[#101626] border border-gray-800 text-gray-300 py-3 rounded-md text-base font-semibold transition-all duration-300 hover:text-black hover:bg-gradient-to-r hover:from-[#82db26] hover:to-green-500 hover:border-transparent hover:shadow-[0_4px_12px_rgba(130,219,38,0.4)]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <div
        className="transform transition-all duration-700 ease-out"
        style={{
          opacity: footerVisible ? 1 : 0,
          transform: footerVisible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: '400ms'
        }}
      >
        <div className="border-t border-gray-900 mb-6"></div>
      </div>

      {/* Bottom Section */}
      <div
        className="flex flex-col md:flex-row justify-between items-center transform transition-all duration-700 ease-out"
        style={{
          opacity: footerVisible ? 1 : 0,
          transform: footerVisible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: '500ms'
        }}
      >
        <p className="text-base text-gray-500 mb-4 md:mb-0">
          © 2026 All rights reserved.
        </p>

        {/* Social Icons: होवर करने पर ग्रीन ग्रेडिएंट और ग्लो */}
        <div className="flex gap-4">
          <div 
            onClick={() => window.open("https://www.facebook.com/ram.pratap.495594", "_blank")} 
            className="bg-[#101626] border border-gray-800 p-3 rounded-md shadow-md hover:bg-gradient-to-r hover:from-[#82db26] hover:to-green-500 hover:border-transparent hover:shadow-[0_4px_10px_rgba(130,219,38,0.35)] hover:-translate-y-1 group cursor-pointer transition-all duration-300"
          >
            <FaFacebookF size={16} className="text-gray-400 group-hover:text-black transition-colors" />
          </div>
          <div 
            onClick={() => window.open("https://www.instagram.com/ramp.ratap8218/", "_blank")} 
            className="bg-[#101626] border border-gray-800 p-3 rounded-md shadow-md hover:bg-gradient-to-r hover:from-[#82db26] hover:to-green-500 hover:border-transparent hover:shadow-[0_4px_10px_rgba(130,219,38,0.35)] hover:-translate-y-1 group cursor-pointer transition-all duration-300"
          >
            <FaInstagram size={16} className="text-gray-400 group-hover:text-black transition-colors" />
          </div>
          <div 
            onClick={() => window.open("https://www.linkedin.com/in/ram-pratap-477346320/", "_blank")} 
            className="bg-[#101626] border border-gray-800 p-3 rounded-md shadow-md hover:bg-gradient-to-r hover:from-[#82db26] hover:to-green-500 hover:border-transparent hover:shadow-[0_4px_10px_rgba(130,219,38,0.35)] hover:-translate-y-1 group cursor-pointer transition-all duration-300"
          >
            <FaLinkedinIn size={16} className="text-gray-400 group-hover:text-black transition-colors" />
          </div>
        </div>

      </div>
    </div>
  </footer>
    </>
  );
}

export default AllComponent;