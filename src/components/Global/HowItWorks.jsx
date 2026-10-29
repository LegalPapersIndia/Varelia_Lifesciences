


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
import enquiryImg from "../../assets/Buyer-Enquiry.jpg";
import reviewImg from "../../assets/Review.jpg";
import commercialImg from "../../assets/Commercial-Discussion.jpg";
import documentationImg from "../../assets/Documentation-Samples.jpg";
import purchaseOrderImg from "../../assets/Purchase-Order.jpg";
import manufacturingImg from "../../assets/Manufacturing-Release.png";
import exportImg from "../../assets/Export-Logistics.jpg";
import deliveryImg from "../../assets/Delivery.jpg";

const steps = [
  {
    icon: MessageSquare,
    image: enquiryImg,
    title: "Buyer Enquiry",
    desc: "Share your requirement: product, pack size, quantity and target market.",
  },
  {
    icon: Search,
    image: reviewImg,
    title: "Product & Market Review",
    desc: "We review product suitability, specifications and market requirements.",
  },
  {
    icon: Handshake,
    image: commercialImg,
    title: "Commercial Discussion",
    desc: "Pricing, quantity, timelines and commercial terms are discussed and agreed.",
  },
  {
    icon: FileText,
    image: documentationImg,
    title: "Documentation & Samples",
    desc: "Product and quality documentation, and samples where applicable.",
  },
  {
    icon: FileSignature,
    image: purchaseOrderImg,
    title: "Purchase Order",
    desc: "Order is confirmed with the agreed specifications and terms.",
  },
  {
    icon: Factory,
    image: manufacturingImg,
    title: "Manufacturing & Release",
    desc: "Production through qualified manufacturing partners, followed by release as per agreed requirements.",
  },
  {
    icon: Plane,
    image: exportImg,
    title: "Export & Logistics",
    desc: "Dispatch, documentation and shipment coordination, as applicable.",
  },
  {
    icon: CheckCircle2,
    image: deliveryImg,
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
                className="group relative bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-300 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full h-32 sm:h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/20 transition-colors duration-500" />

                  {/* Step number */}
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-sky-600/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-md">
                    {num}
                  </span>
                </div>

                {/* Icon badge (overlaps image) */}
                <div className="relative -mt-6 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-600/30 border-4 border-white"
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                </div>

                <div className="px-5 pt-3 pb-6 text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 leading-snug">
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