import { motion } from "motion/react";
import { Phone, MessageSquare, Instagram, Facebook, MapPin, Clock, ExternalLink } from "lucide-react";
import WhatsAppCTA from "../components/WhatsAppCTA";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Title */}
      <section className="bg-blueLight/40 py-16 sm:py-20 border-b border-blueLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <motion.h1
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight"
          >
            Get In Touch
          </motion.h1>
          <p className="mt-3 text-sm sm:text-base text-textMuted max-w-xl mx-auto font-sans leading-relaxed">
            Visit our Eastern Bypass showroom or contact our sales consultants for instant quotes and bespoke queries.
          </p>
        </div>
      </section>

      {/* Main content split */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            
            {/* Left Column: Interactive Contact Fields */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent font-sans block mb-2">
                  Direct Line
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-textDark">
                  Talk to Our Designers
                </h2>
              </div>

              {/* Direct Touchpoints links */}
              <div className="space-y-4">
                {/* Telephone */}
                <a
                  href="tel:+254701333358"
                  className="flex items-center space-x-4 p-4 bg-blueLight rounded-2xl hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center text-primary transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-sans font-bold text-textMuted block">
                      Call Sales Desk
                    </span>
                    <span className="font-sans font-bold text-textDark text-lg sm:text-xl">
                      0701 333358
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254701333358?text=Hi, I would like to get a quote on some custom furniture."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-waGreen/10 group-hover:bg-waGreen/20 rounded-xl flex items-center justify-center text-waGreen transition-colors flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-sans font-bold text-emerald-700 block">
                      WhatsApp Live Chat
                    </span>
                    <span className="font-sans font-bold text-textDark text-lg sm:text-xl">
                      Chat Now on mobile
                    </span>
                  </div>
                </a>
              </div>

              {/* Social links handles */}
              <div className="pt-4 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-textMuted font-sans block">
                  Follow Us Online
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/mandela_heritagefurniture"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 border border-slate-100 hover:border-accent p-3.5 rounded-xl hover:text-accent font-sans text-sm font-semibold text-textDark transition-all"
                  >
                    <Instagram className="w-4 h-4 text-accent" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/102559195460931"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 border border-slate-100 hover:border-accent p-3.5 rounded-xl hover:text-accent font-sans text-sm font-semibold text-textDark transition-all"
                  >
                    <Facebook className="w-4 h-4 text-primary" />
                    <span>Facebook Page</span>
                  </a>
                </div>
              </div>

              {/* Physical details & Hours table */}
              <div className="pt-4 space-y-6">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-serif font-bold text-textDark block mb-1">
                      Our Showroom Location
                    </span>
                    <span className="font-sans text-sm text-textMuted block leading-relaxed">
                      Eastern Bypass, Nairobi (opposite/next to major malls or landmarks in the bypass corridor).
                    </span>
                    <a
                      href="https://maps.app.goo.gl/RbuRCXwNLkZPPqeJ7"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-accent font-semibold text-xs mt-2 hover:underline font-sans"
                    >
                      <span>Get Driving Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="w-full">
                    <h3 className="font-serif font-bold text-textDark block mb-2">
                      Opening & Consultation Hours
                    </h3>
                    <div className="w-full text-xs font-sans text-textMuted divide-y divide-slate-100">
                      <div className="flex justify-between py-1.5">
                        <span className="font-semibold text-textDark">Monday &ndash; Saturday</span>
                        <span>9:00 AM &ndash; 6:00 PM</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="font-semibold text-textDark">Sundays</span>
                        <span className="text-accent font-semibold">By Appointment Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Google Maps Embed Map Frame */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full bg-slate-100 rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.578657682672!2d36.9535041539276!3d-1.2195027581788755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f7b24bb18dd%3A0x6739665f8c67c5!2sEastern%20Bypass%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mandela Heritage Furnitures Showroom Location on Eastern Bypass, Nairobi"
                className="w-full touch-pan-y"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full width WhatsApp strip below columns */}
      <WhatsAppCTA />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
