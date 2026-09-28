import { motion } from "framer-motion";
import { MapPin, Info } from "lucide-react";

const regions = [
  {
    name: "India",
    tag: "Home market",
    desc: "Domestic B2B supply for distributors, hospitals and institutions.",
    home: true,
  },
  {
    name: "Middle East",
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "Africa",
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "SE Asia",
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "Central Asia",
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
];

const TargetMarkets = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-slate-900 overflow-hidden">
      {/* Decorative orbit rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[520px] h-[520px] rounded-full border border-sky-500/10" />
        <div className="absolute inset-0 -m-32 rounded-full border border-sky-500/10" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -m-16 rounded-full border border-dashed border-sky-400/20"
        />
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
            Global Reach
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Connecting India With{" "}
            <span className="text-sky-400 italic">Global Healthcare Markets</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Build a qualified network of importers, distributors and
            pharmaceutical partners across selected markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 sm:last:col-span-2 lg:last:col-span-1 ${
                region.home
                  ? "bg-gradient-to-br from-sky-600 to-sky-700 border-sky-400/40 shadow-xl shadow-sky-500/20"
                  : "bg-slate-800/60 border-slate-700 hover:border-sky-500/50 hover:bg-slate-800"
              }`}
            >
              {/* Pulsing location dot */}
              <div className="relative w-12 h-12 mb-5">
                <span
                  className={`absolute inset-0 rounded-xl ${
                    region.home ? "bg-white/15" : "bg-sky-500/10 border border-sky-500/30"
                  }`}
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <MapPin
                    size={22}
                    className={region.home ? "text-white" : "text-sky-400"}
                  />
                </span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
                      region.home ? "bg-white" : "bg-sky-400"
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3 ${
                      region.home ? "bg-white" : "bg-sky-400"
                    }`}
                  />
                </span>
              </div>

              <p
                className={`text-[10px] uppercase tracking-widest mb-1 ${
                  region.home ? "text-sky-100" : "text-sky-400"
                }`}
              >
                {region.tag}
              </p>
              <h3 className="text-lg font-bold text-white mb-2">
                {region.name}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  region.home ? "text-sky-50/90" : "text-slate-400"
                }`}
              >
                {region.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm"
        >
          <Info size={18} className="text-sky-400 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold text-white">
              Target markets are not current operating presence.{" "}
            </span>
            The regions above show where we are building partnerships, and
            do not indicate an existing presence in each market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetMarkets;