import { motion } from "framer-motion";
import {
  FlaskConical,
  ShieldCheck,
  Truck,
  Users,
  Package,
  Award,
  Clock,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Quality Manufacturing",
    desc: "Products manufactured under strict quality control by certified third-party partners.",
  },
  {
    icon: ShieldCheck,
    title: "GMP Certified",
    desc: "Every batch follows WHO-GMP guidelines to ensure safety and efficacy.",
  },
  {
    icon: Truck,
    title: "Pan-India Reach",
    desc: "Reliable domestic supply chain ensuring delivery across every state.",
  },
  {
    icon: Users,
    title: "Franchise Support",
    desc: "Complete onboarding, marketing, and supply support for PCD partners.",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    desc: "Tablets, capsules, syrups & more — covering multiple therapeutic segments.",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    desc: "Built on consistency and reliability trusted by distributors nationwide.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "Efficient logistics ensuring your stock reaches you without delays.",
  },
  {
    icon: Handshake,
    title: "Transparent Pricing",
    desc: "Fair, upfront pricing with no hidden costs across every order.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Built on Quality &{" "}
            <span className="text-sky-400 italic">Trust</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            We combine reliable manufacturing partnerships with strong
            domestic distribution to deliver medicines you can count on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
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
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;