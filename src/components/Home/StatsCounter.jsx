

import { motion } from "framer-motion";
import { Handshake, FileCheck, Globe2, MessageSquareQuote } from "lucide-react";

const points = [
  {
    icon: Handshake,
    title: "Qualified Partners",
    desc: "Sourced through qualified third-party manufacturers",
  },
  {
    icon: FileCheck,
    title: "Documentation Support",
    desc: "Product documents confirmed per shipment",
  },
  {
    icon: Globe2,
    title: "Domestic + Export",
    desc: "Supply for buyers in India and overseas",
  },
  {
    icon: MessageSquareQuote,
    title: "Request-Based Quoting",
    desc: "Share your requirement, get a detailed quote",
  },
];

const StatsCounter = () => {
  return (
    <section className="relative py-14 sm:py-16 bg-gradient-to-br from-sky-700 via-sky-600 to-sky-800 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <span className="inline-block bg-white/10 border border-white/20 text-sky-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            Our Supply Approach
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Built on Clarity, Not Claims
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
                  <Icon size={22} className="text-sky-200" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-white">
                  {point.title}
                </h3>
                <p className="text-sky-100/80 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-[14rem] mx-auto">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;