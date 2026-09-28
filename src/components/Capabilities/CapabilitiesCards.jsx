import { motion } from "framer-motion";
import {
  Pill,
  Handshake,
  Building2,
  Globe2,
  FileText,
  Truck,
} from "lucide-react";

const capabilities = [
  {
    icon: Pill,
    title: "Pharmaceutical Trading",
    desc: "Sourcing and commercial supply of pharmaceutical products for qualified B2B buyers.",
  },
  {
    icon: Handshake,
    title: "Qualified Manufacturing Partnerships",
    desc: "Third-party manufacturing arrangements based on product, quality and market requirements.",
  },
  {
    icon: Building2,
    title: "Domestic B2B Supply",
    desc: "Support for distributors, hospitals, institutions and other qualified buyers.",
  },
  {
    icon: Globe2,
    title: "International Export",
    desc: "Supply coordination for importers, distributors and pharmaceutical partners.",
  },
  {
    icon: FileText,
    title: "Documentation & Coordination",
    desc: "Product, commercial, quality and export documentation support as applicable.",
  },
  {
    icon: Truck,
    title: "Supply & Logistics",
    desc: "Order coordination, production planning, dispatch and delivery coordination.",
  },
];

const CapabilitiesCards = () => {
  return (
    <section className="relative bg-slate-900 py-16 sm:py-20 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
            Core Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Six Ways We Support Your{" "}
            <span className="text-sky-400 italic">Supply</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            From sourcing to delivery, every capability is built around
            qualified partners and appropriate documentation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-7 overflow-hidden hover:border-sky-500/50 hover:bg-slate-800 transition-colors duration-300"
              >
                {/* Big faded number */}
                <span className="absolute top-3 right-5 text-6xl sm:text-7xl font-extrabold text-white/[0.04] group-hover:text-sky-400/10 transition-colors duration-300 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Hover glow */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-500/0 group-hover:bg-sky-500/10 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 bg-sky-500/10 border border-sky-500/30 rounded-xl flex items-center justify-center mb-5"
                >
                  <Icon size={24} className="text-sky-400" />
                </motion.div>

                {/* Content */}
                <h3 className="relative text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="relative text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-400 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesCards;