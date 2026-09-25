import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const RotatingGlobe = ({ size = 34 }) => {
  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Outer orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-sky-300"
      />

      {/* Orbiting dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-500" />
      </motion.div>

      {/* Globe icon — slow independent spin */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="relative w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center shadow-md"
      >
        <Globe2 size={16} className="text-white" strokeWidth={2} />
      </motion.div>
    </div>
  );
};

export default RotatingGlobe;