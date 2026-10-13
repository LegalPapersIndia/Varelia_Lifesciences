// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   Building2,
//   Globe2,
//   CheckCircle2,
//   Mail,
//   ArrowRight,
//   Info,
// } from "lucide-react";

// const pathways = [
//   {
//     icon: Building2,
//     tag: "India",
//     title: "Domestic Supply",
//     forWho: "Distributors, wholesalers, hospitals and institutions in India.",
//     points: [
//       "Sourcing from qualified manufacturing partners",
//       "Order coordination and dispatch within India",
//       "Product specifications and applicable documents",
//       "Pricing and commercial terms confirmed in the quotation",
//     ],
//     email: "domestic@varelialifesciences.com",
//   },
//   {
//     icon: Globe2,
//     tag: "International",
//     title: "Export Supply",
//     forWho: "Importers, distributors and pharmaceutical companies abroad.",
//     points: [
//       "Export documentation support, as applicable",
//       "Shipment and logistics coordination",
//       "Pack configuration confirmed as per market requirement",
//       "Product and document availability confirmed for each destination",
//     ],
//     email: "export@varelialifesciences.com",
//   },
// ];

// const DomesticExport = () => {
//   return (
//     <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
//       {/* Soft decorative blobs */}
//       <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-2xl mx-auto mb-12"
//         >
//           <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
//             Supply Pathways
//           </span>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
//             Domestic or Export,{" "}
//             <span className="text-sky-600 italic">Choose Your Pathway</span>
//           </h2>
//           <p className="text-slate-600 mt-3 text-sm sm:text-base">
//             Two clear routes for buyers in India and overseas, each with its
//             own point of contact.
//           </p>
//         </motion.div>

//         {/* Pathway cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//           {pathways.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: i * 0.15 }}
//                 whileHover={{ y: -8 }}
//                 className="group relative flex flex-col bg-white border border-sky-100 hover:border-sky-300 rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 overflow-hidden"
//               >
//                 {/* Tag */}
//                 <span className="absolute top-5 right-5 text-[10px] sm:text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
//                   {item.tag}
//                 </span>

//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{ rotate: 6, scale: 1.08 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-sky-600/25"
//                 >
//                   <Icon size={28} className="text-white" />
//                 </motion.div>

//                 <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-5">
//                   <span className="font-semibold text-slate-800">For: </span>
//                   {item.forWho}
//                 </p>

//                 {/* Points */}
//                 <ul className="space-y-3 mb-7 flex-1">
//                   {item.points.map((point) => (
//                     <li key={point} className="flex items-start gap-3">
//                       <CheckCircle2
//                         size={18}
//                         className="text-sky-600 shrink-0 mt-0.5"
//                       />
//                       <span className="text-sm text-slate-700 leading-relaxed">
//                         {point}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Actions */}
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                   <Link
//                     to="/contact"
//                     className="group/btn inline-flex items-center justify-center gap-2 bg-sky-700 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-sky-800 transition-colors shadow-md shadow-sky-700/20"
//                   >
//                     Request a Quote
//                     <ArrowRight
//                       size={16}
//                       className="group-hover/btn:translate-x-1 transition-transform"
//                     />
//                   </Link>
//                   <a
//                     href={`mailto:${item.email}`}
//                     className="inline-flex items-center justify-center gap-2 text-sky-700 hover:text-sky-900 text-sm font-medium break-all transition-colors"
//                   >
//                     <Mail size={16} className="shrink-0" />
//                     {item.email}
//                   </a>
//                 </div>

//                 {/* Bottom accent line */}
//                 <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full transition-all duration-500" />
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Note */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-8 max-w-3xl mx-auto flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-2xl px-5 py-4"
//         >
//           <Info size={20} className="text-sky-600 shrink-0 mt-0.5" />
//           <p className="text-sm text-slate-600 leading-relaxed">
//             <span className="font-semibold text-sky-700">Please note: </span>
//             Registration and import authorisation requirements vary by country
//             and are the importer's responsibility. Documentation, pack
//             configuration and commercial terms are confirmed for each order.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DomesticExport;


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Globe2,
  CheckCircle2,
  Mail,
  ArrowRight,
  Info,
} from "lucide-react";

const pathways = [
  {
    icon: Building2,
    tag: "India",
    title: "Domestic Supply",
    forWho: "Distributors, wholesalers, hospitals and institutions in India.",
    points: [
      "Sourcing from qualified manufacturing partners",
      "Order coordination and dispatch within India",
      "Product specifications and applicable documents",
      "Pricing and commercial terms confirmed in the quotation",
    ],
    email: "domestic@varelialifesciences.com",
    to: "/contact?type=domestic#quote",
  },
  {
    icon: Globe2,
    tag: "International",
    title: "Export Supply",
    forWho: "Importers, distributors and pharmaceutical companies abroad.",
    points: [
      "Export documentation support, as applicable",
      "Shipment and logistics coordination",
      "Pack configuration confirmed as per market requirement",
      "Product and document availability confirmed for each destination",
    ],
    email: "export@varelialifesciences.com",
    to: "/contact?type=export#quote",
  },
];

const DomesticExport = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
      {/* Soft decorative blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Supply Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Domestic or Export,{" "}
            <span className="text-sky-600 italic">Choose Your Pathway</span>
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Two clear routes for buyers in India and overseas, each with its
            own point of contact.
          </p>
        </motion.div>

        {/* Pathway cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pathways.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col bg-white border border-sky-100 hover:border-sky-300 rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Tag */}
                <span className="absolute top-5 right-5 text-[10px] sm:text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
                  {item.tag}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-sky-600/25"
                >
                  <Icon size={28} className="text-white" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-5">
                  <span className="font-semibold text-slate-800">For: </span>
                  {item.forWho}
                </p>

                {/* Points */}
                <ul className="space-y-3 mb-7 flex-1">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-sky-600 shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    to={item.to}
                    className="group/btn inline-flex items-center justify-center gap-2 bg-sky-700 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-sky-800 transition-colors shadow-md shadow-sky-700/20"
                  >
                    Request a Quote
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                  <a
                    href={`mailto:${item.email}`}
                    className="inline-flex items-center justify-center gap-2 text-sky-700 hover:text-sky-900 text-sm font-medium break-all transition-colors"
                  >
                    <Mail size={16} className="shrink-0" />
                    {item.email}
                  </a>
                </div>

                {/* Bottom accent line */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-2xl px-5 py-4"
        >
          <Info size={20} className="text-sky-600 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-semibold text-sky-700">Please note: </span>
            Registration and import authorisation requirements vary by country
            and are the importer's responsibility. Documentation, pack
            configuration and commercial terms are confirmed for each order.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DomesticExport;