import { motion } from "framer-motion";
import {
  ClipboardList,
  Puzzle,
  FileCheck,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Review",
    desc: "We understand your product, pack size, quantity and market requirements.",
  },
  {
    icon: Puzzle,
    title: "Partner & Product Match",
    desc: "The requirement is matched with a suitable qualified manufacturing partner.",
  },
  {
    icon: FileCheck,
    title: "Documentation & Commercials",
    desc: "Specifications, COA and applicable documents are shared and commercial terms aligned.",
  },
  {
    icon: PackageCheck,
    title: "Supply & Delivery",
    desc: "Order coordination, dispatch and delivery through planned logistics.",
  },
];

const directly = [
  "Sourcing and commercial coordination",
  "Documentation and buyer communication",
  "Order, dispatch and delivery coordination",
];

const throughPartners = [
  "Manufacturing of products",
  "Partner-level quality records and certifications",
  "Batch documentation issued by the partner",
];

const CapabilitiesProcess = () => {
  return (
    <section className="relative bg-sky-50/50 py-16 sm:py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            From Requirement to{" "}
            <span className="text-sky-600 italic">Delivery</span>
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            A simple, transparent process built around qualified partners and
            clear documentation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-[2.25rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-sky-200 via-sky-400 to-sky-200"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white border border-sky-100 rounded-2xl p-6 pt-9 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300 text-center"
                >
                  {/* Number badge */}
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-sky-600 text-white text-sm font-bold flex items-center justify-center shadow-md ring-4 ring-sky-50">
                    {i + 1}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 mx-auto bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-colors"
                  >
                    <Icon size={24} className="text-sky-600" />
                  </motion.div>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Directly vs Through partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-12 sm:mt-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-sky-100 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <span className="inline-block bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Handled by Varelia
            </span>
            <ul className="space-y-3">
              {directly.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-2.5 text-slate-700 text-sm sm:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="text-sky-500 shrink-0 mt-0.5"
                  />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <span className="inline-block bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Through Qualified Partners
            </span>
            <ul className="space-y-3">
              {throughPartners.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2.5 text-slate-300 text-sm sm:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="text-sky-400 shrink-0 mt-0.5"
                  />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesProcess;