import React from "react";
import Hero from "./components/Layout-Comps/Hero";
import WhyChoose from "./components/UI-Comps/WhyChoose";
import Courses from "./components/UI-Comps/Courses";
import Contact from "./components/Layout-Comps/Contact";
import { easeOut, motion } from "motion/react";

const App = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <div className="absolute -z-50 inset-0  bg-background bg-[linear-gradient(to_right,#80808012_3px,transparent_3px),linear-gradient(to_bottom,#80808012_3px,transparent_3px)] bg-[size:24px_24px]" />

        <Hero />
        <motion.div
          initial={{ filter: "blur(10px)", y: -20, opacity: 0 }}
          animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
          transition={{ ease: easeOut, duration: 1 }}
          className="flex flex-col items-center my-12 space-y-4"
        >
          <h1 className="text-5xl text-text font-bold z-10">
            Why Choose <span className="text-text/70">Our Platform?</span>
          </h1>
          <p className="text-text text-lg z-10">
            Discover a new way of learning from passionate individuals eager to
            share their knowledge
          </p>
        </motion.div>
        <WhyChoose />
        <div className="flex flex-col items-center my-12 space-y-4">
          <h1 className="text-5xl text-text font-bold">
            Featured <span className="text-text/70">Courses</span>
          </h1>
          <p className="text-text text-lg">
            Explore our initial offerings in programming, video editing, and
            design
          </p>
        </div>
        <Courses />
        <div className="flex flex-col items-center my-12 space-y-4">
          <h1 className="text-5xl text-text font-bold">
            Get in <span className="text-text/70">Touch</span>
          </h1>
          <p className="text-text text-lg">
            Have questions or need assistance? Fill out the form below, and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default App;
