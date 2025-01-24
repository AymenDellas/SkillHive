import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="rounded-lg py-4 px-6 border border-text  text-text text-xl font-semibold hover:bg-text/10 transition-colors duration-300 ease-out">
      {text}
    </button>
  );
};

export default SecondaryButton;
