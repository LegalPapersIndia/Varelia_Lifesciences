
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Info } from "lucide-react";

import indiaImage from "../../assets/markets/India.png";
import middleEastImage from "../../assets/markets/Middle-East.png";
import africaImage from "../../assets/markets/Africa.png";
import seAsiaImage from "../../assets/markets/SE-Asia.png";
import centralAsiaImage from "../../assets/markets/Central-Asia.png";

const regions = [
  {
    name: "India",
    image: indiaImage,
    tag: "Home market",
    desc: "Domestic B2B supply for distributors, hospitals and institutions.",
    home: true,
  },
  {
    name: "Middle East",
    image: middleEastImage,
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "Africa",
    image: africaImage,
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "SE Asia",
    image: seAsiaImage,
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "Central Asia",
    image: centralAsiaImage,
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
];

const TargetMarkets = () => {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 sm:py-24 bg-slate-900 overflow-hidden">
      {/* Dotted map-style background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7dd3fc 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Decorative orbit rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[520px] h-[520px] rounded-full border border-sky-500/10" />
        <div className="absolute inset-0 -m-32 rounded-full border border-sky-500/10" />
        <motion.div
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -m-16 rounded-full border border-dashed border-sky-400/20"
        />
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
            Target Markets
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Where We Are{" "}
            <span className="text-sky-400 italic">Building Partnerships</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            We are developing relationships with importers, distributors and
            pharmaceutical partners in selected regions.
          </p>
        </motion.div>

        {/* Expanding panels */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
          {regions.map((region, i) => {
            const isActive = i === active;

            return (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ flexGrow: isActive ? 3.4 : 1 }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`${region.name} - ${region.tag}`}
                className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer outline-none border transition-[flex-grow,height,border-color,box-shadow] duration-700 ease-in-out lg:basis-0 lg:min-w-0 lg:h-[460px] focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isActive
                    ? "h-72 sm:h-80 border-sky-400/50 shadow-2xl shadow-sky-500/20"
                    : "h-20 border-slate-700/70 hover:border-sky-500/40"
                }`}
              >
                {/* Image */}
                <img
                  src={region.image}
                  alt={region.name}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
                    isActive
                      ? "scale-100 saturate-100"
                      : "scale-110 saturate-50"
                  }`}
                />

                {/* Overlays */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/5"
                      : "bg-slate-950/60"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/15 to-transparent pointer-events-none" />

                {/* Shine sweep on activate */}
                {isActive && !reduceMotion && (
                  <motion.span
                    key={`shine-${active}`}
                    initial={{ x: "-120%" }}
                    animate={{ x: "320%" }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  />
                )}

                {/* Collapsed label */}
                <div
                  className={`absolute inset-0 flex items-center justify-start gap-4 px-5 lg:flex-col lg:justify-between lg:gap-0 lg:px-0 lg:py-6 transition-opacity duration-500 ${
                    isActive
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100 delay-300"
                  }`}
                >
                  <span className="text-xs font-bold text-sky-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-white lg:[writing-mode:vertical-rl] lg:rotate-180 lg:tracking-wide whitespace-nowrap">
                    {region.name}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-5 sm:p-7 transition-all duration-700 ${
                    isActive
                      ? "opacity-100 translate-y-0 delay-300"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {/* Pulsing pin */}
                    <span className="relative flex h-10 w-10 items-center justify-center">
                      {!reduceMotion && (
                        <span
                          className={`absolute inline-flex h-full w-full rounded-full opacity-50 animate-ping ${
                            region.home ? "bg-sky-300" : "bg-white"
                          }`}
                        />
                      )}
                      <span
                        className={`relative flex h-10 w-10 items-center justify-center rounded-full border ${
                          region.home
                            ? "bg-sky-500 border-sky-300"
                            : "bg-white/15 backdrop-blur-md border-white/30"
                        }`}
                      >
                        <MapPin size={18} className="text-white" />
                      </span>
                    </span>

                    <span
                      className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
                        region.home
                          ? "bg-sky-500 text-white"
                          : "bg-white/15 text-sky-100 backdrop-blur-md border border-white/20"
                      }`}
                    >
                      {region.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
                    {region.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-sm">
                    {region.desc}
                  </p>

                  {/* Animated accent line */}
                  <span className="mt-4 block h-0.5 w-14 rounded-full bg-gradient-to-r from-sky-300 to-sky-500" />
                </div>
              </motion.div>
            );
          })}
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
            The regions above show where we are building partnerships, and do
            not indicate an existing presence in each market.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetMarkets;