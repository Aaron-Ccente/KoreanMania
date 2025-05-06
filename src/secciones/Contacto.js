import { motion } from "framer-motion";
import MapView from "./contacto/MapView.js";
import PhoneSVG from "../icons/PhoneSVG.jsx";
import logoTikTok from "../imagenes/logoTikTok.webp";
import logoWhatsApp from "../imagenes/logoWhatsApp.webp";
import logoInstagram from "../imagenes/logoInstagram.webp";
import SiguienteBlackSVG from "../icons/SiguienteBlackSVG.jsx";

function Contacto() {
  return (
    <section className="bg-[#FFD1DC] py-24 px-4 relative" id="contacto">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-rojizo text-center mb-8"
      >
        Visítanos
      </motion.h2>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-rojizo text-white max-w-max mx-auto px-6 py-3 rounded-lg text-center text-base font-medium mb-10"
      >
        🕒 Horario de atención
        <span className="block text-[#ffe680] font-semibold mt-1">
          Martes - Domingo | 2:30pm - 10:30pm
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-wrap gap-10 justify-between">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 min-w-[300px]"
        >
          <p className="flex items-center gap-2 text-lg mb-3">
            <i>📍</i>Av. Giráldez 444, Huancayo
          </p>
          <p className="flex items-center gap-2 text-lg mb-3">
            <PhoneSVG />
            917 215 047
          </p>

          <div className="mt-6">
            <p className="text-lg font-semibold mb-2 text-rojizo">
              Comunícate también por nuestras redes:
            </p>
            <ul className="space-y-2 text-base">
              <li className="bg-white rounded-xl">
              <a className="flex items-center py-2 px-2 justify-between"  href="https://www.tiktok.com/@koreanmaniaasiafood" target="_blank " rel="noopener noreferrer">
              <div className="flex items-center gap-2">
                <img
                  src={logoTikTok}
                  loading="lazy"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt="logo de Tik Tok"
                />{" "}
                KoreanMania
                </div>
                  <SiguienteBlackSVG/>
                  </a>
              </li>
            
              <li className=" bg-white rounded-xl">
                <a className="flex items-center py-2 px-2 justify-between"  href="https://www.instagram.com/reel/DF6KZU-P1As/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2">
                  <img
                    src={logoInstagram}
                    loading="lazy"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                    alt="logo de Instagram"
                  />{" "}
                  @korean_mania_huancayo
                  </div>
                  <SiguienteBlackSVG/>
                  </a>
                </li>
             
              <li className="bg-white rounded-xl">
              <a className="flex items-center py-2 px-2 justify-between"  href="https://www.instagram.com/reel/DF6KZU-P1As/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2">
                <img
                  src={logoWhatsApp}
                  loading="lazy"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt="logo de WhatsApp"
                />{" "}
                917 215 047
                </div>
                  <SiguienteBlackSVG/>
                  </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Mapa */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 min-w-[300px]"
        >
          <div className="rounded-lg overflow-hidden shadow-md">
            <MapView />
          </div>
        </motion.div>
      </div>

      {/* Footer opcional */}
      <footer className="absolute bottom-0 py-2 left-0 text-center text-white bg-rosa w-full text-sm ">
        <div className="xl:flex xl:flex-row-reverse xl:gap-10 w-full h-full flex flex-col gap-2 items-center justify-center">
          <p>© Todos los derechos reservados - Korean Mania Huancayo</p>
          <div className="flex justify-center gap-3">
          <a className="flex items-center py-2 px-2 justify-between"  href="https://www.tiktok.com/@koreanmaniaasiafood" target="_blank" rel="noopener noreferrer">
            <img
              src={logoTikTok}
              loading="lazy"
              width={20}
              height={20}
              className="w-5 h-5"
              alt="logo de Tik Tok"
            />
          </a>
          <a className="flex items-center py-2 px-2 justify-between"  href="https://www.instagram.com/reel/DF6KZU-P1As/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">
            <img
              src={logoInstagram}
              loading="lazy"
              width={20}
              height={20}
              className="w-5 h-5"
              alt="logo de Instagram"
            />
            </a>
            <a className="flex items-center py-2 px-2 justify-between"  href="https://www.instagram.com/reel/DF6KZU-P1As/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">
            <img
              src={logoWhatsApp}
              loading="lazy"
              width={20}
              height={20}
              className="w-5 h-5"
              alt="logo de WhatsApp"
            />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contacto;
