import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  // Display only products where featured: true (6 items)
  const featuredList = products.filter((p) => p.featured);

  return (
    <section className="py-24 bg-blueLight/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight"
          >
            Our Bestsellers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-textMuted font-sans"
          >
            Nairobi&apos;s favorite hardwood & fabric furniture, crafted to perfection
          </motion.p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Footer CTA: View Full Catalogue */}
        <div className="text-center mt-16 pb-2">
          <Link
            to="/catalogue"
            id="featured-view-catalogue-btn"
            className="inline-flex items-center space-x-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-sans font-bold px-8 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
