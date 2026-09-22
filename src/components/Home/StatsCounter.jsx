import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Calendar, Package, Globe2, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Calendar, value: 2023, suffix: "", label: "Year Established" },
  { icon: Package, value: 16, suffix: "+", label: "Product Range" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Licensed Sourcing" },
  { icon: Globe2, value: 0, suffix: "", label: "Pan India + Export", isText: true, textValue: "Pan India" },
];

const Counter = ({ value, suffix, isText, textValue }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView && !isText) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, isText]);

  if (isText) {
    return (
      <span ref={ref} className="text-3xl sm:text-4xl font-bold text-white">
        {isInView ? textValue : ""}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-bold text-white">
      {display}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <section className="relative py-14 sm:py-16 bg-gradient-to-br from-sky-700 via-sky-600 to-sky-800 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
                  <Icon size={22} className="text-sky-200" />
                </div>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  isText={stat.isText}
                  textValue={stat.textValue}
                />
                <p className="text-sky-100/80 text-xs sm:text-sm mt-1.5">
                  {stat.label}
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