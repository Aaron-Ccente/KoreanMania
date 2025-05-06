import React, { useState } from "react";
import imageLogo2 from "../imagenes/kitsune.webp";
import MenuSVG from "../icons/MenuSVG";
function Nav() {
  const [modalMenu, setModaMenu] = useState(false);

  const handleViewModalMenu = () => {
    setModaMenu(!modalMenu);
  };
  return (
    <header className="flex justify-around items-center h-[80px] fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex items-center justify-center w-1/2">
        <div className="w-[90px] h-[80px] flex items-center justify-center">
           <img
            src={imageLogo2}
            width={70}
            height={70}
            className="w-[70px] h-[70px]"
            loading="lazy"
            alt="imagen de kitsune"
          />
        </div>
        <h2 className="ml-2 text-center font-bold text-3xl object-contain text-rosa">KOREAN MANIA</h2>
      </div>
      <nav className="flex bg-rosa rounded-tl-3xl rounded-bl-3xl w-1/2  justify-center h-full items-center text-black max-md:hidden">
        <ul className="flex gap-4 text-xl xl:gap-14">
          <li className="p-1 hover:text-white">
            <a href="#nosotros" title="Ir a la sección sobre nosotros">
              Inicio
            </a>
          </li>
          <li className="p-1 hover:text-white">
            <a href="#menu" title="Ir a la sección sobre nuestros servicios">
              Menú
            </a>
          </li>
          <li className="p-1 hover:text-white">
            <a
              href="#historia"
              title="Ir a la sección sobre las reseñas de nuestros clientes"
            >
              Nuestra historia
            </a>
          </li>
          <li className="p-1 hover:text-white">
            <a href="#contacto" title="Ir a la sección para contactarnos">
              Visítanos
            </a>
          </li>
        </ul>
      </nav>
      <div className="max-md:absolute max-md: right-2 md:hidden">
        <div onClick={handleViewModalMenu} className="hover:cursor-pointer"><MenuSVG/></div>
        
      </div>
      {modalMenu && (
        <nav className="text-black absolute bg-rosa top-0 right-0 mt-[80px] z-50 md:hidden ">
          <ul className="flex flex-col">
          <a href="#nosotros">
            <li className="p-2 hover:text-white hover:border-b-2 hover:border-white">
              Inicio
            </li></a>
            <a href="#menu">
            <li className="p-2 hover:text-white hover:border-b-2 hover:border-white">
              Menú
            </li></a>
            <a href="#historia">
            <li className="p-2 hover:text-white hover:border-b-2 hover:border-white">
              Nuestra historia
            </li></a>
            <a href="#contacto">
            <li className="p-2 hover:text-white hover:border-b-2 hover:border-white">
              Visítanos
            </li>
            </a>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Nav;
