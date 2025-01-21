import React from "react";
import { motion } from "motion/react";
import Form from "../UI-Comps/Form";
import { div } from "framer-motion/client";

const Contact = () => {
  return (
    <div className="pb-36">
      <div className="mx-80  max-xl:mx-8 bg-primary/50 p-8 rounded-lg shadow-2xl">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
