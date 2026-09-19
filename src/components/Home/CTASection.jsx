import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const trustPoints = ["No hidden costs", "Fixed timelines", "Ongoing support"];

const CTASection = () => {
  const navigate = useNavigate();

  return (
   <section className="relative py-16 mt-10 sm:mt-14 mb-10 sm:mb-14 bg-slate-900 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-sky-600/20 blur-[120px] -top-20 left-0"></div>
        <div className="absolute w-96 h-96 bg-sky-400/20 blur-[120px] bottom-0 right-0"></div>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-sky-400/30 rounded-[2rem] px-8 py-10 md:px-14 md:py-12 text-center overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(56,189,248,0.15)]"
        >
          {/* Corner accent lines — grow + glow on hover */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-sky-400/40 rounded-tl-[2rem] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:border-sky-400/80"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-sky-400/40 rounded-br-[2rem] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:border-sky-400/80"></div>

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sky-400 uppercase tracking-[0.4em] text-xs font-bold mb-4"
          >
            Let's Talk
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl md:text-4xl font-black leading-tight mb-4"
          >
            Have Questions?{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-300 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm md:text-base"
          >
            Whether it's about our products, franchise opportunities, or
            general enquiries — our team is ready to help you.
          </motion.p>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8"
          >
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-sky-400" />
                <span className="text-gray-300 text-xs md:text-sm">{point}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3"
          >
            <button
              onClick={() => navigate("/contact")}
              className="group/btn bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 px-7 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-sky-900/40 hover:shadow-sky-700/50 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </button>

            <button
              onClick={() => navigate("/products")}
              className="border border-white/20 hover:border-sky-400/60 hover:bg-white/5 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              View Products
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;