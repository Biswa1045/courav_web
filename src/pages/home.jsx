import React from "react";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import RequestCallback from "../components/RequestCallback";
import Navbar from "../components/Nav/Navbar";

export default function Home() {
  return (
    <main>
        <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <RequestCallback 
  phoneNumber="+91 96673 09777"
  contactLink="/contact" 
/>
      <Footer />
    </main>
  );
}
