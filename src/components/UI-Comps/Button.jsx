import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-lg p-4  bg-button text-white text-xl  hover:bg-text/80 transition-colors duration-300 ease-out">
      {text}
    </button>
  );
};

export default Button;
