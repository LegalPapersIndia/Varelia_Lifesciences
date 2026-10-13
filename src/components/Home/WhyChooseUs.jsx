

import { motion } from "framer-motion";
import qualityImg from "../../assets/Quality.jpg";
import certifiedImg from "../../assets/Certified.jpg";
import panIndiaImg from "../../assets/Pan-India.jpg";
import franchiseImg from "../../assets/Franchise.jpg";
import wideImg from "../../assets/Wide.jpg";
import trustedImg from "../../assets/Trusted.jpg";
import timelyImg from "../../assets/Timely.jpg";
import transparentImg from "../../assets/Transparent.jpg";

const features = [
  {
    image: qualityImg,
    title: "Qualified Manufacturing Partners",
    desc: "Partner selection based on product, quality and market requirements.",
  },
  {
    image: certifiedImg,
    title: "Quality Documentation",
    desc: "Specifications, COA and applicable quality records, as applicable.",
  },
  {
    image: panIndiaImg,
    title: "Domestic & Export Supply",
    desc: "Supply coordination for distributors and importers in India and selected markets.",
  },
  {
    image: franchiseImg,
    title: "Partner Support",
    desc: "Order coordination, documentation and supply support for our partners.",
  },
  {
    image: wideImg,
    title: "IV & LVP Range",
    desc: "Saline, Ringer's, dextrose, dextrose-saline solutions, sterile water and more.",
  },
  {
    image: trustedImg,
    title: "Reliable Partnerships",
    desc: "Built on consistency and dependable execution, with a long-term view.",
  },
  {
    image: timelyImg,
    title: "Supply & Logistics",
    desc: "Order coordination, production planning, dispatch and delivery coordination.",
  },
  {
    image: transparentImg,
    title: "Transparent Communication",
    desc: "Clear commercial terms and timelines for every order.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-slate-900 py-16 sm:py-20 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Built on Quality &{" "}
            <span className="text-sky-400 italic">Trust</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            We combine qualified manufacturing partnerships with reliable
            sourcing and supply for domestic and export buyers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden hover:border-sky-500/50 hover:bg-slate-800 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
                <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;