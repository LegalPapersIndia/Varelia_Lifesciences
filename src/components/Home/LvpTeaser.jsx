import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplet } from "lucide-react";

const productNames = [
  "Sodium Chloride",
  "Ringer Lactate",
  "Dextrose",
  "Sterile Water",
];

const LvpTeaser = () => {
  return (
    <section className="py-10 sm:py-12 bg-sky-50/50 border-y border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="hidden sm:flex w-10 h-10 bg-sky-600 rounded-lg items-center justify-center shrink-0">
              <Droplet size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] tracking-widest uppercase text-sky-600 font-semibold mb-1">
                IV & Large Volume Parenteral Solutions
              </p>
              <p className="text-sm sm:text-base text-slate-700 font-medium">
                {productNames.join(" • ")}
              </p>
            </div>
          </div>

          <Link
            to="/products"
            className="group inline-flex items-center gap-2 bg-sky-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-sky-700 hover:scale-105 transition-all duration-300 shadow-md shrink-0 whitespace-nowrap"
          >
            View Products
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LvpTeaser;