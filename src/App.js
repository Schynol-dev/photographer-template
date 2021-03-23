import "./assets/css/main.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Do from "./components/Do/Do";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Do />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
