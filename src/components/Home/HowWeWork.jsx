

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquare,
  SearchCheck,
  FileCheck,
  FileText,
  Truck,
  ArrowRight,
} from "lucide-react";
import { useQuoteModal } from "../../context/QuoteModalContext";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Enquiry",
    desc: "Share your product, pack size, quantity and target market.",
  },
  {
    icon: SearchCheck,
    step: "02",
    title: "Product & Market Review",
    desc: "We review product suitability, specifications and market requirements.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Supplier & Documents",
    desc: "Your requirement is matched with a qualified manufacturing partner, and documents are shared as applicable.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Quotation",
    desc: "Pricing, quantity, timelines and commercial terms are confirmed.",
  },
  {
    icon: Truck,
    step: "05",
    title: "Dispatch & Delivery",
    desc: "Order coordination, dispatch and shipment as per the agreed terms.",
  },
];

const HowWeWork = () => {
  const { openQuote } = useQuoteModal();

  return (
    <section className="py-16 sm:py-20 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            From Enquiry{" "}
            <span className="text-sky-600 italic">to Delivery</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            A clear 5-step path for domestic and export buyers.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-8 lg:gap-4">
          {/* Connecting line - large screens only */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-sky-200" />

          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-16 h-16 mx-auto bg-sky-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-sky-600/20">
                  <Icon size={26} className="text-white" />
                </div>

                <span className="text-sky-200 text-4xl font-bold absolute top-0 left-1/2 -translate-x-1/2 -z-10 select-none">
                  {item.step}
                </span>

                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            type="button"
            onClick={openQuote}
            className="group inline-flex items-center gap-2 bg-sky-700 text-white font-semibold px-7 py-3 rounded-full hover:bg-sky-800 transition-colors shadow-lg shadow-sky-700/20"
          >
            Request a Quote
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <p className="mt-4 text-xs text-slate-500 max-w-xl mx-auto">
            Documentation and market-specific requirements vary by product and
            destination, and are confirmed for each order.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;