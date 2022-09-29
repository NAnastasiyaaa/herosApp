import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import React from "react";
import AddHero from "./components/AddHero";
import Heros from "./components/Hero/Heros";
import HeroDetail from "./components/Hero/HeroDetail";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/add" element={<AddHero />} exact />
          <Route path="/heros" element={<Heros />} exact />
          <Route path="/heros/:id" element={<HeroDetail />} exact />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
