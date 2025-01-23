import React from "react";
import Button from "../UI-Comps/Button";
import SecondaryButton from "../UI-Comps/SecondaryButton";
import { motion, easeOut } from "motion/react";
const Hero = () => {
  return (
    <>
      <div className="flex relative flex-col items-center space-y-8 py-48">
        <div className="text-5xl lg:text-6xl z-10 font-extrabold justify-center text-text text-center ">
          <motion.h1
            initial={{ filter: "blur(10px)", y: -20, opacity: 0 }}
            animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{ ease: easeOut, duration: 1 }}
          >
            Master the Skills of Tomorrow,{" "}
          </motion.h1>
          <motion.div
            initial={{ filter: "blur(10px)", y: 20, opacity: 0 }}
            animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{ ease: easeOut, duration: 1 }}
            className=" relative underline underline-offset-8  z-10 rounded-sm bg-text text-white p-4 w-fit mx-auto my-4"
          >
            <div className="absolute -bottom-12  -right-12">
              <img
                src="/choose-orange-shape.svg"
                draggable="false"
                className="w-16 rotate-90"
                alt=""
              />
            </div>
            <motion.h1
              initial={{ filter: "blur(10px)", y: -20, opacity: 0 }}
              animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              transition={{ ease: easeOut, duration: 1 }}
            >
              Today!{" "}
            </motion.h1>
            <div className="absolute w-2 h-2 bg-button -top-2 -left-2"></div>
            <div className="absolute w-2 h-2 bg-button -top-2 -right-2"></div>
            <div className="absolute w-2 h-2 bg-button -bottom-2 -left-2"></div>
            <div className="absolute w-2 h-2 bg-button -bottom-2 -right-2"></div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className=" z-10 text-2xl text-pretty text-center mx-4 lg:w-1/2"
        >
          {"Learn programming, graphic design, and video editing from industry experts. Access high-quality courses, master real-world skills, and elevate your career—all in one place."
            .split(" ")
            .map((word, i) => {
              return (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
                    visible: { filter: "blur(0px)", y: 0, opacity: 1 },
                  }}
                  transition={{ ease: easeOut, duration: 0.5 }}
                  className="mx-1 inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
        </motion.div>
        <div className="flex z-10 space-x-4">
          <motion.div
            initial={{ filter: "blur(10px)", x: -20, opacity: 0 }}
            animate={{ filter: "blur(0px)", x: 0, opacity: 1 }}
            transition={{ ease: easeOut, duration: 1 }}
          >
            <Button text={"Get Started"} />
          </motion.div>
          <motion.div
            initial={{ filter: "blur(10px)", x: 20, opacity: 0 }}
            animate={{ filter: "blur(0px)", x: 0, opacity: 1 }}
            transition={{ ease: easeOut, duration: 1 }}
          >
            <SecondaryButton text={"Browse Courses"} />
          </motion.div>
        </div>
        <div className="blob size-[700px] max-lg:size-[400px] absolute top-0 rounded-full  bg-[#00000075] z-0 "></div>
      </div>
    </>
  );
};

export default Hero;
