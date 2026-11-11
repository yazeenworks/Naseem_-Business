"use client";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Page() {
  const [service, setService] = useState("");
  return (
    <>
      <a className="skip" href="#services">
        Skip to services
      </a>
      <Header />
      <main>
        <Hero />
        <Services onInquiry={setService} />
        <Process />
        <Contact service={service} setService={setService} />
      </main>
      <Footer />
    </>
  );
}
