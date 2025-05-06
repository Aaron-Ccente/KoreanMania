import React, { useState } from "react";
import helados from '../imagenes/helados.webp'
import pepero from '../imagenes/pepero.webp'
import ramen from '../imagenes/ramen.webp'
import { motion } from "framer-motion";
import Producto from "./menu/Producto";
import { analytics } from '../firebase/config.js';
import { logEvent } from "firebase/analytics";

function Menu() {
     const [iceCreamModal, setIceCreamModal] = useState(false);
     const [candyModal, setCandyModal] = useState(false);
     const [mainProductsModal, setMainProductsModal] = useState(false);

    const handleIceCreamModal = () =>{
      setIceCreamModal(true);
      setCandyModal(false);
      setMainProductsModal(false);
      logEvent(analytics, "click_ver_completo", { category: "Helados y Bebidas" });
    }
    const handleCandyModal =()=>{
      setCandyModal(true);
      setIceCreamModal(false);
      setMainProductsModal(false);
      logEvent(analytics, "click_ver_completo", { category: "Dulces coreanos" }); 
    }
    const handleMainProducts = () =>{
      setMainProductsModal(true);
      setIceCreamModal(false);
      setCandyModal(false);
      logEvent(analytics, "click_ver_completo", { category: "Platos principales" });
    }
  return (
    <section
      className="h-auto bg-[#FFD1DC]"
      id="menu"
    >
      <div className="min-h-screen w-full flex flex-col text-center gap-4 items-center justify-center max-[800px]:py-20">
        <motion.p 
        initial={{ y:-100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{ duration: 1}}
        className="text-xl text-rojizo">Menú</motion.p>
        <motion.h3 
        initial={{ y:-100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{ duration: 1.5}}
        className="text-5xl text-rosa">Revisa nuestras categorias</motion.h3>
        <div className="flex gap-10 max-[800px]:flex-col">
          <motion.div 
          initial={{x:-50, opacity:0}}
          whileInView={{ x:0, opacity:1}}
          transition={{ duration:0.5 }}
          className=" w-[270px] h-[400px] bg-white flex flex-col items-center justify-center rounded-3xl gap-4">
            <div className="w-[160px] h-[160px] bg-verde rounded-full flex items-center justify-center">
              <img src={pepero} className="w-[140px] h-[140px] rounded-full object-cover" alt="pepero" 
              width={140}
              height={140}/>
            </div>
            <h2 className="text-xl">Dulces coreanos</h2>
            <p className="text-sm w-4/5 text-marron">Postres coreanos auténticos, dulces y llenos de sabor.</p>
            <a href="#productos">
            <button onClick={handleCandyModal} className="bg-rojizo text-white p-2 px-4 rounded-lg hover:bg-green-800">Ver completo</button>
            </a>
          </motion.div>
          <motion.div 
          initial={{x:-50, opacity:0}}
          whileInView={{ x:0, opacity:1}}
          transition={{ duration:0.5, delay:0.5}}
          className=" w-[270px] h-[400px] bg-white flex flex-col items-center justify-center rounded-3xl gap-4">
            <div className="w-[160px] h-[160px] bg-rojizo rounded-full flex items-center justify-center">
              <img src={ramen}className="w-[140px] h-[140px] rounded-full" alt="comida ramen" 
              width={140}
              height={140}/>
            </div>
            <h2 className="text-xl">Platos principales</h2>
            <p className="text-sm w-4/5 text-marron">Sabores asiáticos que conquistan cada bocado.</p>
            <a href="#productos">
            <button onClick={handleMainProducts} className="bg-rojizo text-white p-2 px-4 rounded-lg hover:bg-green-800">Ver completo</button>
            </a>
          </motion.div>
          <motion.div
          initial={{x:-50, opacity:0}}
          whileInView={{ x:0, opacity:1}}
          transition={{ duration:0.5, delay:1}}
          className=" w-[270px] h-[400px] bg-white flex flex-col items-center justify-center rounded-3xl gap-4">
            <div className="w-[160px] h-[160px] bg-[#971423] rounded-full flex items-center justify-center"> 
              <img src={helados} className="w-[140px] h-[140px] rounded-full" alt="helados coreanos" 
              width={140}
              height={140}/>
            </div>
            <h2 className=" text-xl">Helados y Bebidas</h2>
            <p className="text-sm w-4/5 text-marron">Helados y bebidas, fríos y perfectos para compartir.</p>
            <a href="#productos">
            <button onClick={handleIceCreamModal} className="bg-rojizo text-white p-2 px-4 rounded-lg hover:bg-green-800">Ver completo</button>
            </a>
          </motion.div>
        </div>
      </div>
      {candyModal && <Producto category="dbCandies" id="productos" nameCategory="Dulces coreanos"/>}
      {iceCreamModal && <Producto category="dbIceCreamAndDrinks" id="productos" nameCategory="Helados y Bebidas"/>}
      {mainProductsModal && <Producto category="dbMainProducts" id="productos" nameCategory="Platos principales"/>}
    </section>
  );
}

export default Menu;
