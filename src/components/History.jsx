import React from "react";
import Profile from "../assets/Profile.jpg";

function History() {
  return (
    <section id="about" className="w-full py-16 flex justify-center bg-gray-50">
      <div className="w-full max-w-[1200px] px-6">

        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-[22px] font-bold">About Me</h2>
          <p className="text-gray-500 mt-3 sm:text-lg">A little bit about who I am</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <img
              src={Profile}
              alt="Samuel Chandra"
              className="w-[280px] h-[320px] object-cover rounded-2xl mb-6 shadow"
            />
            <h3 className="text-xl font-bold text-gray-800">Samuel Chandra</h3>
            <p className="text-[#2545f4] font-medium mt-1">Frontend Developer</p>
            <p className="text-gray-500 mt-1 text-sm">Jakarta Barat, Indonesia</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-gray-600 sm:text-lg text-base leading-relaxed">
            <p className="mb-4">
              Hi! I'm Samuel Chandra, a passionate frontend developer based in Jakarta Barat.
              I enjoy creating clean, performant, and visually appealing web applications.
            </p>
            <p className="mb-4">
              I work with modern technologies like React, Tailwind CSS, and Vite to build
              user-friendly interfaces. I care deeply about code quality, responsive design,
              and delivering great user experiences.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, improving my skills,
              and working on personal projects. I'm always open to new opportunities
              and collaborations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">📍 Jakarta Barat</span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">📞 +62 895 8923 71263</span>
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">💼 Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
