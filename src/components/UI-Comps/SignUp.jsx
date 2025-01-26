import React, { useState } from "react";
import { auth, googleProvider } from "../../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Info } from "lucide-react";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username) {
      setMessage("Please enter a username");
      return;
    }
    if (!email) {
      setMessage("Please enter your email");
      return;
    }
    if (!password) {
      setMessage("Please enter your password");
      return;
    }
    if (!isAgree) {
      setMessage("You don't agree with the terms & policy");
      return;
    }
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      navigate("/");

      setMessage("This email is already registered , try signing in");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setIsLoading(false);
        setMessage("This email is already registered , try signing in");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
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
    <div className="z-50   pt-32">
      <div className="flex flex-col justify-between  border bg-white border-text  shadow-xl  w-fit    px-12 py-4  mx-auto rounded-lg">
        <div className="space-y-1 mb-4 flex flex-col items-center mx-12">
          <div className="">
            <img src="/blacklogo.png" alt="skillhive logo" className="w-32 " />
          </div>
          <h1 className="text-2xl font-bold">Get Started Now</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSignup} className=" flex flex-col  space-y-4">
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
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              type="text"
              placeholder="John Doe"
              className="px-4 py-2 rounded-xl border border-text/20 focus:ring-2  transition-all duration-100 ease-out outline-none"
            />
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
              Password
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
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="terms"
              value={isAgree}
              onChange={(e) => setIsAgree(e.target.checked)}
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <a href="/terms-conditions.html" className="underline">
                Terms
              </a>{" "}
              &{" "}
              <a href="/privacy-policy.html" className="underline">
                Policy
              </a>
            </label>
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

            <p>Register</p>
          </button>
          <div className="">
            Already have an account ?{" "}
            <Link to="/signin" className="text-stone-600 underline ">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
