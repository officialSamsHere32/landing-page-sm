import React from "react";
import Button from "./Button.jsx";
import Profile from "../assets/Profile.jpg";

function Banner() {
  return (
    <>
      {/* Mobile */}
      <section id="home" className="lg:hidden w-full flex justify-center py-24 bg-gradient-to-br from-[#e8eaff] to-white">
        <div className="flex-col w-full max-w-[1200px] flex items-center px-6">
          <div className="w-full">
            <div className="border-2 border-gray-200 rounded-3xl px-6 py-8">
              <p className="text-center text-lg font-medium text-[#2545f4] mb-2">
                Hi, I'm
              </p>
              <h1 className="text-center text-3xl sm:text-4xl mb-3 font-extrabold text-gray-900">
                Samuel Chandra
              </h1>
              <h2 className="text-center text-xl sm:text-2xl mb-6 font-semibold text-[#184657]">
                Frontend Developer · Programmer
              </h2>
              <p className="text-center text-base sm:text-xl mb-10 font-normal text-gray-600">
                I build clean, responsive, and user-friendly web experiences.<br />
                Based in Jakarta Barat.
              </p>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <Button
                className="bg-[#2545f4] text-white px-8 sm:px-12 py-3 rounded-xl text-base sm:text-lg font-bold hover:bg-[#3b4ba5] transition"
                name="View My Work"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              />
              <a href="/contact">
                <Button
                  className="border border-[#2545f4] text-[#2545f4] px-8 sm:px-12 py-3 rounded-xl text-base sm:text-lg font-bold hover:bg-[#2545f4] hover:text-white transition"
                  name="Contact Me"
                />
              </a>
            </div>
          </div>

          <div className="w-full mt-10 flex justify-center">
            <img src={Profile} alt="Samuel Chandra" className="w-[220px] h-[280px] object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block w-full py-20 bg-gradient-to-br from-[#e8eaff] to-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-[598px]">
            <div className="w-1/2 pr-8">
              <p className="text-lg font-medium text-[#2545f4] mb-3">Hi, I'm</p>
              <h1 className="text-6xl mb-4 font-extrabold text-gray-900">
                Samuel Chandra
              </h1>
              <h2 className="text-2xl mb-6 font-semibold text-[#184657]">
                Frontend Developer · Programmer
              </h2>
              <p className="text-xl mb-10 font-normal text-gray-600">
                I build clean, responsive, and user-friendly web experiences.<br />
                Based in Jakarta Barat, Indonesia.
              </p>

              <div className="flex space-x-4 mt-6">
                <a href="#portfolio">
                  <Button
                    className="bg-[#2545f4] text-white px-12 py-3 rounded-xl text-lg font-bold hover:bg-[#3b4ba5] hover:text-white transition"
                    name="View My Work"
                  />
                </a>
                <a href="/contact">
                  <Button
                    className="border border-[#2545f4] text-[#2545f4] px-12 py-3 rounded-xl text-lg font-bold hover:bg-[#3b4ba5] hover:text-white transition"
                    name="Contact Me"
                  />
                </a>
              </div>
            </div>

            <div className="w-1/2 flex justify-end">
              <img src={Profile} alt="Samuel Chandra" className="w-[420px] h-[500px] object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
