

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShieldCheck, Truck, Globe2 } from "lucide-react";
// import heroImage from "../../assets/hero-image.png";

// const Hero = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-sky-800 overflow-hidden">
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

//       {/* Subtle grid pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
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
//             Domestic & Global Pharma Brand
//           </motion.span>

//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
//             Quality Medicines,{" "}
//             <span className="bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent italic">
//               Trusted Across Borders
//             </span>
//           </h1>

//           <p className="text-base sm:text-lg text-sky-50/90 leading-relaxed mb-8 max-w-xl">
//             Varelia Lifesciences delivers high-quality pharmaceutical
//             products manufactured under strict quality standards —
//             distributed across India and exported to international markets.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link
//               to="/franchise"
//               className="group relative text-center bg-white text-sky-700 font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
//             >
//               <span className="relative z-10">Get Franchise</span>
//               <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-sky-200/60 to-transparent skew-x-12" />
//             </Link>
//             <Link
//               to="/products"
//               className="text-center bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
//             >
//               View Products
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
import { ShieldCheck, Truck, Globe2 } from "lucide-react";
import heroImage from "../../assets/hero-image.png";
import heroVideo from "../../assets/video.mp4";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to keep text readable */}
      {/* Overlay to keep text readable */}
<div className="absolute inset-0 bg-gradient-to-br from-sky-800/50 via-sky-700/45 to-sky-900/55" />

      {/* Decorative glowing orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
            Domestic & Global Pharma Brand
          </motion.span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Quality Medicines,{" "}
            <span className="bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent italic">
              Trusted Across Borders
            </span>
          </h1>

          <p className="text-base sm:text-lg text-sky-50/90 leading-relaxed mb-8 max-w-xl">
            Varelia Lifesciences delivers high-quality pharmaceutical
            products manufactured under strict quality standards —
            distributed across India and exported to international markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/franchise"
              className="group relative text-center bg-white text-sky-700 font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Get Franchise</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-sky-200/60 to-transparent skew-x-12" />
            </Link>
            <Link
              to="/products"
              className="text-center bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              View Products
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-10">
            <div className="flex items-center gap-2 text-sky-50/90 text-sm">
              <ShieldCheck size={20} className="text-sky-200" />
              Quality Assured
            </div>
            <div className="flex items-center gap-2 text-sky-50/90 text-sm">
              <Truck size={20} className="text-sky-200" />
              Pan-India Delivery
            </div>
            <div className="flex items-center gap-2 text-sky-50/90 text-sm">
              <Globe2 size={20} className="text-sky-200" />
              Global Export
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
            <img
              src={heroImage}
              alt="Varelia Lifesciences - Quality Pharmaceutical Products"
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
            />

            {/* Floating Badge - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-2 sm:top-0 sm:right-0 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-none">
                  100% Genuine
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Quality Assured
                </p>
              </div>
            </motion.div>

            {/* Floating Badge - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-2 sm:bottom-2 sm:-left-4 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
                <Globe2 size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-none">
                  India + Global
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Reach
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;