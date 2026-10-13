


// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import { ShieldCheck, Truck, Globe2 } from "lucide-react";
// // import heroImage from "../../assets/hero-image.png";
// // import heroVideo from "../../assets/home-banner.mp4";

// // const Hero = () => {
// //   return (
// //     <section className="relative overflow-hidden">
// //       {/* Video Background */}
// //       <video
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         className="absolute inset-0 w-full h-full object-cover"
// //       >
// //         <source src={heroVideo} type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video>

// //       {/* Overlay to keep text readable */}
// //       {/* Overlay to keep text readable */}
// // <div className="absolute inset-0 bg-gradient-to-br from-sky-800/50 via-sky-700/45 to-sky-900/55" />

// //       {/* Decorative glowing orbs */}
// //       <motion.div
// //         animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
// //         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute -top-20 -left-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
// //       />
// //       <motion.div
// //         animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
// //         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl"
// //       />

// //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
// //         {/* Left Content */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <motion.span
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2, duration: 0.5 }}
// //             className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm"
// //           >
// //             <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
// //             Domestic & Global Pharma Brand
// //           </motion.span>

// //           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
// //             Quality Medicines,{" "}
// //             <span className="bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent italic">
// //               Trusted Across Borders
// //             </span>
// //           </h1>

// //           <p className="text-base sm:text-lg text-sky-50/90 leading-relaxed mb-8 max-w-xl">
// //             Varelia Lifesciences delivers high-quality pharmaceutical
// //             products manufactured under strict quality standards —
// //             distributed across India and exported to international markets.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4">
// //             <Link
// //               to="/franchise"
// //               className="group relative text-center bg-white text-sky-700 font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
// //             >
// //               <span className="relative z-10">Get Franchise</span>
// //               <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-sky-200/60 to-transparent skew-x-12" />
// //             </Link>
// //             <Link
// //               to="/products"
// //               className="text-center bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
// //             >
// //               View Products
// //             </Link>
// //           </div>

// //           {/* Trust Badges */}
// //           <div className="flex flex-wrap gap-6 mt-10">
// //             <div className="flex items-center gap-2 text-sky-50/90 text-sm">
// //               <ShieldCheck size={20} className="text-sky-200" />
// //               Quality Assured
// //             </div>
// //             <div className="flex items-center gap-2 text-sky-50/90 text-sm">
// //               <Truck size={20} className="text-sky-200" />
// //               Pan-India Delivery
// //             </div>
// //             <div className="flex items-center gap-2 text-sky-50/90 text-sm">
// //               <Globe2 size={20} className="text-sky-200" />
// //               Global Export
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* Right Visual */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //           className="relative flex justify-center lg:justify-end"
// //         >
// //           <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
// //             <img
// //               src={heroImage}
// //               alt="Varelia Lifesciences - Quality Pharmaceutical Products"
// //               className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
// //             />

// //             {/* Floating Badge - Top Right */}
// //             <motion.div
// //               initial={{ opacity: 0, y: -10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.6 }}
// //               className="absolute -top-4 -right-2 sm:top-0 sm:right-0 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2"
// //             >
// //               <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
// //                 <ShieldCheck size={16} className="text-white" />
// //               </div>
// //               <div>
// //                 <p className="text-xs font-bold text-slate-900 leading-none">
// //                   100% Genuine
// //                 </p>
// //                 <p className="text-[10px] text-slate-500 mt-0.5">
// //                   Quality Assured
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* Floating Badge - Bottom Left */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.8 }}
// //               className="absolute -bottom-4 -left-2 sm:bottom-2 sm:-left-4 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2"
// //             >
// //               <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
// //                 <Globe2 size={16} className="text-white" />
// //               </div>
// //               <div>
// //                 <p className="text-xs font-bold text-slate-900 leading-none">
// //                   India + Global
// //                 </p>
// //                 <p className="text-[10px] text-slate-500 mt-0.5">
// //                   Reach
// //                 </p>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;



// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShieldCheck, Truck, Globe2 } from "lucide-react";
// import heroImage from "../../assets/hero-image.png";
// import heroVideo from "../../assets/home-banner.mp4";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src={heroVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay to keep text readable */}
//       <div className="absolute inset-0 bg-gradient-to-br from-sky-800/50 via-sky-700/45 to-sky-900/55" />

//       {/* Decorative glowing orbs */}
//       <motion.div
//         animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-20 -left-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
//       />
//       <motion.div
//         animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl"
//       />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm"
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
//             Pharmaceutical Supply & Global Trade
//           </motion.span>

//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
//             Quality Pharmaceuticals.
//             <br />
//             Reliable Supply.{" "}
//             <span className="bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent italic">
//               Global Reach.
//             </span>
//           </h1>

