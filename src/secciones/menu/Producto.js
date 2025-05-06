import React from "react";
import { motion } from "framer-motion";
import { menudb } from "./menudb.js";
import StarSVG from "../../icons/StarSVG.jsx";

const dbmenuproducts = [...menudb];

const dbCandies = [...dbmenuproducts[0].candies];
const dbMainProducts = [...dbmenuproducts[0].mainProducts];
const dbIceCreamAndDrinks = [...dbmenuproducts[0].iceCreamAndDrinks];

function Producto({ category, id, nameCategory }) {
  let selectedCategory = [];
  if (category === "dbCandies") {
    selectedCategory = [...dbCandies];
  } else if (category === "dbMainProducts") {
    selectedCategory = [...dbMainProducts];
  } else if (category === "dbIceCreamAndDrinks") {
    selectedCategory = [...dbIceCreamAndDrinks];
  }

  return (
    <div
      id={id}
      className="min-h-screen bg-rosa/70 px-6 py-10 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="flex w-full justify-around items-center">
        <motion.h2 
        initial={{x:-100, opacity:0}}
        whileInView={{ x:0, opacity:1}}
        transition={{duration:0.8}}
        className="text-5xl font-bold text-white max-sm:text-4xl">
          {nameCategory}
        </motion.h2>
        <div className="flex gap-2">
          <motion.div
          initial={{y:-50, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.5}}
          className="w-[40px] h-[40px] bg-white rounded-full"></motion.div>
          <motion.div 
          initial={{y:-60, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.8}}
          className="w-[40px] h-[40px] bg-pink-600 rounded-full"></motion.div>
          <motion.div
          initial={{y:-70, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1}}
          className="w-[40px] h-[40px] bg-rojizo rounded-full"></motion.div>
        </div>
      </div>

      <motion.div 
      initial={{scale:0.5, opacity:0}}
      whileInView={{scale:1, opacity:1
      }}
      transition={{duration:0.8}}
      className="relative w-4/5  min-w-[300px] overflow-x-hidden mt-10 xl:w-4/6 rounded-3xl">
        <div className="flex space-x-4 overflow-x-scroll scroll-x-custom">
          {[...selectedCategory, ...selectedCategory].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col min-w-[270px] h-[400px] items-center justify-center bg-white rounded-xl p-2"
            >
              <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-pink-600 rounded-tr-xl rounded-bl-xl"></div>
              <img
                src={require(`../../imagenes/${item.image}.webp`)}
                alt={item.name}
                className="w-[140px] h-[140px] object-cover rounded-xl"
              />
              <div className="h-[140px] mt-8 w-[200px]">
                <p className="mt-2 text-2xl font-bold text-verde text-start">
                  {item.name}
                </p>
                <p className="text-lg text-gray-600 pt-2">{item.description}</p>
                <div className="flex justify-between pt-2">
                  <p className="text-2xl text-rojizo font-bold pl-10">
                    S/. {item.price}
                  </p>
                  <p className="text-lg flex items-center">
                    <StarSVG /> {item.stars}
                  </p>
                </div>
              </div>
              
            </div>

          ))}
          
        </div>
        
      </motion.div>
    </div>
  );
}
export default Producto;
