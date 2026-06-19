import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import { motion } from "motion/react";

// Animation configs
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <section id="categories-section" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative design risk background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blueLight/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-2xl -z-10 pointer-events-none" />

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
            What We Make
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-textMuted font-sans"
          >
            From single custom pieces to complete home setups
          </motion.p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.slug}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -4 }}
              onClick={() => navigate(`/category/${cat.slug}`)}
              className="group bg-blueLight border-2 border-transparent hover:border-accent p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between h-52 sm:h-56 select-none"
            >
              <div>
                {/* Emoji Emblem */}
                <div className="text-4xl text-left select-none mb-4 transform transition-transform group-hover:scale-110 duration-300">
                  {cat.emoji}
                </div>
                
                {/* Label */}
                <h3 className="font-serif text-base sm:text-lg font-bold text-textDark group-hover:text-primary transition-colors duration-200">
                  {cat.label}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-textMuted font-sans line-clamp-2 leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
