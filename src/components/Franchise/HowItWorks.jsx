import { motion } from "framer-motion";
import { MessageSquare, FileCheck, FileSignature, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Enquiry",
    desc: "Fill out our franchise enquiry form or contact us directly to express interest.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Discussion",
    desc: "Our team connects with you to discuss your area, requirements, and terms.",
  },
  {
    icon: FileSignature,
    step: "03",
    title: "Agreement",
    desc: "Finalize the franchise agreement with clear terms and pricing.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Start Business",
    desc: "Receive products, promotional support, and begin your franchise journey.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            The Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            How It <span className="text-sky-600 italic">Works</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-sky-100" />

          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
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
                <p className="text-sm text-slate-500 leading-relaxed max-w-[220px] mx-auto">
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

export default HowItWorks;