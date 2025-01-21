import React, { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { em } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
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
      navigate("/");
    } catch (error) {
      setMessage("This email is not registered , try signing up");
    }
  };
  return (
    <div className="z-50  pt-64">
      <div className="flex flex-col items-center space-y-8 border bg-white border-text p-12 shadow-xl w-fit mx-auto rounded-lg">
        <div className="flex flex-col items-center">
          <img src="/logoo.png" className="w-48" alt="" />
          <div className="flex flex-col items-center  space-y-4">
            <h1 className="text-3xl text-text font-bold">
              Login to you <span className="text-text/70">Account</span>
            </h1>
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
          {message && <p className="text-red-500">{message}</p>}
          <button
            type="submit"
            className="rounded-lg p-2  bg-button text-white text-xl  hover:bg-hover transition-colors duration-300 ease-out"
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
