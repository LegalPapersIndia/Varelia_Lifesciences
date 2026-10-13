import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, FileCheck, Headphones } from "lucide-react";

const benefits = [
  { icon: Handshake, text: "Qualified Partnerships" },
  { icon: FileCheck, text: "Clear Documentation" },
  { icon: Headphones, text: "Business Support" },
];

const PartnersCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-sky-600 via-sky-600 to-sky-700 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/15 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/20">
            Business Partners
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Build a Long-Term Partnership{" "}
            <span className="italic">with Varelia</span>
          </h2>

          <p className="text-sky-50 text-sm sm:text-base max-w-2xl mx-auto mb-9">
            Join our network of distributors, importers/exporters and
            manufacturing partners, built on product suitability,
            documentation and dependable execution.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.text}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm"
                >
                  <Icon size={16} />
                  {b.text}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/partners"
              className="group inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-7 py-3.5 rounded-full hover:bg-sky-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Become a Partner
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCTA;