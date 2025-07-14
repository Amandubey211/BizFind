// src/layouts/Layout.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
