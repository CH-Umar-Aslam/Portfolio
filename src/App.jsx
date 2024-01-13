import React from "react";
import Navbar from "./pages/LandingPage/Navbar";
import HeroSection from "./pages/LandingPage/HeroSection";
import DropDown from "./components/DropDown";
import Partner from "./components/Partner";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partner />
      {/* <NavT /> */}
    </div>
  );
};

export default App;
