import React, { useState, useEffect } from "react";
import {
  FaCss3Alt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import profile from "../assets/image.png";
import { RiReactjsLine } from "react-icons/ri";

const Hero = () => {
  // Typing animation states
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Animation states
  const [leftContentVisible, setLeftContentVisible] = useState(false);
  const [rightContentVisible, setRightContentVisible] = useState(false);

  const phrases = ["Web Developer","Ui Devloper"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseBetweenPhrases = 1500;

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        if (currentIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
        }
      } else {
        // Deleting mode
        if (currentIndex > 0) {
          setDisplayText(currentPhrase.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentPhraseIndex, phrases]);

  // Trigger animations on component mount
  useEffect(() => {
    // Small delay to ensure smooth animation
    setTimeout(() => {
      setLeftContentVisible(true);
      setRightContentVisible(true);
    }, 100);
  }, []);

  // Social media links
  const socialLinks = {
    facebook: "https://www.facebook.com/ram.pratap.495594",
    instagram: "https://www.instagram.com/ramp.ratap8218/",
    linkedin: "https://www.linkedin.com/in/ram-pratap-477346320/"
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-7 md:py-10 lg:py-10 overflow-hidden border ">

      <div className="px-5 sm:px-6 md:px-8 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center lg:items-stretch h-full">

        {/* LEFT CONTENT - Slide from left */}
        <div
          className={`lg:col-span-2  order-1 lg:order-1  transition-all duration-1000 ease-out transform ${leftContentVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-full opacity-0'
            }`}
        >
          <p className="text-[16px] sm:text-[17px] md:text-[18px] tracking-[2px] sm:tracking-[3px] text-gray-500 font-medium mb-4 md:mb-5 uppercase sm:text-center   md:text-left  lg:text-left">
            WELCOME TO MY WORLD
          </p>

          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold  text-[#1e2125] sm:text-center   md:text-left  lg:text-left">
            Hi,<br />
            I'm <span className="text-[#ff4522] sm:text-center   md:text-left  lg:text-left">Rampratap</span>
            <br />
            a <span className="text-[#ff4522] break-words sm:text-center   md:text-left  lg:text-left">{displayText}</span>

            {/* Thin Cursor Line */}
            <span className="inline-block w-[3px] h-[1em] bg-black ml-1 animate-pulse sm:text-center   md:text-left  lg:text-left"></span>
          </h1>

          <h1 className="  text-gray-600 mt-5 sm:mt-6 md:mt-7   text-[15px] sm:text-[16px] md:text-[17px]">
       Programming is my passion, and I genuinely enjoy creating
        meaningful and efficient  solutions in through
          code. I enjoy collaborating with teams and 
          contributing to group success. I stay focused, motivated, and committed to delivering quality 
          work on time. Overall, I am passionate, dedicated, and always eager to grow as a developer. 
          </h1>

          <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-10 md:mt-12  pt-[40px] sm:pt-[50px] md:pt-[60px] sm:justify-center md:justify-start lg:justify-start  ">

            <div className="flex-shrink-0">
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider sm:tracking-widest">
                FIND WITH ME
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <SocialBox onClick={() => handleSocialClick('facebook')}>
                  <FaFacebookF />
                </SocialBox>
                <SocialBox onClick={() => handleSocialClick('instagram')}>
                  <FaInstagram />
                </SocialBox>
                <SocialBox onClick={() => handleSocialClick('linkedin')}>
                  <FaLinkedinIn />
                </SocialBox>
              </div>
            </div>

            <div className="flex-shrink-0">
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider sm:tracking-widest">
                BEST SKILL ON
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <SkillBox color={"blue"}><FaCss3Alt /></SkillBox>
                <SkillBox color={"orange"}><TbBrandJavascript /></SkillBox>
                <SkillBox color={"skyblue"}><RiReactjsLine/></SkillBox>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE - Slide from right */}
        <div className="order-2 lg:order-2  h-full w-full flex-shrink-0">
          <div
            className={`   transition-all duration-1000 ease-out transform ${rightContentVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
              }`}
          >
            <img
              src={profile}
              alt="Rampratap"
              className=" rounded-2xl transition-transform duration-500 hover:scale-[1.01] object-cover"
             
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// ✅ Social Icons - Responsive with click handler (font sizes unchanged)
const SocialBox = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center 
bg-[#f0f2f5] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]
    shadow-[5px_5px_15px_#d1d1d1] 
    transition-all duration-300 cursor-pointer 
    hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 
    hover:text-white hover:-translate-y-1 text-sm sm:text-base md:text-xl"
  >
    {children}
  </div>
);

// Skill Icons - Responsive (font sizes unchanged)
const SkillBox = ({ children, color }) => (
  <div
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center 
   bg-[#f0f2f5] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] shadow-[5px_5px_15px_#d1d1d1] transition-all duration-300 cursor-default
    hover:-translate-y-1 text-sm sm:text-base md:text-xl"
    style={{ color: color }}
  >
    {children}
  </div>
);

export default Hero;