import React, { useState } from "react";
import { auth, googleProvider } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email");
      return;
    }
    if (!password) {
      setMessage("Please enter your password");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("This email is already registered , try signing in");
    } catch (error) {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    }
  };
  const handleGoogleSignup = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      setMessage("Somethin went wrong");
    }
  };
  return (
    <div className="z-50  pt-32">
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
        <form onSubmit={handleSignup} className=" flex flex-col space-y-4 ">
          <div className="flex justify-between items-center space-x-2">
            <label htmlFor="email">Email :</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Email"
              className="p-4 rounded-lg border border-text border-dashed outline-none"
            />
          </div>
          <div className="flex justify-between items-center space-x-2">
            <label htmlFor="password">Password : </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Password"
              className="p-4 rounded-lg border border-text border-dashed outline-none"
            />
          </div>
          {message && <p className="text-red-500">Error : {message}</p>}
          <hr className="bg-black/20 h-1 rounded-full w-1/3 mx-auto" />
          <p>OR:</p>
          <hr className="bg-black/20 h-1 rounded-full w-1/2 mx-auto" />
          <button
            type="submit"
            onClick={handleGoogleSignup}
            className="rounded-full space-x-4 p-2  text-text border border-text text-xl  hover:bg-hover transition-colors duration-300 ease-out flex justify-center items-center"
          >
            <img src="/google.svg" className="w-8" alt="Google icon" />
            <p>Continue with google</p>
          </button>
          <button
            type="submit"
            className="rounded-lg p-2  bg-button text-white text-xl  hover:bg-hover transition-colors duration-300 ease-out"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
