import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-[var(--color-bg)] pb-8 lg:px-16 md:px-12 px-4">
      <Header />
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
