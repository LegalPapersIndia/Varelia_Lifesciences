// import { motion } from "framer-motion";
// import { FlaskConical, ShieldCheck, ClipboardCheck, BadgeCheck } from "lucide-react";

// const badges = [
//   { icon: FlaskConical, label: "I.P./B.P. Standards" },
//   { icon: ShieldCheck, label: "Licensed Manufacturing" },
//   { icon: ClipboardCheck, label: "Quality Tested" },
//   { icon: BadgeCheck, label: "Batch Certified" },
// ];

// const CertificationsStrip = () => {
//   return (
//     <section className="py-8 sm:py-10 bg-white border-y border-sky-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
//           {badges.map((badge, i) => {
//             const Icon = badge.icon;
//             return (
//               <motion.div
//                 key={badge.label}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.4, delay: i * 0.08 }}
//                 className="flex items-center gap-2.5"
//               >
//                 <div className="w-9 h-9 bg-sky-50 rounded-lg flex items-center justify-center shrink-0">
//                   <Icon size={18} className="text-sky-600" />
//                 </div>
//                 <span className="text-sm sm:text-base font-medium text-slate-700">
//                   {badge.label}
//                 </span>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationsStrip;




import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, ClipboardCheck, BadgeCheck } from "lucide-react";

const badges = [
  { icon: FlaskConical, label: "I.P./B.P. Standards" },
  { icon: ShieldCheck, label: "Licensed Manufacturing" },
  { icon: ClipboardCheck, label: "Quality Tested" },
  { icon: BadgeCheck, label: "Batch Certified" },
];

const CertificationsStrip = () => {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-sky-100 px-6 sm:px-10 py-6 sm:py-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
              >
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-sky-600 transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-sky-600 group-hover:text-white transition-all duration-300"
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                  {badge.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsStrip;