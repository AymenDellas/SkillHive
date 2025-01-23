import React, { useState } from "react";
import { auth } from "../../../firebase";
import {
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  SignInMethod,
} from "firebase/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePasswordResetEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    const signinMethods = await fetchSignInMethodsForEmail(auth, email);
    const isGoogleAccount = signinMethods.includes("google.com");
    if (isGoogleAccount) {
      setMessage("The email is already registered with google");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email, {
        url: "http://localhost:800/reset-password-confirm",
      });
      setSuccessMessage("Email sent! Please check your inbox.");
    } catch (err) {
      console.error("Password reset error:", err);
      setMessage("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="z-50 pt-32">
      <div className="flex flex-col items-center space-y-8 border bg-white border-text p-12 shadow-xl w-fit mx-auto rounded-lg">
        <h1 className="text-3xl text-text font-bold">
          Request <span className="text-text/70">Password Reset</span>
        </h1>
        <form
          onSubmit={handlePasswordResetEmail}
          className="flex flex-col w-full space-y-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-lg border border-text"
          />
          {successMessage && (
            <p className="text-green-700 p-4 bg-green-400/20 border border-green-400 rounded-lg">
              {successMessage}
            </p>
          )}
          {message && !successMessage && (
            <p className="text-red-700 p-4 bg-red-400/20 border border-red-400 rounded-lg">
              {message}
            </p>
          )}
          <button
            type="submit"
            className="rounded-lg p-2  m bg-button text-white text-xl"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
