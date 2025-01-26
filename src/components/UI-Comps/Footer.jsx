import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-[#232526] to-[#414345]  text-primary py-8 rounded-t-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-items-center text-white text-center ">
        <div className="flex flex-col items-center">
          <img
            src="/whitelogo.png"
            className="w-48"
            alt="skillhive logo"
            draggable="false"
          />
          <img
            src="/whitetext (1).png"
            className="w-36"
            alt="skillhive text"
            draggable="false"
          />
        </div>
        <div className="mx-4">
          <h1 className="font-bold text-lg my-4">Company & Legal</h1>
          <div className="flex space-y-4 underline flex-col">
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <a href="/privacy-policy.html" target="_blank">
              Privacy Policy
            </a>
            <a href="/terms-conditions.html" target="_blank">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div className="mx-4">
          <h1 className="font-bold text-lg my-4">Learning & Courses</h1>
          <div className="flex space-y-4 underline flex-col">
            <Link>All Courses</Link>
            <Link>Programming</Link>
            <Link>Design</Link>
            <Link>Video Editing</Link>
          </div>
        </div>
        <div className="mx-4">
          <h1 className="font-bold text-lg my-4">User Account & Support</h1>
          <div className="flex space-y-4 underline flex-col">
            <Link>My Account</Link>
            <Link>Login / Sign Up</Link>
            <Link>Help Center</Link>
          </div>
        </div>
        <div className="mx-4">
          <h1 className="font-bold text-lg my-4">Social & Community</h1>
          <div className="flex space-y-4 underline flex-col">
            <Link>Discord</Link>
            <Link>Instagram</Link>
            <Link>X</Link>
          </div>
        </div>
      </div>

      <hr className="w-[90%] mx-auto my-8 shadow-2xl opacity-50" />
      <p className="text-center">© {date} SkillHive. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
