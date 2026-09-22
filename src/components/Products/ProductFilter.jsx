import { motion } from "framer-motion";
import { categories } from "../../data/products";

const ProductFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-slate-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-sky-600 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default ProductFilter;