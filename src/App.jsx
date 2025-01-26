import React from "react";
import LandingPage from "./components/LandingPage";
import NavLayout from "./components/Layout-Comps/NavLayout";
import Contact from "./components/Layout-Comps/Contact";
import SignUp from "./components/UI-Comps/SignUp";
import SignIn from "./components/UI-Comps/SignIn";
import ResetPassword from "./components/UI-Comps/ResetPassword";
import ResetPasswordConfirm from "./components/UI-Comps/ResetPasswordConfirm";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import CoursesPage from "./components/UI-Comps/CoursesPage";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<NavLayout />}>
          <Route path="/" element={<LandingPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/reset-password-confirm"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/courses" element={<CoursesPage />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
