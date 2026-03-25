import React from "react";

const cards = [
  {
    id: 1,
    icon: "💻",
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React, Tailwind CSS, and modern web standards.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "UI/UX Implementation",
    desc: "Translating designs into pixel-perfect, accessible, and user-friendly web experiences.",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Web Performance",
    desc: "Optimizing load times and runtime performance for smooth, fast-loading applications.",
  },
];

function CardSection() {
  return (
    <section id="about" className="sm:w-full sm:border-0 sm:flex sm:justify-center sm:bg-gray-50 w-full py-24 flex justify-center bg-gray-50 border-4 border-teal-950">
      <div className="sm:w-[1200px] w-[300px]">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl sm:font-bold sm:mb-4 text-[22px] font-bold mb-3">What I Do</h2>
          <p className="text-gray-600 sm:text-lg text-md">
            Services I provide as a frontend developer.
          </p>
        </div>

        {/* Cards */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-10 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 mb-9">
              <div className="text-5xl mb-6">{card.icon}</div>
              <h3 className="sm:text-2xl text-sm font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
