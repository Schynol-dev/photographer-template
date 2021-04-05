import React from "react";

import "./assets/css/main.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Do from "./components/Do/Do";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Do />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
