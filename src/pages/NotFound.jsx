import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-sky-50 overflow-hidden px-4">
      {/* Decorative blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-lg"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-8xl sm:text-9xl font-bold text-sky-600 leading-none mb-4"
        >
          404
        </motion.h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-sky-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-sky-700 hover:scale-105 transition-all duration-300 shadow-md"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-full border border-sky-200 hover:bg-sky-50 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;