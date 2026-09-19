import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Award } from "lucide-react";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Trusted Domestic Pharma Brand
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Quality Medicines,{" "}
            <span className="text-sky-600">Trusted Across India</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            Varelia Lifesciences delivers high-quality pharmaceutical products
            manufactured under strict quality standards, distributed
            nationwide under our own trusted brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/franchise"
              className="text-center bg-sky-600 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-sky-700 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Get Franchise
            </Link>
            <Link
              to="/products"
              className="text-center bg-white text-sky-700 font-semibold px-7 py-3.5 rounded-full border border-sky-200 hover:bg-sky-50 transition-all duration-300"
            >
              View Products
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-10">
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <ShieldCheck size={20} className="text-sky-600" />
              Quality Assured
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Truck size={20} className="text-sky-600" />
              Pan-India Delivery
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Award size={20} className="text-sky-600" />
              Trusted Brand
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-sky-100 rounded-full flex items-center justify-center">
            <img
              src={heroImage}
              alt="Varelia Lifesciences - Quality Pharmaceutical Products"
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain"
            />

            {/* Floating Badge - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-2 sm:top-0 sm:right-0 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-none">
                  100% Genuine
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Quality Assured
                </p>
              </div>
            </motion.div>

            {/* Floating Badge - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-2 sm:bottom-2 sm:-left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
                <Truck size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-none">
                  Pan India
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Delivery
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;