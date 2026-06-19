import { motion } from "motion/react";
import { Star, MessageSquareCode } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "Quality furniture at fair prices. My L-shape sofa is exactly what I wanted and it arrived on time.",
      name: "NDUIYIE WANJIKU",
    },
    {
      stars: 4,
      quote: "Delivered on time and assembled professionally. The team was polite and efficient. Will order again.",
      name: "Nancy M.",
    },
    {
      stars: 5,
      quote: "Good craftsmanship. My dining set has lasted well and still looks brand new over a year later.",
      name: "Leah Wanjiru",
    },
  ];

  return (
    <section className="py-24 bg-blueLight relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

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
            What Our Clients Say
          </motion.h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              {/* Large opening quote decoration */}
              <div className="absolute top-2 right-4 text-accent/15 select-none font-serif text-[7rem] leading-none pointer-events-none">
                &ldquo;
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < review.stars
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans text-sm sm:text-base text-textDark/95 italic leading-relaxed relative z-10 pr-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-4 border-t border-slate-50">
                <span className="font-serif text-xs font-bold tracking-widest text-textDark uppercase">
                  {review.name}
                </span>
                <span className="block text-[10px] text-textMuted uppercase tracking-wider font-sans mt-0.5">
                  Verified Client &middot; Nairobi
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge Block */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/RbuRCXwNLkZPPqeJ7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow border border-slate-100 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div className="flex items-center space-x-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
              <Star className="w-4 h-4 text-amber-500" />
            </div>
            <span className="font-sans text-xs sm:text-sm font-semibold text-textDark">
              ⭐ 4.0 on Google &bull; Eastern Bypass, Nairobi
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
