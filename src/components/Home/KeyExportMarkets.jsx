// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Globe2 } from "lucide-react";

// // Images - manually imported
// import indiaImage from "../../assets/markets/india.jpeg";
// import middleEastImage from "../../assets/markets/Middle-East.jpeg";
// import africaImage from "../../assets/markets/Africa.jpg";
// import seAsiaImage from "../../assets/markets/SE-Asia.jpeg";
// import centralAsiaImage from "../../assets/markets/Central-Asia.jpg";

// // Image mapping
// const images = {
//   india: indiaImage,
//   "Middle-East": middleEastImage,
//   Africa: africaImage,
//   "SE-Asia": seAsiaImage,
//   "Central-Asia": centralAsiaImage,
// };

// const getImage = (name) => images[name] || null;

// const markets = [
//   {
//     name: "India",
//     file: "india",
//     tag: "Home market",
//     desc: "Domestic B2B supply for distributors and institutions.",
//     home: true,
//   },
//   {
//     name: "Middle East",
//     file: "Middle-East",
//     tag: "Target market",
//     desc: "Importer and distributor partnerships.",
//   },
//   {
//     name: "Africa",
//     file: "Africa",
//     tag: "Target market",
//     desc: "Distributor and institutional partnerships.",
//   },
//   {
//     name: "South-East Asia",
//     file: "SE-Asia",
//     tag: "Target market",
//     desc: "Importer and distributor partnerships.",
//   },
//   {
//     name: "Central Asia",
//     file: "Central-Asia",
//     tag: "Target market",
//     desc: "Importer partnerships.",
//   },
// ];

// const KeyExportMarkets = () => {
//   return (
//     <section className="relative py-16 sm:py-20 bg-sky-50/70 overflow-hidden">
//       <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl" />
//       <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12"
//         >
//           <div className="max-w-2xl">
//             <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
//               Global Reach
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
//               Key Export <span className="text-sky-600 italic">Markets</span>
//             </h2>
//             <p className="text-slate-600 mt-3 text-sm sm:text-base">
//               We are building importer and distributor partnerships across
//               selected regions. Requirements vary by product and destination.
//             </p>
//           </div>

//           <Link
//             to="/global"
//             className="group inline-flex items-center gap-2 text-sky-700 font-semibold border-b-2 border-sky-400 pb-1 hover:gap-3 transition-all duration-300 shrink-0 w-fit"
//           >
//             Explore Markets
//             <ArrowRight
//               size={18}
//               className="group-hover:translate-x-1 transition-transform duration-300"
//             />
//           </Link>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
//           {markets.map((market, i) => {
//             const img = getImage(market.file);

//             return (
//               <motion.div
//                 key={market.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="sm:last:col-span-2 lg:last:col-span-1"
//               >
//                 <Link
//                   to="/global"
//                   className="group block h-full bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-500"
//                 >
//                   {/* Image */}
//                   <div className="relative h-36 sm:h-40 overflow-hidden bg-gradient-to-br from-sky-600 to-sky-800">
//                     {img ? (
//                       <img
//                         src={img}
//                         alt={market.name}
//                         loading="lazy"
//                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       />
//                     ) : (
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Globe2 size={40} className="text-white/60" />
//                       </div>
//                     )}

//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

//                     <span
//                       className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
//                         market.home
//                           ? "bg-sky-600 text-white"
//                           : "bg-white/90 text-sky-700"
//                       }`}
//                     >
//                       {market.tag}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4 sm:p-5">
//                     <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-300 mb-1">
//                       {market.name}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
//                       {market.desc}
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>

//         <p className="mt-8 text-center text-xs sm:text-sm text-slate-500">
//           Target markets indicate where we are building partnerships, not
//           current operating presence.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default KeyExportMarkets;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Globe2, Info } from "lucide-react";

import indiaImage from "../../assets/markets/India.png";
import middleEastImage from "../../assets/markets/Middle-East.png";
import africaImage from "../../assets/markets/Africa.png";
import seAsiaImage from "../../assets/markets/SE-Asia.png";
import centralAsiaImage from "../../assets/markets/Central-Asia.png";

const AUTOPLAY_MS = 5000;

