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
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-[100] h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
          
          <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => scrollToSection(heroRef)}>
            <img
              src="https://scontent.fbek1-5.fna.fbcdn.net/v/t39.30808-6/467468453_122127745556427436_9180433924243760972_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_ohc=Z-0-O2_TnUsQ7kNvwGT5L9f&_nc_oc=AdrH1Lvhi51K2gLJ0N6JV0RB_Abuc07BSzJ4KhP8pQ-hM5DFPFaSjVTJ-KqZP1LoKyrtMj9ApPxl_GzSuBmg_iWc&_nc_zt=23&_nc_ht=scontent.fbek1-5.fna&_nc_gid=_3cjrojI3pk6HcfSsNMtYQ&_nc_ss=7a32e&oh=00_AfxgYr6TnvVFqVtOHTq1zhagOwaCe24Vuh_0Lhhlzkm8QQ&oe=69CB9DFB"
              alt="logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <h1 className="font-semibold text-lg">
              RamPortfolio<span className="text-gray-500">.info</span>
            </h1>
          </div>

          {/* Desktop Menu - Hidden on sm and md screens */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-bold text-gray-700">
            <li onClick={() => scrollToSection(heroRef)} className="text-orange-500 cursor-pointer hover:text-orange-600">HOME</li>
            <li onClick={() => scrollToSection(featuresRef)} className="hover:text-orange-500 cursor-pointer uppercase">FEATURES</li>
            <li onClick={() => scrollToSection(portfolioRef)} className="hover:text-orange-500 cursor-pointer uppercase">PORTFOLIO</li>
            <li onClick={() => scrollToSection(resumeRef)} className="hover:text-orange-500 cursor-pointer uppercase">RESUME</li>
            <li onClick={() => scrollToSection(hobbiesRef)} className="hover:text-orange-500 cursor-pointer uppercase">HOBBIES</li>
            <li onClick={() => scrollToSection(blogRef)} className="hover:text-orange-500 cursor-pointer uppercase">BLOG</li>
            <li onClick={() => scrollToSection(contactRef)} className="hover:text-orange-500 cursor-pointer uppercase">CONTACT</li>
          </ul>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleDownload}
              className="hidden lg:block bg-orange-500 text-white px-5 py-2.5 rounded-md text-xs font-bold uppercase hover:bg-orange-600 transition shadow-md"
            >
              Download CV
            </button>
            {/* Hamburger Icon - Only visible on sm and md */}
            <div className="lg:hidden text-2xl cursor-pointer text-gray-800" onClick={() => setOpen(true)}>
              <FaBars />
            </div>
          </div>
        </div>

        {/* --- MOBILE/TABLET SIDEBAR (Fix: Added 'lg:hidden' to strictly restrict it) --- */}
        <div className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-[110] lg:hidden`}>
          <div className="flex justify-between items-center p-6 border-b">
            <span className="font-bold text-orange-500">NAVIGATION</span>
            <FaTimes className="text-2xl cursor-pointer" onClick={() => setOpen(false)} />
          </div>
          <ul className="flex flex-col gap-6 p-8 text-sm font-bold text-gray-700">
            <li onClick={() => scrollToSection(heroRef)} className="hover:text-orange-500 cursor-pointer uppercase">HOME</li>
            <li onClick={() => scrollToSection(featuresRef)} className="hover:text-orange-500 cursor-pointer uppercase">FEATURES</li>
            <li onClick={() => scrollToSection(portfolioRef)} className="hover:text-orange-500 cursor-pointer uppercase">PORTFOLIO</li>
            <li onClick={() => scrollToSection(resumeRef)} className="hover:text-orange-500 cursor-pointer uppercase">RESUME</li>
            <li onClick={() => scrollToSection(hobbiesRef)} className="hover:text-orange-500 cursor-pointer uppercase">HOBBIES</li>
            <li onClick={() => scrollToSection(blogRef)} className="hover:text-orange-500 cursor-pointer uppercase">BLOG</li>
            <li onClick={() => scrollToSection(contactRef)} className="hover:text-orange-500 cursor-pointer uppercase">CONTACT</li>
          </ul>
          <div className="px-8 mt-4">
            <button onClick={handleDownload} className="w-full bg-orange-500 text-white py-3 rounded-md text-xs font-bold uppercase shadow-lg">Download CV</button>
          </div>
        </div>

        {/* Overlay - Also hidden on desktop */}
        {open && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[105] lg:hidden" onClick={() => setOpen(false)}></div>}
      </nav>

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
      <footer ref={footerRef} className="pt-16 pb-6 px-6 border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div 
              className="transform transition-all duration-700 ease-out"
              style={{
                opacity: footerVisible ? 1 : 0,
                transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '0ms'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">About Me</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Professional developer specializing in creating exceptional digital
                experiences. Available for freelance opportunities.
              </p>
            </div>

            <div 
              className="transform transition-all duration-700 ease-out"
              style={{
                opacity: footerVisible ? 1 : 0,
                transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '100ms'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-orange-500 cursor-pointer transition" onClick={() => scrollToSection(portfolioRef)}>Portfolio</li>
                <li className="hover:text-orange-500 cursor-pointer transition" onClick={() => scrollToSection(resumeRef)}>Resume</li>
                <li className="hover:text-orange-500 cursor-pointer transition" onClick={() => scrollToSection(featuresRef)}>Features</li>
                <li className="hover:text-orange-500 cursor-pointer transition" onClick={() => scrollToSection(contactRef)}>Contact</li>
              </ul>
            </div>

            <div 
              className="transform transition-all duration-700 ease-out"
              style={{
                opacity: footerVisible ? 1 : 0,
                transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '200ms'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>
              <p className="text-sm text-gray-500 mb-2">+91 9520791411</p>
              <p className="text-sm text-gray-500 mb-2">rampratap8218253@gmail.com</p>
              <p className="text-sm text-gray-500 leading-relaxed">Pakbada Dehli Road<br />Moradabad</p>
            </div>

            <div 
              className="transform transition-all duration-700 ease-out"
              style={{
                opacity: footerVisible ? 1 : 0,
                transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '300ms'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
              <input type="email" placeholder="Your email" className="w-full p-2 rounded-md focus:outline-none mb-3" />
              <button className="w-full bg-gradient-to-r from-gray-200 to-gray-50 text-orange-500 py-2.5 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition hover:bg-orange-500 hover:text-white">Subscribe</button>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out" style={{ opacity: footerVisible ? 1 : 0, transform: footerVisible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '400ms' }}>
            <div className="border-t border-gray-300 mb-6"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center transform transition-all duration-700 ease-out" style={{ opacity: footerVisible ? 1 : 0, transform: footerVisible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '500ms' }}>
            <p className="text-sm text-gray-500 mb-4 md:mb-0">© 2026 All rights reserved.</p>
            <div className="flex gap-4">
              <div onClick={() => window.open("https://www.facebook.com/ram.pratap.495594", "_blank")} className="bg-white p-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white group cursor-pointer transition">
                <FaFacebookF size={14} className="text-gray-600 group-hover:text-white transition" />
              </div>
              <div onClick={() => window.open("https://www.instagram.com/ramp.ratap8218/", "_blank")} className="bg-white p-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white group cursor-pointer transition">
                <FaInstagram size={14} className="text-gray-600 group-hover:text-white transition" />
              </div>
              <div onClick={() => window.open("https://www.linkedin.com/in/ram-pratap-477346320/", "_blank")} className="bg-white p-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white group cursor-pointer transition">
                <FaLinkedinIn size={14} className="text-gray-600 group-hover:text-white transition" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AllComponent;