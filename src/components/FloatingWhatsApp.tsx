import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(
      "https://wa.me/254701333358?text=Hi, I found your website and I'm interested in your furniture.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="mr-3 bg-navy text-white text-xs sm:text-sm font-sans font-medium py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap pointer-events-none select-none border border-white/10 hidden sm:block"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <button
        id="floating-whatsapp-fab"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 bg-waGreen hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 relative outline-none focus:ring-4 focus:ring-emerald-500/20"
      >
        {/* Continuous pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-waGreen animate-ping opacity-35" />

        <MessageSquare className="w-7 h-7 relative z-10" />
      </button>
    </div>
  );
}
