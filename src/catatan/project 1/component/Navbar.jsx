import React from "react";

const navItems = [
  {id : 1, text: "Home", href: "#home" },
  {id : 2, text: "About", href: "#about" },
  {id : 3, text: "Services", href: "#services" },
  {id : 4, text: "Contact", href: "/contact" }
];


function Navbar() {
    return (
        <nav className="flex justify-center h-[100px]">
            <img src="adidas.png"></img>
            <div className ="w-[1200px] flex items-center">
                <div className="font-bold text-black text-[25mm]">
                    Adidas
                </div>
                <div className="flex ml-auto"> 
                    {navItems.map((index) => (
                        <a key={index.id} href={index.href} className="ml-12 hover:font-bold">
                            {index.text}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
export default Navbar;