//           <p className="text-base sm:text-lg text-sky-50/90 leading-relaxed mb-8 max-w-xl">
//             India-based pharmaceutical trading and healthcare supply through
//             qualified manufacturing partners.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link
//               to="/products"
//               className="group relative text-center bg-white text-sky-700 font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
//             >
//               <span className="relative z-10">Explore Products</span>
//               <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-sky-200/60 to-transparent skew-x-12" />
//             </Link>
//             <Link
//               to="/contact"
//               className="text-center bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
//             >
//               Export Enquiry
//             </Link>
//           </div>

//           {/* Trust Badges */}
//           <div className="flex flex-wrap gap-6 mt-10">
//             <div className="flex items-center gap-2 text-sky-50/90 text-sm">
//               <ShieldCheck size={20} className="text-sky-200" />
//               Quality Assured
//             </div>
//             <div className="flex items-center gap-2 text-sky-50/90 text-sm">
//               <Truck size={20} className="text-sky-200" />
//               Pan-India Delivery
//             </div>
//             <div className="flex items-center gap-2 text-sky-50/90 text-sm">
//               <Globe2 size={20} className="text-sky-200" />
//               Global Export
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Visual */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="relative flex justify-center lg:justify-end"
//         >
//           <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
//             <img
//               src={heroImage}
//               alt="Varelia Lifesciences - Quality Pharmaceutical Products"
//               className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
//             />

//             {/* Floating Badge - Top Right */}
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="absolute -top-4 -right-2 sm:top-0 sm:right-0 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2"
//             >
//               <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
//                 <ShieldCheck size={16} className="text-white" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-slate-900 leading-none">
//                   100% Genuine
//                 </p>
//                 <p className="text-[10px] text-slate-500 mt-0.5">
//                   Quality Assured
//                 </p>
//               </div>
//             </motion.div>

//             {/* Floating Badge - Bottom Left */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="absolute -bottom-4 -left-2 sm:bottom-2 sm:-left-4 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2"
//             >
//               <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
//                 <Globe2 size={16} className="text-white" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-slate-900 leading-none">
//                   India + Global
//                 </p>
//                 <p className="text-[10px] text-slate-500 mt-0.5">
//                   Reach
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Handshake,
  FileCheck,
  Globe2,
  Factory,
} from "lucide-react";
import heroImage from "../../assets/hero1.png";

const ctaStrip = [
  { icon: Handshake, label: "Qualified Manufacturing Partners" },
  { icon: FileCheck, label: "Documentation Support" },
  { icon: Globe2, label: "Domestic + Export Supply" },
];

const floatingCards = [
  {
    icon: Factory,
    title: "Qualified Partners",
    sub: "Third-party manufacturing",
    position: "top-2 right-2 sm:top-4 sm:-right-2",
    delay: 0.6,
  },
  {
    icon: FileCheck,
    title: "Export Documents",
    sub: "Confirmed per product",
    position: "bottom-2 left-2 sm:bottom-6 sm:-left-4",
    delay: 0.8,
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100">
      {/* Soft background shapes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#0369a1 1px, transparent 1px), linear-gradient(90deg, #0369a1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
              Trading • Sourcing • Institutional Supply • Global Trade
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.15] mb-5">
              Reliable{" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent italic">
                Pharmaceutical Supply.
              </span>
              <br />
              Global{" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent italic">
                Healthcare Partnerships.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Varelia Lifesciences is an India-based pharmaceutical trading
              company. We source and supply quality products for domestic and
              international buyers through qualified third-party manufacturing
              partners.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-sky-700 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-sky-800 hover:scale-105 transition-all duration-300 shadow-lg shadow-sky-700/25 overflow-hidden"
              >
                <span className="relative z-10">Request a Quote</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              </Link>

              <Link
                to="/products"
                className="text-center bg-white text-sky-800 font-semibold px-7 py-3.5 rounded-full border border-sky-200 hover:bg-sky-50 hover:border-sky-300 transition-all duration-300"
              >
                Explore Products
              </Link>
            </div>

            <Link
              to="/partners"
              className="group inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors"
            >
              Become a Manufacturing Partner
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square">
              {/* Frame */}
              <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 shadow-2xl shadow-sky-900/20 rotate-3" />
              <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-white to-sky-100 border border-sky-100 flex items-center justify-center overflow-hidden">
                <div className="absolute w-3/4 h-3/4 rounded-full bg-sky-200/50 blur-2xl" />
                <img
                  src={heroImage}
                  alt="Varelia Lifesciences - Pharmaceutical supply and sourcing"
                  className="relative w-4/5 h-4/5 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating cards */}
              {floatingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: card.delay }}
                    className={`absolute ${card.position} bg-white rounded-2xl shadow-xl border border-sky-50 px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5`}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-none">
                        {card.title}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">
                        {card.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {ctaStrip.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-sky-100 rounded-2xl px-5 py-4 shadow-sm"
              >
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-sky-700" />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;