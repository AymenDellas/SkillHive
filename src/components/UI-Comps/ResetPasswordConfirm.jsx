import React, { useState } from "react";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

const ResetPasswordConfirm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get("oobCode"); // Code format - oobCode
    const handleVerifying = async () => {
      if (!oobCode) {
        setMessage("Invalid or missing reset code.");
        return;
      }
      setCode(oobCode);
      try {
        const userEmail = await verifyPasswordResetCode(auth, oobCode);
        setEmail(userEmail);
      } catch (error) {
        setMessage("invalid/expired code");
      }
    };
    handleVerifying();
  }, []);
  const handleReset = async (e) => {
    e.preventDefault();
    if (!code) {
      setMessage("Invalid Code");
      return;
    }
    if (!newPassword) {
      setMessage("Please enter a password");
      return;
    }
    try {
      await confirmPasswordReset(auth, code, newPassword);
      setSuccessMessage("Password updated successfully., redirecting...");
      setTimeout(() => navigate("/signin"), 3000);
    } catch (error) {
      setMessage("Error");
    }
  };
  return (
    <div className="z-50 pt-32">
      <div className="flex flex-col items-center space-y-8 border bg-white border-text p-12 shadow-xl w-fit mx-auto rounded-lg">
        <h1 className="text-3xl text-text font-bold">
          Reset <span className="text-text/70">Password</span>
        </h1>
        <form onSubmit={handleReset} className="flex flex-col space-y-4">
          {email && <p className="text-text">Resetting password for {email}</p>}
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="p-4 rounded-lg border border-text"
          />
          {successMessage && !message && (
            <p className="text-green-700 p-4 bg-green-400/20 border border-green-400 rounded-lg">
              {successMessage}
            </p>
          )}
          {message && <p className="text-red-500 p-4">{message}</p>}
          <button
            type="submit"
            className="rounded-lg p-2 bg-button text-white text-xl"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
