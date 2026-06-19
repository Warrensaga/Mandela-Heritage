import { motion } from "motion/react";
import { MessageSquare, MapPin, Phone } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden text-white">
      {/* Decorative background vectors */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-5xl font-bold tracking-tight"
        >
          Ready to Furnish Your Space?
        </motion.h2>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base sm:text-lg text-blueLight max-w-2xl mx-auto font-sans"
        >
          Send us a message and get a custom quote within 24 hours. No commitment needed.
        </motion.p>

        {/* Primary CTA: WhatsApp click trigger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/254701333358?text=Hi, I'd like to enquire about furniture for my home."
            target="_blank"
            rel="noreferrer"
            id="cta-whatsapp-link"
            className="inline-flex items-center space-x-3 bg-waGreen hover:bg-emerald-600 text-white font-sans font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat With Us Now</span>
          </a>
        </motion.div>

        {/* Brand Meta Strip with telephone call routing */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-sans text-blueLight/90">
          <a
            href="https://maps.app.goo.gl/RbuRCXwNLkZPPqeJ7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 hover:text-accent transition-colors duration-200"
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span>Eastern Bypass, Nairobi</span>
          </a>
          <span className="hidden sm:inline text-white/40">&middot;</span>
          <a
            href="tel:+254701333358"
            className="flex items-center space-x-1.5 hover:text-accent transition-colors duration-200"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>📞 0701 333358</span>
          </a>
        </div>
      </div>
    </section>
  );
}