const markets = [
  {
    name: "India",
    image: indiaImage,
    tag: "Home market",
    desc: "Domestic B2B supply for distributors and institutions.",
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
    desc: "Distributor and institutional partnerships.",
  },
  {
    name: "South-East Asia",
    image: seAsiaImage,
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "Central Asia",
    image: centralAsiaImage,
    tag: "Target market",
    desc: "Importer partnerships.",
  },
];

const KeyExportMarkets = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const market = markets[active];
  const autoplay = !paused && !reduceMotion;

  // Auto-advance
  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % markets.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [active, autoplay]);

  return (
    <section className="relative py-16 sm:py-24 bg-slate-900 overflow-hidden">
      {/* Dotted world-map style background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7dd3fc 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Glows */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slowly rotating orbit ring */}
      <motion.div
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -right-48 top-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-dashed border-sky-400/15 pointer-events-none hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
              <Globe2 size={14} />
              Global Reach
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Key Export{" "}
              <span className="text-sky-400 italic">Markets</span>
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              We are building importer and distributor partnerships across
              selected regions. Requirements vary by product and destination.
            </p>
          </div>

          <Link
            to="/global"
            className="group inline-flex items-center gap-2 text-sky-400 font-semibold border-b-2 border-sky-500/60 pb-1 hover:text-sky-300 hover:gap-3 transition-all duration-300 shrink-0 w-fit"
          >
            Explore Markets
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>

        {/* Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="grid lg:grid-cols-[320px_1fr] gap-5 lg:gap-8"
        >
          {/* List */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {markets.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="relative snap-start shrink-0 lg:shrink text-left min-w-[170px] lg:min-w-0 rounded-xl px-4 py-3.5 sm:py-4 border border-slate-700/70 hover:border-sky-500/40 transition-colors duration-300 group"
                >
                  {isActive && (
                    <motion.span
                      layoutId="market-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-sky-500/15 border border-sky-400/50 shadow-lg shadow-sky-500/10"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-3.5">
                    <span
                      className={`text-xs font-bold tabular-nums transition-colors duration-300 ${
                        isActive ? "text-sky-300" : "text-slate-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 min-w-0">
                      <span
                        className={`block text-sm sm:text-base font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`block text-[10px] uppercase tracking-widest mt-0.5 ${
                          item.home ? "text-sky-300" : "text-slate-500"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </span>

                    <ArrowRight
                      size={16}
                      className={`hidden lg:block shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-sky-300 translate-x-0 opacity-100"
                          : "text-slate-600 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Image panel */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px] rounded-3xl overflow-hidden border border-sky-500/20 shadow-2xl shadow-sky-950/50 bg-slate-800">
            {/* Images (crossfade + settle zoom) */}
            <AnimatePresence>
              <motion.img
                key={market.name}
                src={market.image}
                alt={market.name}
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-transparent" />

            {/* Counter */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white tabular-nums">
              {String(active + 1).padStart(2, "0")}
              <span className="text-white/50"> / {String(markets.length).padStart(2, "0")}</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={market.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <span
                    className={`inline-block text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3 ${
                      market.home
                        ? "bg-sky-500 text-white"
                        : "bg-white/15 text-sky-100 backdrop-blur-md border border-white/20"
                    }`}
                  >
                    {market.tag}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                    {market.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 max-w-md leading-relaxed">
                    {market.desc}
                  </p>

                  {/* Animated route: India -> region */}
                  {!market.home && (
                    <div className="mt-5 flex items-center gap-3 max-w-md">
                      <span className="shrink-0 text-xs font-semibold text-white bg-sky-600/90 px-3 py-1 rounded-full">
                        India
                      </span>

                      <div className="relative flex-1 h-4 flex items-center">
                        <div className="absolute inset-x-0 border-t border-dashed border-white/40" />
                        {!reduceMotion && (
                          <motion.span
                            animate={{ left: ["0%", "94%"] }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_12px_3px_rgba(125,211,252,0.7)]"
                          />
                        )}
                      </div>

                      <span className="shrink-0 text-xs font-semibold text-white bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 rounded-full">
                        {market.name}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Autoplay progress bar */}
            {autoplay && (
              <motion.div
                key={`bar-${active}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-sky-300"
              />
            )}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex items-start sm:items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-400 text-center"
        >
          <Info size={15} className="text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            Target markets indicate where we are building partnerships, not
            current operating presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyExportMarkets;