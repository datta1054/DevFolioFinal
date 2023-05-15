import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Contact from "../Shared/Contact";
import About from "../Shared/About";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page6 from "./Page6";

function Home() {
  return (
    <div>
      
      <Page1 />
      <Page2 />
      <Page3 />
      <Page6 />
    </div>
  );
}

export default Home;
