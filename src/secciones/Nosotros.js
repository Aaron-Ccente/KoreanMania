import React from "react";
import imageBackgroundNosotros from "../imagenes/fondoPrincipal.webp";
import { motion } from "framer-motion";
import SiguienteSVG from "../icons/SiguienteSVG.jsx";
function Nosotros() {
  return (
    <section
      className="bg-fondoprincipal h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageBackgroundNosotros})` }}
      id="nosotros"
    >
      <div className="relative w-full pt-14 h-screen flex items-center justify-center">
        <div className="h-[510px]  max-md:max-w-[450px] max-md:text-center">
          <div className="text-7xl max-md:text-5xl tracking-wider max-w-[620px] text-white">
            <h1 className="p-8">¡Comida Coreana en Huancayo!</h1>
          </div>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center pl-20 pt-4  pb-10 text-4xl text-rojizo"
          >
            Y mucho más...
          </motion.p>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-[400px] max-md:pl-10 max-md:text-base max-md:max-w-[250px] pb-8 text-lg text-rosa ml-20 text-justify"
          >
            Descubre los sabores auténticos de Corea y Asia, sin salir de
            Huancayo. Platos vibrantes, ingredientes frescos y la sazón que
            enamora.
          </motion.h2>
          <div className="w-full flex max-md:justify-center md:pt-8 justify-end max-md:pt-10">
            <motion.a
              href="#menu"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="rounded-3xl bg-rojizo w-[128px] h-[38px] text-xl text-white flex items-center justify-center z-30"
            >
              <p>Ver Menú</p>
              <SiguienteSVG className="ml-2 w-4 h-4" />
            </motion.a>
          </div>
        </div>
        <img
          className="w-[420px] h-[450px] -ml-44 max-md:hidden"
          alt="kimchi"
          width={420}
          height={450}
          fetchPriority="high"
          src="./kimchimage.webp"
        />
      </div>
    </section>
  );
}

export default Nosotros;
