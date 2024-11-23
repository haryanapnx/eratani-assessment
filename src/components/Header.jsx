import { useState } from "react";
import Logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import imgHeader from "../assets/img-header.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="relative w-full bg-transparent bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imgHeader})`,
        height: "617px",
      }}
    >
      <div className="p-8 flex justify-between items-center">
        <img src={Logo} alt="logo-header" />
        <button className="text-green-700" onClick={toggleMenu}>
          <img src={menu} alt="menu-icon" />
        </button>
      </div>

      <div
        className={`fixed mx-auto max-w-full sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md inset-0 bg-white shadow-md z-50 flex flex-col items-center justify-center text-center transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute top-4 right-4 pt-2 px-4 text-3xl text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          &times;
        </button>
        {["Beranda", "Tentang Kami", "Tips & Berita Pertanian", "Kegiatan"].map(
          (item, index) => (
            <div
              key={index}
              className="text-xl hover:text-black text-gray-700 hover:bg-paleYellow cursor-pointer w-full p-3 transition-all duration-300"
            >
              {item}
            </div>
          )
        )}
        <button className="bg-yellow-500 text-white rounded-lg px-6 py-2 hover:bg-yellow-600 mt-6">
          Mitra Petani
        </button>
      </div>
    </header>
  );
};

export default Header;
