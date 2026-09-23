import { motion } from "framer-motion";
import { Factory, FlaskConical, Truck } from "lucide-react";

const steps = [
  {
    icon: Factory,
    step: "01",
    title: "Licensed Sourcing",
    desc: "Products sourced from licensed Indian manufacturers under trusted third-party arrangements.",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "Quality Check",
    desc: "Every batch is checked against I.P./B.P. standards before it moves forward.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Distribution",
    desc: "Quality-assured products reach hospitals and distributors across India and abroad.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-16 sm:py-20 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            How We <span className="text-sky-600 italic">Work</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {/* Connecting line - desktop only */}
          <div className="hidden sm:block absolute top-8 left-[16.6%] right-[16.6%] h-0.5 bg-sky-200" />

          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-16 h-16 mx-auto bg-sky-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-sky-600/20">
                  <Icon size={26} className="text-white" />
                </div>

                <span className="text-sky-200 text-4xl font-bold absolute top-0 left-1/2 -translate-x-1/2 -z-10 select-none">
                  {item.step}
                </span>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;