import "./assets/css/main.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Do from "./components/Do/Do";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Do />
      <About />
    </>
  );
}

export default App;
