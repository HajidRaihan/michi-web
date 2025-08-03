"use client";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Menu } from "../components/Menu";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Location } from "../components/Location";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
      </main>
      <Location />
      <Footer />
    </>
  );
}
