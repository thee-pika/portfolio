import About from "./components/About";
import Connect from "./components/connect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
}
