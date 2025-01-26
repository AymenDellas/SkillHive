import React, { useState } from "react";
import { auth, googleProvider } from "../../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import { HashLoader } from "react-spinners";
import { setPersistence, browserLocalPersistence } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setMessage("Incorrect Email/Password");
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
    <div className="z-50   pt-36">
      <div className="flex flex-col justify-between  border bg-white border-text  shadow-xl  w-fit    px-12 py-8  mx-auto rounded-lg">
        <div className="space-y-1 mb-4 flex flex-col items-center mx-20">
          <div className="">
            <img src="/blacklogo.png" alt="skillhive logo" className="w-32" />
          </div>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p>Login to your account</p>
        </div>
        <form onSubmit={handleSignup} className=" flex flex-col  space-y-8">
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="rounded-lg space-x-4 p-2  text-text border border-text/20   hover:bg-text/10 transition-colors duration-300 ease-out flex justify-center items-center"
          >
            <img src="/google.svg" className="w-6" alt="Google icon" />
            <p>Continue with google</p>
          </button>
          <div className="flex items-center">
            <div className="w-1/2 h-0.5 bg-black/20 rounded-full" />
            <p className="mx-2">or</p>
            <div className="w-1/2 h-0.5 bg-black/20 rounded-full" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="name@example.com"
              className="px-4 py-2 rounded-xl border border-text/20 focus:ring-2  transition-all duration-100 ease-out outline-none"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="flex justify-between">
              <p>Password</p>{" "}
              <Link
                to="/reset-password"
                className=" text-stone-500  text-right"
              >
                Forgot password?
              </Link>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Password"
              className="px-4 py-2 rounded-xl border border-text/20 focus:ring-2  transition-all duration-100 ease-out outline-none"
            />
          </div>

          {message && (
            <div className="text-red-500 bg-red-200 p-4 rounded-lg border border-red-500 flex items-center space-x-2 ">
              <Info size={20} />
              <p>{message}</p>
            </div>
          )}

          <button
            type="submit"
            className={`flex justify-center space-x-2 items-center  rounded-xl p-2  bg-button text-white text-xl   transition-colors duration-200 ease-out ${
              isLoading ? "bg-button/60" : "bg-button hover:bg-text/80"
            }`}
          >
            {isLoading ? <HashLoader color="white" size={25} /> : ""}

            <p>Login</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
