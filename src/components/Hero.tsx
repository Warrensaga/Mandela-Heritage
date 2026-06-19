import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Star, Sparkles, ChevronDown, MessageSquare } from "lucide-react";

interface HeroPreviewItem {
  id: string;
  emoji: string;
  name: string;
  price: string;
  desc: string;
  image: string;
  waMsg: string;
  variants: string;
}

const previewItems: HeroPreviewItem[] = [
  {
    id: "sofas",
    emoji: "🛋️",
    name: "Royal L-Shape Sofa",
    price: "From KES 45,000",
    desc: "Plush 5-seater L-shape with premium fabric upholstery and local hardwood framing.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    waMsg: "Hi Mandela Heritage, I am interested in the Royal L-Shape Sofa previewed on the website.",
    variants: "Available in Velvet Grey, Midnight Blue & Savannah Cream"
  },
  {
    id: "beds",
    emoji: "🛏️",
    name: "Heritage King Bed",
    price: "From KES 38,000",
    desc: "Luxury solid wood king bed frame with tufted velvet headboard customization.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80",
    waMsg: "Hi Mandela Heritage, I am interested in the Heritage King Bed previewed on the website.",
    variants: "Available in Premium Velvet & Custom Dimensions"
  },
  {
    id: "dining-tables",
    emoji: "🍽️",
    name: "6-Seater Dining Set",
    price: "From KES 52,000",
    desc: "Solid mahogany dining table complete with 6 elegantly cushioned luxury chairs.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    waMsg: "Hi Mandela Heritage, I am interested in the 6-Seater Dining Set previewed on the website.",
    variants: "Available in Natural Mahogany, Walnut & Golden Oak finishes"
  },
  {
    id: "tv-stands",
    emoji: "📺",
    name: "Floating TV Stand",
    price: "From KES 18,000",
    desc: "Minimalist entertainment center unit optimized for clean wire management.",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
    waMsg: "Hi Mandela Heritage, I am interested in the Floating TV Stand previewed on the website.",
    variants: "Available in Smooth Walnut, Charcoal Grey & Matte White"
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("sofas");

  const currentItem = previewItems.find(item => item.id === activeTab) || previewItems[0];

  const handleEnquire = (waMsg: string) => {
    window.open(`https://wa.me/254701333358?text=${encodeURIComponent(waMsg)}`, "_blank");
  };

  const scrollToContent = () => {
    const nextSection = document.getElementById("categories-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-banner" className="relative min-h-screen bg-navy text-white flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Decorative Grid - Visualizing craftsmanship design layout */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="w-full h-full border-x border-white/50 max-w-7xl mx-auto flex justify-between">
          <div className="w-px h-full border-l border-white/40"></div>
          <div className="w-px h-full border-l border-white/40"></div>
          <div className="w-px h-full border-l border-white/40"></div>
        </div>
      </div>

      {/* Radiant glow vectors behind preview area */}
      <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] -right-20 top-1/3 z-0 pointer-events-none" />
      <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent/10 rounded-full blur-[100px] left-10 bottom-10 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Branded Presentation Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            
            {/* Top-center premium badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-accent/15 border border-accent/25 text-accent font-sans text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit mx-auto lg:mx-0 backdrop-blur"
            >
              <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>4.0 Rating on Google</span>
              <span className="text-white/20">|</span>
              <span className="text-white flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-accent" />
                Eastern Bypass, Nairobi
              </span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3 block"
            >
              EST. 2021 | PREMIUM CRAFTSMANSHIP
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Artistry in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent italic font-medium">
                Every Single Stitch.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-blueLight/85 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 font-sans"
            >
              Crafted locally on the Eastern Bypass with quality seasoned hardwood & premium fabric choice. We don&apos;t just sell furniture; we build heritage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/catalogue"
                id="hero-catalogue-cta"
                className="px-8 py-3.5 bg-primary hover:bg-accent text-white font-sans font-bold text-sm tracking-widest rounded-full shadow-lg transition-colors duration-300 text-center uppercase"
              >
                Explore Catalogue
              </Link>
              
              <a
                href="https://wa.me/254701333358"
                target="_blank"
                rel="noreferrer"
                id="hero-whatsapp-consult-cta"
                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-sans font-semibold text-sm rounded-full border border-white/25 transition-all text-center flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>WhatsApp Design Desk</span>
              </a>
            </motion.div>
          </div>

          {/* Right Immersive Interactive Preview Showcase Slot (7 Cols) */}
          <div className="lg:col-span-7 relative flex items-center pl-0 lg:pl-6">
            
            {/* Interactive Stage Preview Box with beautiful clip fade transition */}
            <div className="w-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-[380px] sm:h-[460px] bg-blueLight rounded-3xl relative overflow-hidden shadow-2xl border border-white/10 group"
                >
                  <img
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Fade Cover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-black/25" />

                  {/* Float Info Card elements */}
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 relative z-10 text-white">
                    <div className="max-w-xs sm:max-w-md">
                      <span className="bg-primary text-white text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-widest font-bold mb-2 inline-block shadow-sm">
                        Showcase Piece
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-bold tracking-tight">
                        {currentItem.name}
                      </h3>
                      <p className="text-white/80 text-[11px] font-sans pr-4 line-clamp-2 mt-1">
                        {currentItem.desc}
                      </p>
                      <p className="text-[#D4651A]/90 text-[10px] italic font-sans mt-2 block">
                        {currentItem.variants}
                      </p>
                    </div>

                    <div className="text-left sm:text-right w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-end gap-2 shrink-0 border-t border-white/10 sm:border-t-0 pt-3 sm:pt-0">
                      <div>
                        <span className="block text-[10px] text-white/60 tracking-wider">Starting From</span>
                        <p className="text-accent font-sans font-black text-xl sm:text-2xl leading-none">
                          {currentItem.price}
                        </p>
                      </div>
                      <button
                        onClick={() => handleEnquire(currentItem.waMsg)}
                        className="bg-white hover:bg-accent hover:text-white text-navy font-sans font-black text-xs px-5 py-2.5 rounded-full transition-all tracking-wider shadow"
                      >
                        ENQUIRE NOW
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vertically Aligned Compact Custom Badge Selector (Aesthetic Risk) */}
            <div className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-20">
              {previewItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-11 sm:w-12 h-11 sm:h-12 flex items-center justify-center rounded-xl shadow-lg border text-lg transition-all focus:outline-none ${
                    activeTab === item.id
                      ? "bg-primary border-accent text-white scale-110"
                      : "bg-white border-blueLight hover:border-accent text-slate-800 opacity-80"
                  }`}
                  title={`Preview ${item.name}`}
                >
                  <span className="select-none transform group-hover:scale-110">{item.emoji}</span>
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Scroll down mouse indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToContent}
            className="flex flex-col items-center text-white/40 hover:text-white transition-colors cursor-pointer select-none"
          >
            <span className="text-[10px] tracking-[0.2em] font-sans uppercase mb-1.5 block">
              Scroll to discover bestsellers
            </span>
            <ChevronDown className="w-4 h-4 text-accent animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}
