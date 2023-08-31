"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { NewsCategoryProvider } from "@/context";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-sine",
    });
  });

  return (
    <NewsCategoryProvider>
      <div className="flex flex-col overflow-hidden min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </NewsCategoryProvider>
  );
}
