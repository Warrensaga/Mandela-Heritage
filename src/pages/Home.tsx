import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import WhatsAppCTA from "../components/WhatsAppCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full relative overflow-hidden">
      {/* 1. Hero Landing Cover */}
      <Hero />

      {/* 2. Brand Category Grid */}
      <CategoryGrid />

      {/* 3. Bestsellers Showcase */}
      <FeaturedProducts />

      {/* 4. Why Us Values Section */}
      <WhyUs />

      {/* 5. Client Testimonials */}
      <Testimonials />

      {/* 6. Primary Action CTA Ribbon */}
      <WhatsAppCTA />

      {/* 7. Corporate Footer */}
      <Footer />
    </main>
  );
}
