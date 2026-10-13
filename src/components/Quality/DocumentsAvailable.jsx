// import { motion } from "framer-motion";
// import {
//   FlaskConical,
//   FileText,
//   ClipboardCheck,
//   FileCheck,
//   Landmark,
//   Info,
// } from "lucide-react";

// const documents = [
//   {
//     icon: FlaskConical,
//     title: "Certificate of Analysis (COA)",
//     desc: "Batch-wise analysis records for the supplied product, as applicable.",
//   },
//   {
//     icon: FileText,
//     title: "Product Specification",
//     desc: "Product specifications covering strength, pack size and packaging details.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "Batch Documentation",
//     desc: "Product and batch records that support traceability through the supply chain.",
//   },
//   {
//     icon: FileCheck,
//     title: "Partner GMP Documentation",
//     desc: "GMP documentation of the qualified manufacturing partner, where applicable.",
//   },
//   {
//     icon: Landmark,
//     title: "Stability & Regulatory Documents",
//     desc: "Stability and market-specific regulatory documents, as applicable.",
//   },
// ];

// // 5 cards: desktop pe 3 + 2 ka clean layout (6-column grid)
// const spanClass = (i) => {
//   if (i < 3) return "lg:col-span-2";
//   if (i === 3) return "lg:col-span-3";
//   return "sm:col-span-2 lg:col-span-3";
// };

// const DocumentsAvailable = () => {
//   return (
//     <section className="relative bg-slate-900 py-16 sm:py-20 overflow-hidden">
//       {/* Decorative glow */}
//       <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

//       {/* Subtle grid pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-2xl mx-auto mb-12"
//         >
//           <span className="inline-block bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
//             Documentation
//           </span>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
//             Documents{" "}
//             <span className="text-sky-400 italic">Available</span>
//           </h2>
//           <p className="text-slate-400 mt-3 text-sm sm:text-base">
//             Documentation varies by product, market and order, and is shared
//             as applicable.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
//           {documents.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className={`group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-7 overflow-hidden hover:border-sky-500/50 hover:bg-slate-800 transition-colors duration-300 ${spanClass(
//                   i
//                 )}`}
//               >
//                 {/* Hover glow */}
//                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/0 group-hover:bg-sky-500/10 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

//                 {/* As applicable tag */}
//                 <span className="absolute top-4 right-4 text-[10px] sm:text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full">
//                   As applicable
//                 </span>

//                 <motion.div
//                   whileHover={{ rotate: 6, scale: 1.08 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="relative w-12 h-12 sm:w-14 sm:h-14 bg-sky-500/10 border border-sky-500/30 rounded-xl flex items-center justify-center mb-5"
//                 >
//                   <Icon size={24} className="text-sky-400" />
//                 </motion.div>

//                 <h3 className="relative text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
//                   {item.title}
//                 </h3>
//                 <p className="relative text-sm text-slate-400 leading-relaxed">
//                   {item.desc}
//                 </p>

//                 {/* Bottom accent line */}
//                 <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-400 group-hover:w-full transition-all duration-500" />
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Buyer note */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-10 sm:mt-12 max-w-3xl mx-auto flex items-start gap-3 bg-sky-500/5 border border-sky-500/20 rounded-2xl px-5 py-4 backdrop-blur-sm"
//         >
//           <Info size={20} className="text-sky-400 shrink-0 mt-0.5" />
//           <p className="text-sm text-slate-300 leading-relaxed">
//             <span className="font-semibold text-sky-300">Buyer note: </span>
//             Final pack configuration, documentation, registration status and
//             commercial terms should be confirmed for each market and order.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DocumentsAvailable;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  FileText,
  ClipboardCheck,
  FileCheck,
  Landmark,
  Info,
  BadgeCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

const documents = [
  {
    icon: FlaskConical,
    title: "Certificate of Analysis (COA)",
    desc: "Batch-wise analysis records for the supplied product, as applicable.",
  },
  {
    icon: FileText,
    title: "Product Specification",
    desc: "Product specifications covering strength, pack size and packaging details.",
  },
  {
    icon: ClipboardCheck,
    title: "Batch Documentation",
    desc: "Batch-related records that support traceability, as applicable.",
  },
  {
    icon: FileCheck,
    title: "Partner GMP Documentation",
    desc: "GMP documentation of the qualified manufacturing partner, where applicable.",
  },
  {
    icon: Landmark,
    title: "Stability & Regulatory Documents",
    desc: "Stability and market-specific regulatory documents, as applicable.",
  },
];

const credentialCards = [
  {
    icon: BadgeCheck,
    tag: "Partner documents",
    title: "Manufacturing Partner Credentials",
    desc: "Manufacturing licences, GMP and similar certifications belong to the respective manufacturing partners. They are shared as partner documents and are not presented as Varelia's own.",
  },
  {
    icon: Building2,
    tag: "On request",
    title: "Varelia Company Details",
    desc: "Varelia Lifesciences is a trading company. Our company details can be requested through the Contact page.",
  },
];

// Layout: 3 cards on first row, 2 wider cards on second row (desktop)
const spanClass = (i) => {
  if (i < 3) return "lg:col-span-2";
  if (i === 3) return "lg:col-span-3";
  return "sm:col-span-2 lg:col-span-3";
};

const DocumentsAvailable = () => {
  return (
    <>
      {/* ───────── Dark section: documents ───────── */}
      <section className="relative bg-slate-900 py-16 sm:py-20 overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

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
              Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Documents{" "}
              <span className="text-sky-400 italic">Available</span>
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              Documentation varies by product, market and order, and is shared
              as applicable.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
            {documents.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-7 overflow-hidden hover:border-sky-500/50 hover:bg-slate-800 transition-colors duration-300 ${spanClass(
                    i
                  )}`}
                >
                  {/* Hover glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/0 group-hover:bg-sky-500/10 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

                  {/* As applicable tag */}
                  <span className="absolute top-4 right-4 text-[10px] sm:text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full">
                    As applicable
                  </span>

                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-12 h-12 sm:w-14 sm:h-14 bg-sky-500/10 border border-sky-500/30 rounded-xl flex items-center justify-center mb-5"
                  >
                    <Icon size={24} className="text-sky-400" />
                  </motion.div>

                  <h3 className="relative text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom accent line */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-400 group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Light section: whose credentials + CTA ───────── */}
      <section className="relative bg-sky-50 py-14 sm:py-18 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Transparency
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
              Whose Credentials{" "}
              <span className="text-sky-600 italic">Are Whose</span>
            </h2>
          </motion.div>

          {/* Credential cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentialCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white border border-sky-100 hover:border-sky-300 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute top-4 right-4 text-[10px] sm:text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full">
                    {card.tag}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-sky-600/25"
                  >
                    <Icon size={26} className="text-white" />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>

                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* Buyer note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-start gap-3 bg-white border border-sky-200 rounded-2xl px-5 py-4"
          >
            <Info size={20} className="text-sky-600 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600 leading-relaxed">
              <span className="font-semibold text-sky-700">Buyer note: </span>
              Final pack configuration, documentation, registration status and
              commercial terms should be confirmed for each market and order.
            </p>
          </motion.div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-sky-700 text-white font-semibold px-7 py-3 rounded-full hover:bg-sky-800 transition-colors shadow-lg shadow-sky-700/20"
            >
              Request Documents for Your Product
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentsAvailable;