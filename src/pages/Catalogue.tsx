import { useState, useMemo } from "react";
import { products } from "../data/products";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Search, Info, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Memoized filtered product selection
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Category check
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      // 2. Search query check
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
        product.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Hero Banner */}
      <section className="bg-blueLight/40 py-16 sm:py-20 border-b border-blueLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight"
          >
            Our Full Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-textMuted max-w-xl mx-auto font-sans leading-relaxed"
          >
            Elegant handcrafted tables, sofas, and custom beds, optimized for Kenya homes & landlords.
          </motion.p>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            {/* Category tabs */}
            <div className="w-full md:w-2/3">
              <span className="block text-xs font-bold uppercase tracking-wider text-textMuted font-sans mb-3 select-none">
                Browse Collections
              </span>
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Incremental Search Field */}
            <div className="w-full md:w-1/3">
              <span className="block text-xs font-bold uppercase tracking-wider text-textMuted font-sans mb-3 select-none">
                Quick Search
              </span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search dining, beds, sofas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-blueLight/50 focus:bg-white text-sm font-sans text-textDark outline-none border border-slate-100 focus:border-primary rounded-full transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-textMuted" />
              </div>
            </div>
          </div>

          {/* Catalog Grid */}
          <div className="mt-12">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Beautiful empty state customized for bespoke designs */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center py-20 px-6 bg-blueLight rounded-3xl"
              >
                <div className="text-4xl mb-4 select-none">✏️📐</div>
                <h3 className="font-serif text-lg font-bold text-textDark mb-2">
                  No match found in current catalogue
                </h3>
                <p className="font-sans text-sm text-textMuted mb-6 leading-relaxed">
                  We specialize in custom wood craftsmanship. Tell us your exact size, style, or color, and we will build it for you!
                </p>
                <a
                  href={`https://wa.me/254701333358?text=Hi, I searched for some customized furniture items ("${searchQuery}") and wanted to ask if you can build it for me.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-full inline-flex items-center space-x-2 shadow-sm hover:shadow transition-all"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Send WhatsApp Request</span>
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Fine-line showroom notice banner */}
      <section className="bg-slate-50 py-8 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-center text-center space-x-2 text-xs sm:text-sm text-textMuted font-sans">
          <Info className="w-4 h-4 text-primary flex-shrink-0" />
          <span>
            Have specific space issues? Custom materials can be viewed at our <strong>Eastern Bypass showroom</strong>.
          </span>
        </div>
      </section>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
