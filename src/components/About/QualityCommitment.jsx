import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, ClipboardCheck, Truck } from "lucide-react";

const commitments = [
  {
    icon: <FlaskConical size={22} />,
    title: "Licensed Sourcing",
    desc: "Every product is sourced from licensed Indian manufacturers under strict third-party arrangements.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Quality Assurance",
    desc: "Products meet pharmaceutical quality standards (I.P./B.P.) before reaching our distribution network.",
  },
  {
    icon: <ClipboardCheck size={22} />,
    title: "Batch Consistency",
    desc: "Every batch is checked to ensure consistent quality and compliance across our entire product range.",
  },
  {
    icon: <Truck size={22} />,
    title: "Safe Handling & Delivery",
    desc: "Careful handling and reliable logistics ensure products reach you in optimal condition, every time.",
  },
];

const QualityCommitment = () => {
  return (
    <section
      id="quality"
      className="py-16 md:py-24 bg-sky-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-sky-700 uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Quality & Certifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
            Our Commitment to{" "}
            <span className="text-sky-600">Quality</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-slate-900/10 hover:border-sky-400/50 rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900 text-sky-400 mb-6 transition-all duration-500 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-6">
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;