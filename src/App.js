import React from 'react';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { Topbar } from "./components/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default App;
