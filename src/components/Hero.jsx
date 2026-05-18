// import React, { useState, useEffect } from "react";
// import {
//   FaCss3Alt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaReact,
// } from "react-icons/fa";
// import { TbBrandJavascript } from "react-icons/tb";
// import profile from "../assets/image.png";
// import { RiReactjsLine } from "react-icons/ri";


// const Hero = () => {
//   // Typing animation states
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

//   // Animation states
//   const [leftContentVisible, setLeftContentVisible] = useState(false);
//   const [rightContentVisible, setRightContentVisible] = useState(false);

//   const phrases = ["Web Developer", "Frontent developer"];
//   const typingSpeed = 20;
//   const deletingSpeed = 20;
//   const pauseBetweenPhrases = 1500;

//   useEffect(() => {
//     const currentPhrase = phrases[currentPhraseIndex];

//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         // Typing mode
//         if (currentIndex < currentPhrase.length) {
//           setDisplayText(currentPhrase.substring(0, currentIndex + 1));
//           setCurrentIndex(currentIndex + 1);
//         } else {
//           // Finished typing, pause then start deleting
//           setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
//         }
//       } else {
//         // Deleting mode
//         if (currentIndex > 0) {
//           setDisplayText(currentPhrase.substring(0, currentIndex - 1));
//           setCurrentIndex(currentIndex - 1);
//         } else {
//           // Finished deleting, move to next phrase
//           setIsDeleting(false);
//           setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
//         }
//       }
//     }, isDeleting ? deletingSpeed : typingSpeed);

//     return () => clearTimeout(timer);
//   }, [currentIndex, isDeleting, currentPhraseIndex, phrases]);

//   // Trigger animations on component mount
//   useEffect(() => {
//     // Small delay to ensure smooth animation
//     setTimeout(() => {
//       setLeftContentVisible(true);
//       setRightContentVisible(true);
//     }, 100);
//   }, []);

//   // Social media links
//   const socialLinks = {
//     facebook: "https://www.facebook.com/ram.pratap.495594",
//     instagram: "https://www.instagram.com/ramp.ratap8218/",
//     linkedin: "https://www.linkedin.com/in/ram-pratap-477346320/"
//   };

//   const handleSocialClick = (platform) => {
//     window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <section className="w-full py-7 md:py-10 lg:py-10 overflow-hidden border-b border-gray-200 ">

//       <div className="px-5 sm:px-6 md:px-8 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center lg:items-stretch h-full">

//         {/* LEFT CONTENT - Slide from left */}
//         <div
//           className={`md:w-[93%] lg:col-span-2  order-1 lg:order-1  transition-all duration-1000 ease-out transform ${leftContentVisible
//             ? 'translate-x-0 opacity-100'
//             : '-translate-x-full opacity-0'
//             }`}
//         >
//           <p className="text-[12px] sm:text-[12px] md:text-[15px] tracking-[2px] sm:tracking-[3px] text-gray-900 font-medium mb-4 md:mb-5 uppercase sm:text-center   md:text-left  lg:text-left">
//             WELCOME TO MY WORLD
//           </p>

//           <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold  text-[#1e2125] sm:text-center   md:text-left  lg:text-left">
//             <h1> Hi,</h1>
//             I'm <span className="text-[#ff4522] sm:text-center   md:text-left  lg:text-left">Rampratap</span>

//             <div className="flex md:pt-2  pt-2 sm:justify-center md:justify-start ">
//               <span>a</span>
//               <h1 className=" pl-2 text-[#ff4522] break-words sm:text-center   md:text-left  lg:text-left"> {displayText}</h1>

//               {/* Thin Cursor Line */}
//               <h1 className="inline-block w-[3px] h-[1em] bg-black ml-1 animate-pulse sm:text-center   md:text-left  lg:text-left"></h1>
//             </div>
//           </div>

//           <h1 className="  text-gray-500 mt-5 sm:mt-6 md:mt-7   text-[15px] sm:text-[16px] md:text-[17px]">
//             Programming is my passion, and I genuinely enjoy creating
//             meaningful and efficient  solutions in through
//             code. I enjoy collaborating with teams and
//             contributing to group success. I stay focused, motivated, and committed to delivering quality
//             work on time. Overall, I am passionate, dedicated, and always eager to grow as a developer.
//           </h1>

//           <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-10 md:mt-12  pt-[40px] sm:pt-[50px] md:pt-[60px] sm:justify-center md:justify-start lg:justify-start  ">

