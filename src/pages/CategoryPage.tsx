import { useParams, Link } from "react-router-dom";
import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { ArrowLeft, MessageSquareDot } from "lucide-react";
import { motion } from "motion/react";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find category definitions
  const currentCategory = categories.find((c) => c.slug === slug);

  // Filter products by category slug
  const categoryProducts = products.filter((p) => p.category === slug);

  if (!currentCategory) {
    return (
      <div className="pt-32 min-h-screen bg-white flex flex-col justify-between">
        <div className="max-w-md mx-auto px-6 text-center py-16 bg-blueLight rounded-3xl mt-12">
          <span className="text-4xl block mb-4 select-none">🔍❓</span>
          <h2 className="font-serif text-2xl font-bold text-textDark">Collection Not Found</h2>
          <p className="mt-3 font-sans text-sm text-[13px] text-textMuted leading-relaxed">
            Sorry, the collection you are trying to view does not exist. Back to general directory to view our full bestseller collections.
          </p>
          <div className="mt-6">
            <Link
              to="/catalogue"
              className="inline-flex items-center space-x-2 bg-primary text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Catalogue</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Category Header */}
      <section className="bg-blueLight/40 py-16 sm:py-20 border-b border-blueLight relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-3 text-[9rem] opacity-5 pointer-events-none select-none font-serif font-bold">
          {currentCategory.emoji}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link
              to="/catalogue"
              className="inline-flex items-center space-x-2 text-primary hover:text-accent font-sans font-semibold text-sm group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Catalogue</span>
            </Link>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight flex items-center gap-3">
              <span>{currentCategory.emoji}</span>
              <span>{currentCategory.label}</span>
            </h1>
            <p className="mt-4 text-base text-textMuted font-sans max-w-xl leading-relaxed">
              {currentCategory.description}. Message us directly for dimensions and fabric sample inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Product Results Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Custom piece suggestion empty state */
            <div className="max-w-md mx-auto text-center py-20 bg-blueLight rounded-3xl px-6">
              <span className="text-4xl block mb-4 select-none">🛠️🪚</span>
              <h3 className="font-serif text-lg font-bold text-textDark mb-2">
                No items in this collection currently listable
              </h3>
              <p className="font-sans text-sm text-textMuted mb-6 leading-relaxed">
                We design and make everything to order. Send us an image or describe what you need, and our Nairobi workshop will build it!
              </p>
              <a
                href={`https://wa.me/254701333358?text=Hi, I'm interested in custom order pieces in the ${currentCategory.label} category.`}
                target="_blank"
                rel="noreferrer"
                className="bg-accent text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-full inline-flex items-center space-x-2 shadow-sm"
              >
                <MessageSquareDot className="w-4 h-4" />
                <span>Enquire Custom Order</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
