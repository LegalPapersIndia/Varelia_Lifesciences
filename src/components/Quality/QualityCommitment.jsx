// import { motion } from "framer-motion";
// import { FlaskConical, ShieldCheck, ClipboardCheck, Truck } from "lucide-react";

// const commitments = [
//   {
//     icon: <FlaskConical size={22} />,
//     title: "Licensed Sourcing",
//     desc: "Every product is sourced from licensed Indian manufacturers under strict third-party arrangements.",
//   },
//   {
//     icon: <ShieldCheck size={22} />,
//     title: "Quality Assurance",
//     desc: "Products meet pharmaceutical quality standards (I.P./B.P.) before reaching our distribution network.",
//   },
//   {
//     icon: <ClipboardCheck size={22} />,
//     title: "Batch Consistency",
//     desc: "Every batch is checked to ensure consistent quality and compliance across our entire product range.",
//   },
//   {
//     icon: <Truck size={22} />,
//     title: "Safe Handling & Delivery",
//     desc: "Careful handling and reliable logistics ensure products reach you in optimal condition, every time.",
//   },
// ];

// const QualityCommitment = () => {
//   return (
//     <section
//       id="quality"
//       className="py-16 md:py-24 bg-sky-50 scroll-mt-24"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
//         >
//           <span className="inline-block text-sky-700 uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
//             Quality & Certifications
//           </span>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
//             Our Commitment to{" "}
//             <span className="text-sky-600">Quality</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {commitments.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.12 }}
//               whileHover={{ y: -8 }}
//               className="group relative bg-white border border-slate-900/10 hover:border-sky-400/50 rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/10"
//             >
//               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900 text-sky-400 mb-6 transition-all duration-500 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-6">
//                 {item.icon}
//               </div>

//               <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-slate-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QualityCommitment;




import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, ClipboardCheck, Truck } from "lucide-react";
import sourcingImg from "../../assets/Licensed-Sourcing.jpg";
import assuranceImg from "../../assets/Quality-Assurance.jpg";
import consistencyImg from "../../assets/Consistency.webp";
import deliveryImg from "../../assets/Delivery.jpg";

const commitments = [
  {
    icon: <FlaskConical size={22} />,
    image: sourcingImg,
    title: "Licensed Sourcing",
    desc: "Every product is sourced from licensed Indian manufacturers under strict third-party arrangements.",
  },
  {
    icon: <ShieldCheck size={22} />,
    image: assuranceImg,
    title: "Quality Assurance",
    desc: "Products meet pharmaceutical quality standards (I.P./B.P.) before reaching our distribution network.",
  },
  {
    icon: <ClipboardCheck size={22} />,
    image: consistencyImg,
    title: "Batch Consistency",
    desc: "Every batch is checked to ensure consistent quality and compliance across our entire product range.",
  },
  {
    icon: <Truck size={22} />,
    image: deliveryImg,
    title: "Safe Handling & Delivery",
    desc: "Careful handling and reliable logistics ensure products reach you in optimal condition, every time.",
  },
];

const QualityCommitment = () => {
  return (
    <section
      id="quality"
      className="relative py-16 md:py-24 bg-sky-50 scroll-mt-24 overflow-hidden"
    >
      {/* Soft background blobs */}
      <div className="absolute top-0 -left-24 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-sky-700 uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Quality & Certifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
            Our Commitment to{" "}
            <span className="text-sky-600">Quality</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-white border border-slate-900/10 hover:border-sky-400/60 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Bottom fade for smooth blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                {/* Sky tint on hover */}
                <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/25 transition-colors duration-500" />
              </div>

              {/* Icon badge (overlaps image) */}
              <div className="relative z-10 -mt-7 ml-6 w-14 h-14 flex items-center justify-center rounded-full bg-slate-900 text-sky-400 border-4 border-white shadow-lg transition-all duration-500 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 pt-4 pb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-sky-600">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent line grows on hover */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;