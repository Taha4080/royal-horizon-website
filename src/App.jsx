

import { Routes, Route, Router } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Companies from "./pages/companies/Companies";
import Horizon from "./pages/companies/Horizon";
import Overseas from "./pages/companies/Overseas";
import Fazaa from "./pages/companies/Fazaa";
import EmployeeLogin from "./pages/EmployeeLogin";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
          else e.target.classList.remove("is-visible"); // يخليه “refresh”
        });
      },
      { threshold: 0.2 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/horizon" element={<Horizon />} />
        <Route path="/companies/overseas" element={<Overseas />} />
        <Route path="/companies/fazaa" element={<Fazaa />} />
        <Route path="/EmployeeLogin" element={<EmployeeLogin/>}/>
      </Route>
    </Routes>
  );
}
