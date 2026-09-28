import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Boxes,
  Stethoscope,
  Landmark,
  Globe2,
  Handshake,
  ArrowRight,
} from "lucide-react";

const audiences = [
  {
    icon: Boxes,
    title: "Distributors",
    desc: "Pharmaceutical distributors and wholesalers seeking reliable product supply.",
  },
  {
    icon: Stethoscope,
    title: "Hospitals",
    desc: "Hospitals and healthcare providers looking for dependable IV and LVP supply.",
  },
  {
    icon: Landmark,
    title: "Institutions",
    desc: "Institutional and other qualified B2B buyers with recurring supply needs.",
  },
  {
    icon: Globe2,
    title: "Importers",
    desc: "International importers, distributors and pharmaceutical companies.",
  },
  {
    icon: Handshake,
    title: "Manufacturers",
    desc: "Qualified manufacturers interested in long-term supply partnerships.",
  },
];

// 5 cards: desktop pe 3 + 2 ka clean layout (6-column grid)
const spanClass = (i) => {
  if (i < 3) return "lg:col-span-2";
  if (i === 3) return "lg:col-span-3";
  return "sm:col-span-2 lg:col-span-3"; // last card
};

const WhoWeServe = () => {
  return (
    <section className="relative bg-slate-900 py-16 sm:py-20 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

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
            Who We Serve
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Supply Partner for{" "}
            <span className="text-sky-400 italic">Qualified Buyers</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            We work with distributors, healthcare institutions and
            pharmaceutical partners across domestic and international markets.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-7 overflow-hidden hover:border-sky-500/50 hover:bg-slate-800 transition-colors duration-300 ${spanClass(
                  i
                )}`}
              >
                {/* Hover glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/0 group-hover:bg-sky-500/10 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

                <div className="relative flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-sky-500/10 border border-sky-500/30 rounded-xl flex items-center justify-center"
                  >
                    <Icon size={24} className="text-sky-400" />
                  </motion.div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

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

export default WhoWeServe;