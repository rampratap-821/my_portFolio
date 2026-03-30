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

            // Trigger individual card animations
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
    <section ref={sectionRef} className="py-24 px-6 overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto">

        {/* Heading */}
        <div
          className="transform transition-all duration-700 ease-out mb-16"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p className="text-orange-500 text-xs tracking-[4px] text-center uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold text-center text-gray-800">
            Contact With Me
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT CARD */}
          <div
            ref={leftCardRef}
            className="transform transition-all duration-800 ease-out"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-80px)',
            }}
          >
            <div className="bg-gradient-to-r from-gray-200 to-gray-50 rounded-xl shadow-lg p-8 group hover:shadow-2xl transition duration-500 h-full">

              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
                  alt="contact"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                Rampratap
              </h3>
              <p className="text-sm text-orange-500 mb-4">
                Software Engineer
              </p>

              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                I am open to work. Connect with me via phone or email.
              </p>

              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <span className="hover:text-orange-500 cursor-pointer transition">
                    +91 9520791411
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <span className="hover:text-orange-500 cursor-pointer transition">
                    ramratap8218253@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            ref={rightFormRef}
            className="md:col-span-2 transform transition-all duration-800 ease-out"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateX(0)' : 'translateX(80px)',
            }}
          >
            <div className="bg-gradient-to-r from-gray-200 to-gray-50 rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-500 h-full">

              <form className="space-y-7">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FaUser className="text-gray-500 text-[15px]" />
                      <span className="text-gray-500 text-[15px]">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FaPhone className="text-gray-500 text-[15px]" />
                      <span className="text-gray-500 text-[15px]">Phone Number</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="text-gray-500 text-[15px]" />
                    <span className="text-gray-500 text-[15px]">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaTag className="text-gray-500 text-[15px]" />
                    <span className="text-gray-500 text-[15px]">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FaComment className="text-gray-500 text-[15px]" />
                    <span className="text-gray-500 text-[15px]">Your Message</span>
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                  ></textarea>
                </div>

                <button
                  className="w-full 
                            bg-gradient-to-r from-gray-300 to-gray-50 
                            hover:from-orange-400 hover:to-orange-500
                            hover:-translate-y-1
                            overflow-hidden group py-4 rounded-md font-medium text-sm 
                            flex items-center justify-center gap-2 
                            transition-all duration-300 ease-out
                            border"


                  type="submit"

                >


                  <span className="relative z-10 group-hover:text-white transition">
                    SEND MESSAGE →
                  </span>
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