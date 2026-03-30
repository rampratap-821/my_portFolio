import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Social media URLs
  const socialLinks = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/"
  };

  // Handle social media click
  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer ref={footerRef} className="pt-16 pb-6 px-6 border overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* About - Slide up with delay */}
          <div 
            className="transform transition-all duration-700 ease-out"
            style={{
              opacity: footerVisible ? 1 : 0,
              transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0ms'
            }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              About Me
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Professional developer specializing in creating exceptional digital
              experiences. Available for freelance opportunities.
            </p>
          </div>

          {/* Quick Links - Slide up with delay */}
          <div 
            className="transform transition-all duration-700 ease-out"
            style={{
              opacity: footerVisible ? 1 : 0,
              transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '100ms'
            }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Portfolio
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Resume
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact Info - Slide up with delay */}
          <div 
            className="transform transition-all duration-700 ease-out"
            style={{
              opacity: footerVisible ? 1 : 0,
              transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '200ms'
            }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Info
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              +91 9520791411
            </p>
            <p className="text-sm text-gray-500 mb-2">
              rampratap8218253@gmail.com
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pakbada Dehli Road<br />
              Moradabad
            </p>
          </div>

          {/* Newsletter - Slide up with delay */}
          <div 
            className="transform transition-all duration-700 ease-out"
            style={{
              opacity: footerVisible ? 1 : 0,
              transform: footerVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '300ms'
            }}
          >
            <h3 className="text-lg font-semibold  mb-4">
              Newsletter
            </h3>

            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-md bg-black border border-gray-200 focus:outline-none mb-3"
            />

            <button className="w-full bg-gradient-to-r from-gray-200 to-gray-50 text-orange-500 py-2.5 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition hover:bg-orange-500 hover:text-white">
              Subscribe
            </button>
          </div>

        </div>

        {/* Divider - Slide up with delay */}
        <div 
          className="transform transition-all duration-700 ease-out"
          style={{
            opacity: footerVisible ? 1 : 0,
            transform: footerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '400ms'
          }}
        >
          <div className="border-t border-gray-300 mb-6"></div>
        </div>

        {/* Bottom Section - Slide up with delay */}
        <div 
          className="flex flex-col md:flex-row justify-between items-center transform transition-all duration-700 ease-out"
          style={{
            opacity: footerVisible ? 1 : 0,
            transform: footerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '500ms'
          }}
        >
          {/* Copyright */}
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2026 All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div 
              onClick={() => handleSocialClick(socialLinks.facebook)}
              className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition cursor-pointer hover:bg-orange-500 hover:text-white group"
            >
              <FaFacebookF size={14} className="text-gray-600 group-hover:text-white transition" />
            </div>
            <div 
              onClick={() => handleSocialClick(socialLinks.instagram)}
              className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition cursor-pointer hover:bg-orange-500 hover:text-white group"
            >
              <FaInstagram size={14} className="text-gray-600 group-hover:text-white transition" />
            </div>
            <div 
              onClick={() => handleSocialClick(socialLinks.linkedin)}
              className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition cursor-pointer hover:bg-orange-500 hover:text-white group"
            >
              <FaLinkedinIn size={14} className="text-gray-600 group-hover:text-white transition" />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;