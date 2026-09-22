import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, ArrowRight, Phone } from "lucide-react";

const BulkEnquiryCTA = () => {
  return (
    <section className="relative py-14 sm:py-16 bg-gradient-to-br from-sky-600 via-sky-600 to-sky-700 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-14 h-14 bg-white/15 rounded-xl items-center justify-center shrink-0">
              <Package size={26} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Looking for Bulk Orders?
              </h3>
              <p className="text-sky-50 text-sm">
                Hospitals, distributors & healthcare providers — get in
                touch for pricing and supply arrangements.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919027864296"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Phone size={16} />
              Call Us
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-full hover:bg-sky-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Enquire Now
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BulkEnquiryCTA;