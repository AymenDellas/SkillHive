import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-lg py-4 px-6  bg-button text-white text-xl  hover:bg-hover transition-colors duration-300 ease-out">
      {text}
    </button>
  );
};

export default Button;
