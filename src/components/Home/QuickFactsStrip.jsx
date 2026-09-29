import { motion } from "framer-motion";
import { Factory, FileCheck, Truck, Globe2 } from "lucide-react";

const facts = [
  { icon: Factory, label: "Qualified Manufacturing Partners" },
  { icon: FileCheck, label: "Quality Documentation" },
  { icon: Truck, label: "Reliable Supply" },
  { icon: Globe2, label: "Domestic + Export Markets" },
];

const QuickFactsStrip = () => {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-sky-100 px-6 sm:px-10 py-6 sm:py-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
              >
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-sky-600 transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-sky-600 group-hover:text-white transition-all duration-300"
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                  {fact.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default QuickFactsStrip;