// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ChevronRight } from "lucide-react";

// const ProductsHero = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-50 py-14 sm:py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
//             Our Product Range
//           </span>

//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
//             Quality{" "}
//             <span className="text-sky-600 italic">Large Volume Parenterals</span>
//           </h1>

//           <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
//             A comprehensive range of I.P./B.P. standard IV fluids and
//             injections, manufactured under licensed arrangements for
//             hospitals and healthcare providers.
//           </p>

//           {/* Breadcrumb */}
//           <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
//             <Link to="/" className="hover:text-sky-600 transition-colors">
//               Home
//             </Link>
//             <ChevronRight size={14} />
//             <span className="text-sky-700 font-medium">Products</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProductsHero;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, FlaskConical } from "lucide-react";

const ProductsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-sky-800 py-14 sm:py-20 overflow-hidden">
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

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-14 h-14 mx-auto bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm"
          >
            <FlaskConical size={26} className="text-sky-200" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
            Our Product Range
          </motion.span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Quality{" "}
            <span className="bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent italic">
              Large Volume Parenterals
            </span>
          </h1>

          <p className="text-sky-50/90 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            A comprehensive range of I.P./B.P. standard IV fluids and
            injections, manufactured under licensed arrangements for
            hospitals and healthcare providers.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-sky-100/80">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Products</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHero;