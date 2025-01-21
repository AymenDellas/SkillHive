import React from "react";
import Button from "./Button";

const SignUp = () => {
  return (
    <div className="z-50  pt-64">
      <div className="flex flex-col items-center space-y-8 border bg-white border-text p-12 shadow-xl w-fit mx-auto rounded-lg">
        <div className="flex flex-col items-center">
          <img src="/logoo.png" className="w-48" alt="" />
          <div className="flex flex-col items-center  space-y-4">
            <h1 className="text-3xl text-text font-bold">
              Create Your <span className="text-text/70">Account</span>
            </h1>
            <p className="text-text text-lg">
              Join SkillHive and start learning today
            </p>
          </div>
        </div>
        <form action="" className=" flex flex-col space-y-4 ">
          <div className="flex justify-between items-center space-x-2">
            <label htmlFor="email">Email :</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-4 rounded-lg border border-text border-dashed outline-none"
            />
          </div>
          <div className="flex justify-between items-center space-x-2">
            <label htmlFor="password">Password : </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="p-4 rounded-lg border border-text border-dashed outline-none"
            />
          </div>
          <button className="rounded-lg p-2  bg-button text-white text-xl  hover:bg-hover transition-colors duration-300 ease-out">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
