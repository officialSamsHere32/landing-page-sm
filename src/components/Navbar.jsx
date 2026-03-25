


import React, { useState, useEffect } from "react";

const navItems = [
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Skills", href: "#skills" },
  { id: 4, text: "Portfolio", href: "#portfolio" },
  { id: 5, text: "Contact", href: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  // 🔥 Prevent body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed w-full shadow-md bg-white top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-[#2545f4] tracking-tight">
            Samuel Chandra
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-12">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-black hover:font-bold transition-all duration-200"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </nav>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full" //Conditional Rendering.
        }`}
      >
        <div className="flex flex-col pt-24 px-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-black text-lg hover:font-bold hover:bg-gray-100 transition-all duration-200 py-2 px-3 rounded border-b border-gray-200"
            >
              {item.text}
            </a>
          ))}
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;