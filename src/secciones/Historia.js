import React from "react";
import { motion } from "framer-motion";
import imageHistoria from '../imagenes/imageHistoria.webp'
function Historia() {
  return (
    <section
      className="bg-white h-screen flex items-center justify-center max-md:flex-col-reverse max-md:h-auto max-md:py-20 gap-10 text-justify"
      id="historia"
    >
      <motion.div 
      initial={{ x: -100, opacity:0}}
      whileInView={{ x:0, opacity:1}}
      transition={{duration:1}}
      className="w-[380px] h-[380px] bg-white rounded-full">
        <img src={imageHistoria} alt="" width={380} height={380} loading="lazy"/>
      </motion.div>
      <div>
        <motion.h3
        initial={{ y:-100, opacity: 0 }}
        whileInView={{ y:0, opacity:1}}
        transition={{ duration:0.8}}
        className="text-5xl pb-4 text-rojizo">Nuestra Historia</motion.h3>
        <motion.p 
        initial={{ y:-100, opacity: 0 }}
        whileInView={{ y:0, opacity:1}}
        transition={{ duration:1}}
        className="max-w-80 text-colormrnoscuro">
          Korean Mania nació del amor por la cultura coreana y el deseo de
          compartirla con el mundo. Desde nuestras recetas caseras hasta la
          decoración tradicional, queremos que cada visita sea un viaje
          gastronómico
        </motion.p>
        <div className="flex text-rosa pt-4 justify-between">
          <motion.div
          initial={{ x:-100, opacity: 0}}
          whileInView={{ x:0, opacity:1}}
          transition={{ duration:0.8}}
          className="max-w-36 text-2xl">
            <h4>Visión</h4>
            <p className="text-base pt-4 text-black">
              Ser el lugar favorito en Huancayo para vivir la experiencia
              auténtica de la comida coreana y asiática.
            </p>
          </motion.div>
          <motion.div 
          initial={{ x:100, opacity: 0}}
          whileInView={{ x:0, opacity:1}}
          transition={{ duration:0.8}}
          className="max-w-36 text-2xl">
            <h4>Misión</h4>
            <p className="text-base pt-4 text-black">
              Ofrecer sabores tradicionales con calidad, pasión y un ambiente
              que conecte a las personas con la cultura asiática.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Historia;
