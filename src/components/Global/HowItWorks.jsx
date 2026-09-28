// import { motion } from "framer-motion";
// import { MessageSquare, FileCheck, FileSignature, Rocket } from "lucide-react";

// const steps = [
//   {
//     icon: MessageSquare,
//     step: "01",
//     title: "Enquiry",
//     desc: "Fill out our franchise enquiry form or contact us directly to express interest.",
//   },
//   {
//     icon: FileCheck,
//     step: "02",
//     title: "Discussion",
//     desc: "Our team connects with you to discuss your area, requirements, and terms.",
//   },
//   {
//     icon: FileSignature,
//     step: "03",
//     title: "Agreement",
//     desc: "Finalize the franchise agreement with clear terms and pricing.",
//   },
//   {
//     icon: Rocket,
//     step: "04",
//     title: "Start Business",
//     desc: "Receive products, promotional support, and begin your franchise journey.",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section className="bg-white py-16 sm:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-2xl mx-auto mb-14"
//         >
//           <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
//             The Process
//           </span>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
//             How It <span className="text-sky-600 italic">Works</span>
//           </h2>
//         </motion.div>

//         <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
//           {/* Connecting line - desktop only */}
//           <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-sky-100" />

//           {steps.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.step}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.12 }}
//                 className="relative text-center"
//               >
//                 <div className="relative z-10 w-16 h-16 mx-auto bg-sky-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-sky-600/20">
//                   <Icon size={26} className="text-white" />
//                 </div>

//                 <span className="text-sky-200 text-4xl font-bold absolute top-0 left-1/2 -translate-x-1/2 -z-10 select-none">
//                   {item.step}
//                 </span>

//                 <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 mt-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-slate-500 leading-relaxed max-w-[220px] mx-auto">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;




import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  Handshake,
  FileText,
  FileSignature,
  Factory,
  Plane,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Buyer Enquiry",
    desc: "Share your requirement: product, pack size, quantity and target market.",
  },
  {
    icon: Search,
    title: "Product & Market Review",
    desc: "We review product suitability, specifications and market requirements.",
  },
  {
    icon: Handshake,
    title: "Commercial Discussion",
    desc: "Pricing, quantity, timelines and commercial terms are discussed and agreed.",
  },
  {
    icon: FileText,
    title: "Documentation & Samples",
    desc: "Product and quality documentation, and samples where applicable.",
  },
  {
    icon: FileSignature,
    title: "Purchase Order",
    desc: "Order is confirmed with the agreed specifications and terms.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Release",
    desc: "Production through qualified manufacturing partners, followed by release as per agreed requirements.",
  },
  {
    icon: Plane,
    title: "Export & Logistics",
    desc: "Dispatch, documentation and shipment coordination, as applicable.",
  },
  {
    icon: CheckCircle2,
    title: "Delivery",
    desc: "Delivery to the buyer as per the agreed terms.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="process"
      className="relative bg-white py-16 sm:py-24 overflow-hidden"
    >
      <div className="absolute top-20 -left-24 w-72 h-72 bg-sky-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            The Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            From Enquiry to{" "}
            <span className="text-sky-600 italic">Delivery</span>
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            A clear, step-by-step process for every partnership and order.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((item, i) => {
            const Icon = item.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-sky-50 via-white to-sky-100/60 border border-sky-100 rounded-2xl p-6 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-300 transition-all duration-500"
              >
                {/* Watermark number */}
                <span className="absolute top-2 right-4 text-6xl font-bold text-sky-100 group-hover:text-sky-200 transition-colors duration-500 select-none">
                  {num}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-sky-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent line jo hover pe khulti hai */}
                <span className="absolute bottom-0 left-0 h-1 w-full bg-sky-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;