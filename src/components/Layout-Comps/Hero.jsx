import React from "react";
import Button from "../UI-Comps/Button";
import SecondaryButton from "../UI-Comps/SecondaryButton";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="flex relative flex-col items-center space-y-8 py-48">
        <div className="relative text-5xl lg:text-6xl z-10 font-extrabold justify-center text-text text-center ">
          <h1>Learn Web Development & UI/UX</h1>
          <div className=" relative underline underline-offset-8  z-10 rounded-xl bg-text/20 border-text border text-text p-4 w-fit mx-auto my-4">
            <h1>The Right Way</h1>
          </div>
        </div>
        <p className=" z-10 text-2xl text-pretty text-center mx-4 text-text lg:w-1/2">
          Skip the fluff—our courses focus on practical skills, real-world
          projects, and insights from creators who actually do the work. No
          outdated theory, just hands-on learning to help you build and design
          with confidence.{" "}
        </p>
        <div className="flex z-10 space-x-4">
          <Link>
            <Button text={"Get Started"} />
          </Link>
          <Link to="/courses">
            <SecondaryButton text={"Browse Courses"} />
          </Link>
        </div>

        <div class="absolute  right-48 -z-10 bottom-0 h-[500px] w-[500px] rounded-full bg-[rgba(173,109,244,0.6)] opacity-50 blur-[90px]"></div>
      </div>
    </>
  );
};

export default Hero;
