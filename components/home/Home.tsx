"use client";

import { useEffect } from "react";
import AOS from "aos";
import ScrollToTop from "@/components/helper/ScrollToTop";
import ResponsiveNav from "./Navbar/ResponsiveNav";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <ResponsiveNav />
      <main>
        <Hero />
        <Services />
        <Resume />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
