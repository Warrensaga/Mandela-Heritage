import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import CategoryPage from "./pages/CategoryPage";
import Contact from "./pages/Contact";

// Page transitions top-scroll helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* 1. Page Scroll Restoration */}
      <ScrollToTop />

      {/* Immersive UI: Architectural Grid Showcase Frame */}
      <div className="fixed inset-0 border-[10px] sm:border-[16px] md:border-[24px] border-navy z-50 pointer-events-none">
        <div className="w-full h-full border border-accent/30"></div>
      </div>

      {/* Modern Background Blur Glows & Brand Watermark Overlay across application viewports */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Large Aesthetic Watermark */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[10rem] md:text-[20rem] font-serif italic font-black text-navy/[0.02] dark:text-white/[0.015] leading-none">
          Heritage
        </div>
        {/* Subtle Neon Color Glows */}
        <div className="absolute -top-40 -right-40 w-96 md:w-[600px] h-96 md:h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-96 md:w-[600px] h-96 md:h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      {/* 2. Global Navbar */}
      <Navbar />

      {/* 3. Global Floating WhatsApp Trigger Button */}
      <FloatingWhatsApp />

      {/* 4. Routed Views Frame with subtle padding to prevent architectural frame overlap */}
      <div className="min-h-screen flex flex-col justify-between relative z-10 px-2 sm:px-4 md:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all fallback directly routing back home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
