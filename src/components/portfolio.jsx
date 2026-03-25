import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    desc: "A responsive web application built with React and Tailwind CSS. Features include user authentication, dynamic data fetching, and a clean modern UI.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Project Two",
    desc: "A full-featured landing page with smooth animations, mobile-first design, and optimized performance. Built with modern frontend tools.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Project Three",
    desc: "An interactive web app integrating REST APIs to display real-time data. Focused on performance, accessibility, and responsive layouts.",
    tech: ["React", "REST API", "Git"],
    github: "#",
    demo: "#",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-16 flex justify-center bg-gray-50">
      <div className="w-full max-w-[1200px] px-6">

        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-[22px] font-bold">My Portfolio</h2>
          <p className="text-gray-500 mt-3 sm:text-lg">Projects I've built</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Placeholder thumbnail */}
              <div className="h-[180px] bg-gradient-to-br from-[#404b7f] to-[#7580ba] flex items-center justify-center">
                <span className="text-white text-4xl font-bold opacity-30">{project.id}</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{project.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#e8eaff] text-[#2545f4] px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 text-center border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 text-center bg-[#2545f4] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#3b4ba5] transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
