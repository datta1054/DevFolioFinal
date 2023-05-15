import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Shared/ErrorPage";
import Home from "./Pages/Home";
import About from "./Shared/About";
import Contact from "./Shared/Contact";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import Appointment from "./Pages/Appointment";
import Chat from "./Pages/Chat";
import GetStarted from "./Pages/GetStarted";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/appointment" Component={Appointment} />
          <Route path="/chat" Component={Chat} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/getStarted" Component={GetStarted} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
