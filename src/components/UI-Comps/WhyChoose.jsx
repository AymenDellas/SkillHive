import React from "react";
import { cards } from "../../../main";

const Cards = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-3 justify-center gap-8 mx-80  max-xl:mx-8">
        {cards.map((card, index) => {
          return (
            <div
              className="space-y-4 rounded-lg p-4 bg-cardBg border border-text/40 hover:border-text hover:shadow-xl transition-all duration-300 ease-out"
              key={index}
            >
              <div className="p-2 border-text/50 border shadow-2xl w-fit rounded-lg">
                <card.icon size={40} color="#8293F2" />
              </div>
              <h1 className="text-2xl font-bold">{card.title}</h1>
              <p className="text-lg">{card.description}</p>
            </div>
          );
        })}
        <div class="absolute bottom-0  left-0 -translate-x-full translate-y-72 -z-10  h-[500px] w-[500px]  rounded-full bg-[rgba(173,109,244,0.6)] opacity-50 blur-[90px]"></div>
      </div>
    </>
  );
};

export default Cards;
