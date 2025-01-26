import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Menu, X, Tally3 } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/*large screens*/}
      <nav className=" fixed w-full top-0  bg-primary/50 backdrop-blur-xl shadow-xl z-50 rounded-b-xl">
        <div className="flex justify-between p-2 items-center  mx-2 xl:mx-48 2xl:mx-96  ">
          <Link to="/">
            <img src="/test.png" className="w-48" draggable="false" alt="" />
          </Link>
          <ul className="hidden lg:flex items-center space-x-8 ">
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
                <Link
                  to="/courses"
                  className="hover:bg-black/10 transition-colors ease-out duration-200 p-4 rounded-lg w-full text-center flex items-center space-x-1"
                >
                  <Tally3 />
                  <p>All</p>
                </Link>
                <div className="ml-4">
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
                  className="border border-text/50 bg-text text-white p-2 rounded-lg  hover:bg-text/80 transition-colors ease-out duration-200 "
                >
                  <li className="">Sign up</li>
                </Link>
              </div>
            )}
          </ul>
          {/*small screens*/}
          <div className="block lg:hidden ">
            <Menu
              className="cursor-pointer"
              size={35}
              onClick={() => setIsOpen(!isOpen)}
            />
            <div
              className={`bg-background text-primary border border-text/50 transition-all duration-500 ease-out w-[70%] top-24 p-8 rounded-lg  shadow-2xl right-4 z-50 absolute h-fit${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[110%] opacity-0"
              } `}
            >
              <hr className="h-0.5 bg-text/50 mb-4 w-1/2 mx-auto" />
              <ul className="space-y-8">
                <div
                  className="space-y-4"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div>
                    <li className="relative text-3xl flex items-center hover:text-primary/70 transition-colors ease-out duration-200 cursor-pointer">
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
                      <Link className="hover:bg-black/10  text-text transition-colors ease-out duration-200 p-4 rounded-lg w-full text-center flex items-center space-x-1">
                        <SquareCode />
                        <p>Web development</p>
                      </Link>

                      <Link className="hover:bg-slate-300/50 text-text  transition-colors ease-out duration-200 p-4 rounded-lg w-full text-center flex items-center space-x-1">
                        <PaintbrushVertical />
                        <p>UI/UX Design</p>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="/contact"
                      className="hover:text-primary/70 text-3xl transition-colors ease-out duration-200"
                    >
                      <li>Contact</li>
                    </Link>
                  </div>
                </div>
                <div>
                  {auth.currentUser ? (
                    <Link
                      onClick={handleSignout}
                      className="border border-text/50  text-text p-2 rounded-lg  hover:bg-text/20 transition-colors ease-out duration-200 "
                    >
                      <li>Sign out</li>
                    </Link>
                  ) : (
                    <div className="flex flex-col justify-center space-y-4 text-center">
                      <Link
                        to="/signin"
                        className="border border-text/50  text-text p-2 rounded-lg  hover:bg-text/10 transition-colors ease-out duration-200 "
                      >
                        <li>Sign in</li>
                      </Link>
                      <Link
                        to="/signup"
                        className="border border-text/50 bg-button text-white p-2 rounded-lg  hover:bg-button/80 transition-colors ease-out duration-200 "
                      >
                        <li className="">Sign up</li>
                      </Link>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/*small screens */}
    </>
  );
};

export default Navbar;
