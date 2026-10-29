

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake, Building2, Plane, Factory, ArrowRight } from "lucide-react";
import tradingImg from "../../assets/Trading.jpg";
import domesticImg from "../../assets/Domestic-Supply.jpg";
import exportImg from "../../assets/International-Export.jpg";
import thirdPartyImg from "../../assets/Third-Party.jpg";

const items = [
  {
    icon: Handshake,
    image: tradingImg,
    title: "Trading & Sourcing",
    desc: "Responsible sourcing of pharmaceutical products through qualified partners.",
    to: "/capabilities",
  },
  {
    icon: Building2,
    image: domesticImg,
    title: "Institutional Supply",
    desc: "B2B supply for hospitals, institutions and distributors.",
    to: "/capabilities",
  },
  {
    icon: Plane,
    image: exportImg,
    title: "Export",
    desc: "Importer and distributor partnerships across international markets.",
    to: "/global",
  },
  {
    icon: Factory,
    image: thirdPartyImg,
    title: "Manufacturing Partnerships",
    desc: "Collaboration with qualified third-party manufacturers.",
    to: "/partners",
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            One Supply Partner.{" "}
            <span className="text-sky-600 italic">Multiple Healthcare Needs.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our brand, your trusted sourcing desk. Products are supplied through
            qualified third-party manufacturing partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-300 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/20 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute -top-7 left-6 w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-600/30 border-4 border-white"
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 mt-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors"
                  >
                    Learn more
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                <span className="absolute bottom-0 left-0 h-1 w-full bg-sky-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;