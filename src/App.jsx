import React from "react";
import LandingPage from "./components/LandingPage";
import NavLayout from "./components/Layout-Comps/NavLayout";
import Contact from "./components/Layout-Comps/Contact";
import SignUp from "./components/UI-Comps/SignUp";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<NavLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
