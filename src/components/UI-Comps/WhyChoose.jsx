import React from "react";
import { cards } from "../../../main";

const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-80  max-xl:mx-8">
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
      </div>
    </>
  );
};

export default Cards;
