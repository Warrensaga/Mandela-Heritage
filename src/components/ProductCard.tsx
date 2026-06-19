import React from "react";
import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { Product } from "../data/products";
import { categories } from "../data/categories";

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const waUrl = `https://wa.me/254701333358?text=${encodeURIComponent(
      product.whatsappMsg
    )}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // Resolve user-friendly category label
  const categoryLabel =
    categories.find((c) => c.slug === product.category)?.label || product.category;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group bg-blueLight rounded-3xl shadow-lg hover:shadow-2xl border border-blueLight hover:border-accent/40 overflow-hidden transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-video relative overflow-hidden bg-white/20">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback block if unsplash link is broken
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>

        {/* Category Pill Tag */}
        <span className="absolute top-3 left-3 bg-primary text-white font-sans font-semibold text-[11px] uppercase tracking-wider rounded-full px-3 py-1 shadow-sm">
          {categoryLabel}
        </span>
      </div>

      {/* Body content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h4 className="font-serif text-lg font-bold text-navy leading-snug group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-textDark/80 font-sans line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-navy/5 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-textMuted font-medium block">
              Starting Price
            </span>
            <span className="font-sans font-black text-accent text-lg">
              {product.price}
            </span>
          </div>
        </div>

        {/* WhatsApp Custom Button */}
        <button
          onClick={handleOrder}
          className="mt-4 w-full bg-waGreen hover:bg-emerald-600 text-white font-sans font-semibold text-sm py-3 px-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Order via WhatsApp</span>
        </button>
      </div>
    </motion.div>
  );
}
