import { motion } from "framer-motion";
import {
  FlaskConical,
  FileText,
  ClipboardCheck,
  FileCheck,
  Landmark,
  Info,
} from "lucide-react";

const documents = [
  {
    icon: FlaskConical,
    title: "Certificate of Analysis (COA)",
    desc: "Batch-wise analysis records for the supplied product, as applicable.",
  },
  {
    icon: FileText,
    title: "Product Specification",
    desc: "Product specifications covering strength, pack size and packaging details.",
  },
  {
    icon: ClipboardCheck,
    title: "Batch Documentation",
    desc: "Product and batch records that support traceability through the supply chain.",
  },
  {
    icon: FileCheck,
    title: "Partner GMP Documentation",
    desc: "GMP documentation of the qualified manufacturing partner, where applicable.",
  },
  {
    icon: Landmark,
    title: "Stability & Regulatory Documents",
    desc: "Stability and market-specific regulatory documents, as applicable.",
  },
];

// 5 cards: desktop pe 3 + 2 ka clean layout (6-column grid)
const spanClass = (i) => {
  if (i < 3) return "lg:col-span-2";
  if (i === 3) return "lg:col-span-3";
  return "sm:col-span-2 lg:col-span-3";
};

const DocumentsAvailable = () => {
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
            Documentation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Documents{" "}
            <span className="text-sky-400 italic">Available</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Documentation varies by product, market and order, and is shared
            as applicable.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {documents.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-7 overflow-hidden hover:border-sky-500/50 hover:bg-slate-800 transition-colors duration-300 ${spanClass(
                  i
                )}`}
              >
                {/* Hover glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/0 group-hover:bg-sky-500/10 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

                {/* As applicable tag */}
                <span className="absolute top-4 right-4 text-[10px] sm:text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full">
                  As applicable
                </span>

                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 bg-sky-500/10 border border-sky-500/30 rounded-xl flex items-center justify-center mb-5"
                >
                  <Icon size={24} className="text-sky-400" />
                </motion.div>

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

        {/* Buyer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 sm:mt-12 max-w-3xl mx-auto flex items-start gap-3 bg-sky-500/5 border border-sky-500/20 rounded-2xl px-5 py-4 backdrop-blur-sm"
        >
          <Info size={20} className="text-sky-400 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold text-sky-300">Buyer note: </span>
            Final pack configuration, documentation, registration status and
            commercial terms should be confirmed for each market and order.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentsAvailable;