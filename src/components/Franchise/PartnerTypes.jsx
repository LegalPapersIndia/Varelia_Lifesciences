// import { motion } from "framer-motion";
// import { Truck, Ship, Factory, ArrowRight } from "lucide-react";

// // `value` form ke Business Type dropdown se match hona chahiye (form wali file mein same rakhenge)
// const partners = [
//   {
//     num: "01",
//     icon: Truck,
//     value: "Distribution Partner",
//     title: "Distribution Partner",
//     desc: "For pharmaceutical distributors and wholesalers seeking reliable product supply.",
//     cta: "Submit Distributor Enquiry",
//   },
//   {
//     num: "02",
//     icon: Ship,
//     value: "Import / Export Partner",
//     title: "Import / Export Partner",
//     desc: "For international importers, distributors and pharmaceutical companies.",
//     cta: "Start Export Discussion",
//   },
//   {
//     num: "03",
//     icon: Factory,
//     value: "Manufacturing Partner",
//     title: "Manufacturing Partner",
//     desc: "For qualified manufacturers interested in long-term supply partnerships.",
//     cta: "Become a Supply Partner",
//   },
// ];

// const PartnerTypes = ({ onSelect }) => {
//   const handleClick = (value) => {
//     onSelect?.(value);
//     document
//       .getElementById("enquiry")
//       ?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/60 to-white overflow-hidden">
//       <div className="absolute top-10 -left-24 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 -right-24 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-2xl mx-auto mb-12"
//         >
//           <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
//             Partner With Varelia
//           </span>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
//             Three Ways to{" "}
//             <span className="text-sky-600 italic">Work With Us</span>
//           </h2>
//           <p className="text-slate-600 mt-3 text-sm sm:text-base">
//             Choose the entry point that fits your business.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {partners.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.value}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: i * 0.12 }}
//                 whileHover={{ y: -8 }}
//                 className="group relative flex flex-col bg-white border border-sky-100 rounded-3xl p-7 sm:p-8 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-sky-500/15 hover:border-sky-300 transition-all duration-500"
//               >
//                 {/* Watermark number */}
//                 <span className="absolute top-3 right-5 text-6xl sm:text-7xl font-bold text-sky-100 group-hover:text-sky-200 transition-colors duration-500 select-none">
//                   {item.num}
//                 </span>

//                 {/* Glow */}
//                 <span className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-sky-200/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="relative z-10 flex flex-col flex-1">
//                   <div className="w-14 h-14 bg-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                     <Icon size={26} className="text-white" />
//                   </div>

//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
//                     {item.desc}
//                   </p>

//                   <button
//                     onClick={() => handleClick(item.value)}
//                     className="group/btn mt-auto w-full inline-flex items-center justify-center gap-2 bg-sky-600 text-white text-sm font-semibold px-5 py-3.5 rounded-xl hover:bg-sky-700 transition-colors duration-300 shadow-md"
//                   >
//                     {item.cta}
//                     <ArrowRight
//                       size={16}
//                       className="group-hover/btn:translate-x-1 transition-transform duration-300"
//                     />
//                   </button>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnerTypes;



import { motion } from "framer-motion";
import { Truck, Ship, Factory, ArrowRight } from "lucide-react";
import partnerImg from "../../assets/Partner.jpg";
import importExportImg from "../../assets/Import-Export.jpg";
import manufacturingImg from "../../assets/Manufacturing.jpg";

// `value` form ke Business Type dropdown se match hona chahiye (form wali file mein same rakhenge)
const partners = [
  {
    icon: Truck,
    image: partnerImg,
    value: "Distribution Partner",
    title: "Distribution Partner",
    desc: "For pharmaceutical distributors and wholesalers seeking reliable product supply.",
    cta: "Submit Distributor Enquiry",
  },
  {
    icon: Ship,
    image: importExportImg,
    value: "Import / Export Partner",
    title: "Import / Export Partner",
    desc: "For international importers, distributors and pharmaceutical companies.",
    cta: "Start Export Discussion",
  },
  {
    icon: Factory,
    image: manufacturingImg,
    value: "Manufacturing Partner",
    title: "Manufacturing Partner",
    desc: "For qualified manufacturers interested in long-term supply partnerships.",
    cta: "Become a Supply Partner",
  },
];

const PartnerTypes = ({ onSelect }) => {
  const handleClick = (value) => {
    onSelect?.(value);
    document
      .getElementById("enquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/60 to-white overflow-hidden">
      <div className="absolute top-10 -left-24 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Partner With Varelia
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Three Ways to{" "}
            <span className="text-sky-600 italic">Work With Us</span>
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Choose the entry point that fits your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {partners.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative h-[320px] sm:h-[300px] lg:h-[300px] rounded-2xl overflow-hidden border border-sky-100 shadow-md hover:shadow-2xl hover:shadow-sky-500/25 hover:border-sky-300 transition-all duration-500"
              >
                {/* Background image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-slate-900/10 transition-opacity duration-500" />

                {/* Sky tint on hover */}
                <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/25 transition-colors duration-500" />

                {/* Icon (top-left) */}
                <div className="absolute top-4 left-4 z-10 w-11 h-11 bg-sky-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon size={22} className="text-white" />
                </div>

                {/* Content (bottom) */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-transform duration-500 lg:group-hover:-translate-y-1">
                    {item.title}
                  </h3>

                  {/* Accent line grows on hover */}
                  <span className="block h-0.5 w-10 bg-sky-400 rounded-full mb-3 transition-all duration-500 group-hover:w-20" />

                  {/* Mobile: always visible | Desktop (lg): reveal on hover */}
                  <div className="overflow-hidden transition-all duration-500 ease-out lg:max-h-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:max-h-44 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                    <p className="text-sm text-white/85 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <button
                      onClick={() => handleClick(item.value)}
                      className="group/btn w-full inline-flex items-center justify-center gap-2 bg-sky-600 text-white text-sm font-semibold px-4 py-3 rounded-lg hover:bg-sky-500 transition-colors duration-300 shadow-md"
                    >
                      {item.cta}
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerTypes;