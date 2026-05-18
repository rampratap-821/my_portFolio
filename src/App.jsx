import React from 'react'
import AllComponent from '.././src/components/Allcomponent'
import DemoButton from './components/DemoButton'

const App = () => {
  return (
    <div className='bg-white/10' >
      <AllComponent/>
      <DemoButton/>
    </div>
  )
}

export default App














// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const App = () => {
//   const [formData, setFormData] = useState({
//     subject: "",
//     message: "",
//     agree: false,
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.subject || !formData.message) return alert("Fields bhariye ❌");
//     if (!formData.agree) return alert("Terms accept kijiye ❌");

//     setLoading(true);

//     const templateParams = {
//       title: formData.subject,
//       message: formData.message,
//       name: "Rampratap",
//     };

//     emailjs
//       .send("service_uw4cvem", "template_d0hictc", templateParams, "34KlygrZtS6m_EmP3")
//       .then(() => {
//         alert("Message Sent ✅");
//         setFormData({ subject: "", message: "", agree: false });
//       })
//       .catch(() => alert("Error ❌"))
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden font-sans">
      
//       {/* V-SHAPE BACKGROUND */}
//       <div 
//         className="absolute inset-0 z-0 bg-[#4c69ba]"
//         style={{
//           clipPath: "polygon(0 45%, 50% 60%, 100% 45%, 100% 100%, 0 100%)"
//         }}
//       ></div>

//       {/* LOGO SECTION - Thoda chhota margin */}
//       <div className="relative z-10 mb-6 flex items-center gap-2">
//         <svg width="35" height="35" viewBox="0 0 40 40" fill="none">
//             <path d="M10 10H30V30H10V10Z" fill="#4C69BA"/>
//             <path d="M5 5H15V15H5V5Z" fill="#2D3E70"/>
//         </svg>
//         <h1 className="text-[38px] font-light text-[#4c69ba] tracking-tight">EmailSend</h1>
//       </div>

//       {/* MAIN CARD - Width kam kar di hai (380px) */}
//       <div className="relative z-10 bg-white w-full max-w-[380px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-sm overflow-hidden">
//         <div className="p-8 pt-10 pb-8"> {/* Padding kam kar di hai */}
//           <form onSubmit={handleSubmit} className="space-y-5">
            
//             <div className="space-y-1">
//               <label className="text-[12px] font-bold text-gray-500 uppercase flex items-center gap-1">
//                 Your Subject <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full border border-gray-200 p-2.5 rounded-sm focus:outline-none focus:border-[#4c69ba] text-gray-700 text-[14px]"
//                 required
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="text-[12px] font-bold text-gray-500 uppercase flex items-center gap-1">
//                 Message <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full border border-gray-200 p-2.5 rounded-sm focus:outline-none focus:border-[#4c69ba] text-gray-700 text-[14px] resize-none"
//                 rows="3"
//                 required
//               />
//             </div>

//             <div className="flex items-center gap-2 pt-1">
//               <input
//                 type="checkbox"
//                 id="agree"
//                 name="agree"
//                 checked={formData.agree}
//                 onChange={handleChange}
//                 className="w-3.5 h-3.5 accent-[#4c69ba] cursor-pointer"
//               />
//               <label htmlFor="agree" className="text-[13px] text-gray-400 cursor-pointer">
//                 Accept terms and conditions
//               </label>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#4c69ba] hover:bg-[#435ea8] text-white py-2.5 rounded-[4px] text-[15px] font-semibold transition-all mt-2 flex items-center justify-center gap-2"
//             >
//               {loading ? "Sending..." : (
//                 <>
//                   <span className="text-lg">→</span> Sign In
//                 </>
//               )}
//             </button>
//           </form>
//         </div>

//         <div className="bg-[#fcfcfc] border-t border-gray-50 py-5 text-center">
//           <p className="text-[13px] text-[#4c69ba] font-medium cursor-pointer hover:underline">
//             Create your free account now!
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default App;