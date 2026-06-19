import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageSquare, MapPin, Phone, Clock, Compass } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-navy text-white pt-20 pb-8 relative overflow-hidden">
      {/* Visual aesthetic dividers */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col space-y-5">
            <div>
              <Link to="/" className="flex flex-col select-none inline-block">
                <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                  Mandela Heritage
                </span>
                <span className="font-serif text-xs italic tracking-widest text-accent self-end -mt-1 font-semibold uppercase">
                  Furnitures
                </span>
              </Link>
            </div>
            
            <p className="font-serif text-sm italic text-blueLight/80">
              &ldquo;Stylish Comfort Transcending Time&rdquo;
            </p>

            {/* Social media connections */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/mandela_heritagefurniture"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200 text-white"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/102559195460931"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200 text-white"
                title="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/254701333358"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-waGreen rounded-full flex items-center justify-center transition-colors duration-200 text-white"
                title="Message on WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>

            <div>
              <a
                href="https://wa.me/254701333358"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-waGreen hover:bg-emerald-600 text-white font-sans font-bold text-xs px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Small Business Chat</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick navigation */}
          <div className="flex flex-col space-y-5">
            <h4 className="font-serif text-lg font-semibold tracking-wide border-b border-white/5 pb-2">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm font-sans text-blueLight/80">
              <Link to="/" className="hover:text-accent transition-colors">
                Home Page
              </Link>
              <Link to="/catalogue" className="hover:text-accent transition-colors">
                View Catalogue
              </Link>
              <Link to="/category/sofas" className="hover:text-accent transition-colors">
                Luxury Sofas
              </Link>
              <Link to="/category/beds" className="hover:text-accent transition-colors">
                Bespoke Beds
              </Link>
              <Link to="/category/dining-tables" className="hover:text-accent transition-colors">
                Dining Sets
              </Link>
              <Link to="/category/airbnb" className="hover:text-accent transition-colors">
                Airbnb Packages
              </Link>
              <Link to="/contact" className="hover:text-accent transition-colors col-span-2">
                Conact Us & Location
              </Link>
            </div>
          </div>

          {/* Column 3: Contact showroom location details */}
          <div className="flex flex-col space-y-5 text-sm font-sans text-blueLight/85">
            <h4 className="font-serif text-lg font-semibold tracking-wide border-b border-white/5 pb-2">
              Find Our Showroom
            </h4>
            
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span>Eastern Bypass, Nairobi</span>
                <a
                  href="https://maps.app.goo.gl/RbuRCXwNLkZPPqeJ7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline text-xs mt-1 font-semibold flex items-center space-x-1"
                >
                  <span>Open in Google Maps</span>
                  <Compass className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <a href="tel:+254701333358" className="hover:underline hover:text-accent">
                0701 333358
              </a>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="flex flex-col text-xs space-y-1">
                <span className="font-semibold text-white">Showroom Hours:</span>
                <span>Mon&ndash;Sat: 9:00 AM &ndash; 6:00 PM</span>
                <span>Sun: By Appointment Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights and Attribution bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-blueLight/50 gap-4 text-center border-t border-white/5 mt-4">
          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-waGreen animate-pulse"></span>
              <span className="text-[11px] font-medium text-blueLight/70">Showroom Open: Mon-Sat 9am-6pm</span>
            </span>
            <span className="h-4 w-px bg-white/10 hidden sm:inline"></span>
            <p className="text-[11px] font-medium text-blueLight/70">
              &copy; {currentYear} Mandela Heritage Furnitures. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://maps.app.goo.gl/RbuRCXwNLkZPPqeJ7"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 hover:bg-white/10 rounded px-3 py-1 border border-white/10 select-none text-[11px] transition-colors"
            >
              📍 Eastern Bypass, Nairobi, Kenya
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