//             <div className="flex-shrink-0">
//               <p className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider sm:tracking-widest">
//                 FIND WITH ME
//               </p>
//               <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
//                 <SocialBox onClick={() => handleSocialClick('facebook')}>
//                   <FaFacebookF />
//                 </SocialBox>
//                 <SocialBox onClick={() => handleSocialClick('instagram')}>
//                   <FaInstagram />
//                 </SocialBox>
//                 <SocialBox onClick={() => handleSocialClick('linkedin')}>
//                   <FaLinkedinIn />
//                 </SocialBox>
//               </div>
//             </div>

//             <div className="flex-shrink-0">
//               <p className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 uppercase tracking-wider sm:tracking-widest">
//                 BEST SKILL ON
//               </p>
//               <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start ">
//                 <SkillBox color={"blue"}><FaCss3Alt /></SkillBox>
//                 <SkillBox color={"orange"}><TbBrandJavascript /></SkillBox>
//                 <SkillBox color={"skyblue"}><img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png" className="size-6" /></SkillBox>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT IMAGE - Slide from right */}
//         <div className="order-2 lg:order-2  h-full w-full flex-shrink-0 md:pr-10">
//           <div
//             className={`   transition-all duration-1000 ease-out transform ${rightContentVisible
//               ? 'translate-x-0 opacity-100'
//               : 'translate-x-full opacity-0'
//               }`}
//           >
//             <img
//               src={profile}
//               alt="Rampratap"
//               className=" rounded-2xl transition-transform duration-500 hover:scale-[1.01] object-cover"

//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// // ✅ Social Icons - Responsive with click handler (font sizes unchanged)
// const SocialBox = ({ children, onClick }) => (
//   <div
//     onClick={onClick}
//     className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center 
//   bg-gradient-to-r from-white to-gray-100
//     shadow-[5px_5px_15px_#d1d1d1] 
//     transition-all duration-300 cursor-pointer 
//     hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 
//     hover:text-white hover:-translate-y-1 text-sm sm:text-base md:text-xl"
//   >
//     {children}
//   </div>
// );

// // Skill Icons - Responsive (font sizes unchanged)
// const SkillBox = ({ children, color }) => (
//   <div
//     className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center 
//      bg-gradient-to-r from-white to-gray-100 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] shadow-[5px_5px_15px_#d1d1d1] transition-all duration-300 cursor-default
//     hover:-translate-y-1 text-sm sm:text-base md:text-xl"
//     style={{ color: color }}
//   >
//     {children}
//   </div>
// );

