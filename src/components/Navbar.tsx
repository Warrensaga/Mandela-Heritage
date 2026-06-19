import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageSquareCode, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Catalogue", path: "/catalogue" },
    { label: "Why Choose Us", path: "/", targetSection: "why-us" },
    { label: "Showroom Location", path: "/contact" },
  ];

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-navy shadow-lg py-3"
            : "bg-gradient-to-b from-navy/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col select-none">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary">
                Mandela Heritage
              </span>
              <span className="font-serif text-xs italic tracking-widest text-accent self-end -mt-1 font-semibold uppercase">
                Furnitures
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.targetSection && location.pathname === "/" ? (
                    <button
                      onClick={() => handleNavClick(link.targetSection!)}
                      className="font-sans text-sm font-medium text-white hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-sans text-sm font-medium transition-colors duration-200 ${
                        location.pathname === link.path
                          ? "text-accent font-semibold border-b-2 border-accent pb-1"
                          : "text-white hover:text-accent link-underline"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side: Primary CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                id="navbar-whatsapp-cta"
                href="https://wa.me/254701333358"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 bg-waGreen hover:bg-emerald-600 text-white font-sans font-semibold text-sm px-4 py-2 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Chat with Us</span>
              </a>
              <a
                href="tel:+254701333358"
                className="p-2 bg-navy text-accent border border-accent/30 rounded-full hover:bg-accent hover:text-white transition-all"
                title="Call 0701 333358"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <a
                href="https://wa.me/254701333358"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center bg-waGreen text-white p-2 rounded-full shadow"
              >
                <MessageSquareCode className="w-5 h-5" />
              </a>
              <button
                id="navbar-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-accent p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-navy border-t border-white/10"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.targetSection && location.pathname === "/" ? (
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setTimeout(() => handleNavClick(link.targetSection!), 150);
                        }}
                        className="block w-full text-left font-sans text-lg font-medium py-2 text-white hover:text-accent"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block font-sans text-lg font-medium py-2 ${
                          location.pathname === link.path ? "text-accent font-semibold" : "text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                  <a
                    href="https://wa.me/254701333358"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 bg-waGreen text-white font-sans font-semibold py-3 rounded-xl shadow"
                  >
                    <MessageSquareCode className="w-5 h-5" />
                    <span>WhatsApp Order (0701 333358)</span>
                  </a>
                  <a
                    href="tel:+254701333358"
                    className="flex items-center justify-center space-x-2 bg-primary text-white font-sans font-semibold py-3 rounded-xl shadow"
                  >
                    <PhoneCall className="w-5 h-5" />
                    <span>Call Sales Desk</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
