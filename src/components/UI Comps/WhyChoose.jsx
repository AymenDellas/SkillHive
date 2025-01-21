import React from "react";
import { cards } from "../../../main";
import { motion, easeOut } from "motion/react";
const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mx-80  max-xl:mx-8">
        {cards.map((card, index) => {
          return (
            <motion.div
              initial={{ filter: "blur(10px)", y: -40, opacity: 0 }}
              whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              transition={{ ease: easeOut, duration: 1, delay: 0.1 * index }}
              className="space-y-4 rounded-lg p-4 bg-primary/50 border border-text/20 hover:border-text transition-colors duration-300 ease-out"
              key={index}
            >
              <div className="p-2 border-text/50 border shadow-2xl w-fit rounded-lg">
                <card.icon size={40} color="#8293F2" />
              </div>
              <h1 className="text-2xl font-bold">{card.title}</h1>
              <p className="text-lg">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
