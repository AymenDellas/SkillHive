import React from "react";
import Hero from "./Layout-Comps/Hero";
import WhyChoose from "./UI-Comps/WhyChoose";
import Courses from "./UI-Comps/Courses";
import Footer from "./UI-Comps/Footer";
import { easeOut, motion } from "motion/react";
const LandingPage = () => {
  return (
    <div className="min-h-screen relative">
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

      <Courses />
      <Footer />
    </div>
  );
};

export default LandingPage;
