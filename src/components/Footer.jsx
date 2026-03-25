import React from "react";
import Img1 from "../assets/YT.png";
import pic from "../assets/IG4.jpg";
import X from "../assets/X-new.png";
import InputFooter from "../components/form/InputFooter"

const handleContact = (formData) => {
  console.log("Contact form submitted:", formData);
};

const cards = [
  {
    image: X,
  },
  {
    image: Img1,
  },
  {
    image: pic,
  },
];

function Footer() {
  return (
    <footer className="w-full py-1 sm:flex justify-center bg-gray-50">

      <div className="w-full max-w-[1200px] px-4">
        <div className="text-center mb-16">
          <div className="text-4xl font-bold mb-4 text-center">
          </div></div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-10 justify-center">
          <div
            className="mb-10">
            <InputFooter
              onSubmit={handleContact} />
          </div>
          <div className="w-full justify-center">
          <div
            className="bg-white rounded-2xl shadow-lg p-8">
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43454.82628357475!2d10.877405457839885!3d49.58806023405201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a2012a6dd6455d%3A0xcd2bb5b125f1e930!2sAdi-Dassler-Stra%C3%9Fe%201%2C%2091074%20Herzogenaurach%2C%20Germany!5e0!3m2!1sen!2sid!4v1772508308141!5m2!1sen!2sid"
              className="w-full h-[250px] sm:h-[450px]" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">Adi-Dassler-Straße 1, 91074 Herzogenaurach, Germany</iframe>
            </div>
            <div className="flex mt-20 gap-3 rounded-full">
              {cards.map((card, index) => (
                <div key={index}>
                  <img src={card.image} className="w-[25px] h-[25px] sm:flex" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        <div className="w-full justify-center text-center">
          <p className="mt-10 text-[10px] sm:text-[20px]">© 2026 Samuel Chandra</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
