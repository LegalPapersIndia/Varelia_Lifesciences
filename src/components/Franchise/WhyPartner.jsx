import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  FlaskConical,
  Headphones,
  Truck,
  Handshake,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Monopoly Rights",
    desc: "Exclusive area rights to build your business without internal competition.",
  },
  {
    icon: TrendingUp,
    title: "Low Investment",
    desc: "Start your franchise with minimal investment and high growth potential.",
  },
  {
    icon: FlaskConical,
    title: "Quality Products",
    desc: "I.P./B.P. standard products sourced from licensed manufacturers.",
  },
  {
    icon: Headphones,
    title: "Complete Support",
    desc: "Onboarding, promotional material, and ongoing business support.",
  },
  {
    icon: Truck,
    title: "Timely Supply",
    desc: "Reliable logistics ensuring stock reaches you without delays.",
  },
  {
    icon: Handshake,
    title: "Transparent Terms",
    desc: "Clear pricing and agreements with no hidden costs.",
  },
];

const WhyPartner = () => {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
            Why Partner With Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Benefits of Our{" "}
            <span className="text-sky-400 italic">Franchise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/30 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-sky-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
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

export default WhyPartner;