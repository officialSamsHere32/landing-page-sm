import React from "react";

const skills = [
  { name: "React", color: "bg-blue-100 text-blue-700" },
  { name: "JavaScript", color: "bg-yellow-100 text-yellow-700" },
  { name: "HTML5", color: "bg-orange-100 text-orange-700" },
  { name: "CSS3", color: "bg-sky-100 text-sky-700" },
  { name: "Tailwind CSS", color: "bg-teal-100 text-teal-700" },
  { name: "Vite", color: "bg-purple-100 text-purple-700" },
  { name: "Git", color: "bg-red-100 text-red-700" },
  { name: "GitHub", color: "bg-gray-100 text-gray-700" },
  { name: "Responsive Design", color: "bg-green-100 text-green-700" },
  // { name: "REST API", color: "bg-indigo-100 text-indigo-700" },
];

function Skills() {
  return (
    <section id="skills" className="w-full py-16 flex justify-center bg-white">
      <div className="w-full max-w-[1200px] px-6">

        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-[22px] font-bold">Skills & Tech Stack</h2>
          <p className="text-gray-500 mt-3 sm:text-lg">Technologies I work with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`${skill.color} px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold shadow-sm`}
            >
              {skill.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
