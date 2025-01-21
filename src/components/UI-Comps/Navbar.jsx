import { useScroll } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import {
  ChevronDown,
  Clapperboard,
  PaintbrushVertical,
  SquareCode,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      console.log(auth.currentUser.email);
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert("Something went wrong !");
    }
  };
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="fixed w-full top-0  bg-primary backdrop-blur-xl  z-50 rounded-b-xl">
      <div className="flex justify-between p-2 items-center mx-96 ">
        <Link to="/">
          <img src="/test.png" className="w-48" draggable="false" alt="" />
        </Link>
        <ul className="flex items-center space-x-8 text-xl">
          <div onClick={() => setShowDropdown(!showDropdown)}>
            <li className="relative flex items-center hover:text-text transition-colors ease-out duration-200 cursor-pointer">
              <p>Courses</p>
              <ChevronDown
                className={`${
                  showDropdown ? "rotate-180" : "rotate-0"
                } transition-all duration-200 ease-out`}
              />
            </li>
            <div
              className={`bg-white ${
                showDropdown
                  ? "flex translate-y-0 opacity-100"
                  : "invisible opacity-0 translate-y-11"
              }  rounded-xl shadow-2xl z-50  mt-4 flex-col items-center absolute  transition-all duration-500 ease-out`}
            >
              <Link className="hover:bg-black/10 transition-colors ease-out duration-200 p-4 rounded-lg w-full text-center flex items-center space-x-1">
                <SquareCode />
                <p>Programming</p>
              </Link>
              <Link className="hover:bg-slate-300/50 transition-colors ease-out duration-200 p-4 rounded-lg w-full text-center flex items-center space-x-1">
                <Clapperboard />
                <p>Video Editing</p>
              </Link>
              <Link className="hover:bg-slate-300/50 transition-colors ease-out duration-200 p-4 rounded-lg w-full text-center flex items-center space-x-1">
                <PaintbrushVertical />
                <p>Graphic Design</p>
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className="hover:text-text transition-colors ease-out duration-200"
          >
            <li>Contact</li>
          </Link>
          {auth.currentUser ? (
            <Link
              onClick={handleSignout}
              className="border border-text/50  text-text p-2 rounded-lg  hover:bg-text/20 transition-colors ease-out duration-200 "
            >
              <li>Sign out</li>
            </Link>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                to="/signin"
                className="border border-text/50  text-text p-2 rounded-lg  hover:bg-text/20 transition-colors ease-out duration-200 "
              >
                <li>Sign in</li>
              </Link>
              <Link
                to="/signup"
                className="border border-text/50 bg-text/80 text-white p-2 rounded-lg  hover:bg-text transition-colors ease-out duration-200 "
              >
                <li className="">Sign up</li>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