// export default Hero;
import React, { useState, useEffect } from "react";
import {
  FaCss3Alt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import profile from "../assets/image.png";

const Hero = () => {
  // Typing animation states
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Animation states
  const [leftContentVisible, setLeftContentVisible] = useState(false);
  const [rightContentVisible, setRightContentVisible] = useState(false);

  const phrases = ["Web Developer", "Frontend developer"];
  const typingSpeed = 20;
  const deletingSpeed = 20;
  const pauseBetweenPhrases = 1500;

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentPhrase.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentPhraseIndex]);

  useEffect(() => {
    setTimeout(() => {
      setLeftContentVisible(true);
      setRightContentVisible(true);
    }, 100);
  }, []);

  const socialLinks = {
    facebook: "https://www.facebook.com/ram.pratap.495594",
    instagram: "https://www.instagram.com/ramp.ratap8218/",
    linkedin: "https://www.linkedin.com/in/ram-pratap-477346320/"
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    // min-h-screen, flex, items-center, aur justify-center से सब कुछ स्क्रीन के सेंटर में रहेगा
    <section className="w-full min-h-screen flex items-center justify-center bg-[#050c1a] text-white font-sans overflow-hidden py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center justify-items-center w-full">
        
        {/* LEFT CONTENT - UPDATE: Image ke jaisa Glowing Neon Border lagaya hai */}
        <div className="lg:col-span-7 flex flex-col justify-center items-center w-full order-2 lg:order-1">
          <div
            className={`w-full max-w-xl bg-[#0b1426] rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 ease-out transform ${
              leftContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
              // Image ke matching Greenish-Yellow custom neon border aur glow effects
              border: "2px solid #a3e635",
              boxShadow: "0 0 20px rgba(163, 230, 53, 0.4), inset 0 0 15px rgba(163, 230, 53, 0.1)",
              animation: "pulseGlow 3s infinite ease-in-out"
            }}
          >
            {/* CSS Animation Logic for Glowing Effect */}
            <style>{`
              @keyframes pulseGlow {
                0%, 100% { box-shadow: 0 0 15px rgba(163, 230, 53, 0.35), inset 0 0 10px rgba(163, 230, 53, 0.05); }
                50% { box-shadow: 0 0 30px rgba(163, 230, 53, 0.65), inset 0 0 20px rgba(163, 230, 53, 0.15); }
              }
            `}</style>

            {/* हेडिंग */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-5">
              Welcome to my profil
            </h1>

            {/* टाइपिंग इफ़ेक्ट */}
            <div className="flex justify-center items-center text-lg md:text-xl font-medium text-gray-300 mt-2 flex-wrap">
              <span>Hi, I'm Rampratap, a </span>
              <span className="text-[#ff4522] font-semibold pl-2">{displayText}</span>
              <span className="inline-block w-[2px] h-[1em] bg-[#ff4522] ml-1 animate-pulse"></span>
            </div>

            <p className="text-gray-400 mt-5 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Programming is my passion. I enjoy creating meaningful solutions, 
              collaboring with teams, and delivering quality work on time.
            </p>
          </div>

          {/* सोशल मीडिया और स्किल्स */}
          <div className="flex flex-wrap justify-center gap-10 mt-8 w-full px-4">
            <div className="flex flex-col items-center">
              <p className="text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wider">FIND WITH ME</p>
              <div className="flex gap-3">
                <SocialBox onClick={() => handleSocialClick('facebook')}><FaFacebookF /></SocialBox>
                <SocialBox onClick={() => handleSocialClick('instagram')}><FaInstagram /></SocialBox>
                <SocialBox onClick={() => handleSocialClick('linkedin')}><FaLinkedinIn /></SocialBox>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wider">BEST SKILL ON</p>
              <div className="flex gap-3">
                <SkillBox color={"#38bdf8"}><FaCss3Alt /></SkillBox>
                <SkillBox color={"#f59e0b"}><TbBrandJavascript /></SkillBox>
                <SkillBox color={"#06b6d4"}>
                  <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png" className="w-5 h-5 object-contain" alt="React" />
                </SkillBox>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE - मैजिकल मूविंग लाइट रिंग */}
        <div className="lg:col-span-5 flex justify-center items-center w-full order-1 lg:order-2">
          <div
            className={`relative w-72 h-72 sm:w-80 sm:h-80 md:w-85 md:h-85 lg:w-96 lg:h-96 rounded-full flex items-center justify-center transition-all duration-1000 ease-out transform ${
              rightContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            
            {/* 1. इमेज जैसी मल्टीकलर लाइट रिंग जो लगातार घूमेगी (Gradient Edge) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500 opacity-90 blur-[2px] animate-spin-slow p-[5px]">
              <div className="w-full h-full bg-[#050c1a] rounded-full"></div>
            </div>

            {/* 2. पीछे का एक्स्ट्रा नियॉन और मैजिकल ग्लो जो पल्स करेगा (सिकुड़ेगा-फैलेगा) */}
            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-bl from-blue-500 via-pink-500/20 to-cyan-400 opacity-50 animate-pulse-gentle -z-10"></div>
            
            {/* 3. आपकी प्रोफाइल इमेज */}
            <div className="w-[88%] h-[88%] rounded-full overflow-hidden border-[6px] border-[#050c1a] bg-[#101f38] z-10 shadow-2xl">
              <img
                src="https://scontent.fdel65-3.fna.fbcdn.net/v/t39.30808-6/467468453_122127745556427436_9180433924243760972_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=NpdqKw7_mKMQ7kNvwFBIoNQ&_nc_oc=AdqeS2mkApbkt2IGkYNLWBfwoh6YfbVOruG5CyXKxl4_Q-WGnls9_IZP6OVHwaSIWI7UFG5saH31Ie4lpnVlmvs8&_nc_zt=23&_nc_ht=scontent.fdel65-3.fna&_nc_gid=JhgaHdOW2V846kD_ge6GTA&_nc_ss=7b2a8&oh=00_Af7-uCLCPcFvnQNN8pe3Ob-4kq4DQwFZnzGKPsikv2MUPA&oe=6A102BFB"
                alt="Rampratap"
                className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

const SocialBox = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="w-9 h-9 rounded-lg flex items-center justify-center 
    bg-[#0c1930] text-gray-400 border border-gray-800/60
    transition-all duration-300 cursor-pointer 
    hover:bg-[#ff4522] hover:text-white hover:-translate-y-1 text-sm shadow-md"
  >
    {children}
  </div>
);

const SkillBox = ({ children, color }) => (
  <div
    className="w-9 h-9 rounded-lg flex items-center justify-center 
    bg-[#0c1930] border border-gray-800/60 transition-all duration-300 cursor-default
    hover:-translate-y-1 text-sm shadow-md"
    style={{ color: color }}
  >
    {children}
  </div>
);

export default Hero;