import React from "react";
import { FiClock } from "react-icons/fi";

const blogs = [
  {
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    category: "FRONTEND",
    time: "3 min read",
    title: "How I Built Fully Responsive Websites using HTML, CSS & Tailwind",
  },
  {
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    category: "REACT JS",
    time: "5 min read",
    title: "Creating Modern UI with React.js using Component-Based Design",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "PROJECT",
    time: "4 min read",
    title: "Developing Eduma Online Courses Platform with React & Tailwind",
  },
];

const Blog = () => {
  return (
    <section className="w-full py-16 border-b  border-gray-200">
      <div className=" px-7">

        {/* Top Text */}
        <p className="text-center text-sm tracking-widest text-orange-500 uppercase pb-5 font-medium">
          Visit my blog and keep your feedback
        </p>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl md:text-5xl font-bold text-gray-800 pb-20">
          My Blog
        </h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className=" bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-md overflow-hidden group transition duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt="blog"
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-orange-500 text-sm font-semibold tracking-wide">
                    {blog.category}
                  </span>

                  <span className="flex items-center gap-1 text-gray-400 text-sm">
                    <FiClock />
                    {blog.time}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 leading-snug group-hover:text-orange-500 transition duration-300">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;