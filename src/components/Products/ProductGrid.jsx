import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, products } from "../../data/products";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredProducts = useMemo(() => {
    return activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-sky-600 text-white shadow-md"
                  : "bg-sky-50 text-sky-700 hover:bg-sky-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <p className="text-xs tracking-widest uppercase text-sky-700/60 text-center mb-8">
          Showing {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "Product" : "Products"}
        </p>

        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i % 9) * 0.06 }}
                  className="group relative bg-sky-50/50 border border-sky-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-sky-300 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image — fixed uniform size, click to zoom */}
                  <div
                    onClick={() => setLightboxImage(product)}
                    className="relative w-full h-56 sm:h-60 bg-white overflow-hidden cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <span className="absolute top-3 right-3 text-[10px] sm:text-xs font-semibold bg-white text-sky-700 border border-sky-200 px-2.5 py-1 rounded-full">
                      {product.standard}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] tracking-widest uppercase text-sky-600 mb-1 opacity-80">
                      {product.category}
                    </p>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Pack Size: {product.pack}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-lg">
                No products found in this category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <div className="max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={lightboxImage.image}
              alt={lightboxImage.name}
              className="w-full h-80 sm:h-96 object-contain p-6"
            />
            <div className="px-6 pb-6">
              <p className="text-xs tracking-widest uppercase text-sky-600 mb-1">
                {lightboxImage.category}
              </p>
              <h3 className="text-lg font-semibold text-slate-900">
                {lightboxImage.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Pack Size: {lightboxImage.pack} · {lightboxImage.standard}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;