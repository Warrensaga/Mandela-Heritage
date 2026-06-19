import { motion } from "motion/react";
import { Factory, Ruler, Truck, Home } from "lucide-react";

export default function WhyUs() {
  const cards = [
    {
      icon: <Factory className="w-8 h-8 text-accent" />,
      emoji: "🏭",
      title: "Made in Nairobi",
      text: "Crafted locally with quality hardwood and premium fabrics — no cheap imports, no shortcuts.",
    },
    {
      icon: <Ruler className="w-8 h-8 text-accent" />,
      emoji: "📐",
      title: "Custom Orders Welcome",
      text: "Tell us your exact size, color, and style. We build it from scratch, just for you.",
    },
    {
      icon: <Truck className="w-8 h-8 text-accent" />,
      emoji: "🚚",
      title: "Delivery & Assembly",
      text: "We deliver and fully assemble your furniture across Nairobi and surrounding areas.",
    },
    {
      icon: <Home className="w-8 h-8 text-accent" />,
      emoji: "🏠",
      title: "Airbnb & Real Estate Packages",
      text: "Full furnishing packages for rental properties. One phone call, completely fully furnished.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="why-us" className="py-24 bg-navy relative overflow-hidden text-white">
      {/* Editorial aesthetic: Grid wireframe layout */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="max-w-7xl mx-auto h-full w-full border-x border-dashed border-white/40 flex justify-between">
          <div className="w-px h-full border-l border-dashed border-white/20" />
          <div className="w-px h-full border-l border-dashed border-white/20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-widest text-xs sm:text-sm font-bold font-sans block mb-2"
          >
            Stylish Comfort Transcending Time
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight"
          >
            Why Nairobi Chooses Mandela Heritage
          </motion.h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* 2x2 Grid of visual cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 border-l-4 border-accent flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Icon / Emblem container */}
              <div className="p-4 bg-blueLight rounded-xl flex-shrink-0 flex items-center justify-center relative group">
                {card.icon}
                <span className="absolute -top-1 -right-1 text-base select-none">
                  {card.emoji}
                </span>
              </div>

              {/* Text content */}
              <div>
                <h3 className="font-serif text-xl font-bold text-textDark mb-3">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-textMuted font-sans leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
