// import { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { categories, products } from "../../data/products";

// const ProductGrid = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [lightboxImage, setLightboxImage] = useState(null);

//   const filteredProducts = useMemo(() => {
//     return activeCategory === "All"
//       ? products
//       : products.filter((p) => p.category === activeCategory);
//   }, [activeCategory]);

//   return (
//     <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Filters bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-wrap justify-center gap-2 mb-10"
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
//                 activeCategory === cat
//                   ? "bg-sky-600 text-white shadow-md"
//                   : "bg-sky-50 text-sky-700 hover:bg-sky-100"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </motion.div>

//         <p className="text-xs tracking-widest uppercase text-sky-700/60 text-center mb-8">
//           Showing {filteredProducts.length}{" "}
//           {filteredProducts.length === 1 ? "Product" : "Products"}
//         </p>

//         <AnimatePresence mode="wait">
//           {filteredProducts.length > 0 ? (
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
//             >
//               {filteredProducts.map((product, i) => (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, y: 25 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: (i % 9) * 0.06 }}
//                   className="group relative bg-sky-50/50 border border-sky-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-sky-300 hover:-translate-y-1 transition-all duration-300"
//                 >
//                   {/* Image — fixed uniform size, click to zoom */}
//                   <div
//                     onClick={() => setLightboxImage(product)}
//                     className="relative w-full h-56 sm:h-60 bg-white overflow-hidden cursor-pointer"
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       loading="lazy"
//                       className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
//                     />
//                     <span className="absolute top-3 right-3 text-[10px] sm:text-xs font-semibold bg-white text-sky-700 border border-sky-200 px-2.5 py-1 rounded-full">
//                       {product.standard}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="p-5 sm:p-6">
//                     <p className="text-[10px] tracking-widest uppercase text-sky-600 mb-1 opacity-80">
//                       {product.category}
//                     </p>
//                     <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-2">
//                       {product.name}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-slate-500">
//                       Pack Size: {product.pack}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20"
//             >
//               <p className="text-slate-400 text-lg">
//                 No products found in this category.
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Lightbox */}
//       {lightboxImage && (
//         <div
//           onClick={() => setLightboxImage(null)}
//           className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-pointer"
//         >
//           <div className="max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               src={lightboxImage.image}
//               alt={lightboxImage.name}
//               className="w-full h-80 sm:h-96 object-contain p-6"
//             />
//             <div className="px-6 pb-6">
//               <p className="text-xs tracking-widest uppercase text-sky-600 mb-1">
//                 {lightboxImage.category}
//               </p>
//               <h3 className="text-lg font-semibold text-slate-900">
//                 {lightboxImage.name}
//               </h3>
//               <p className="text-sm text-slate-500 mt-1">
//                 Pack Size: {lightboxImage.pack} · {lightboxImage.standard}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProductGrid;

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, products } from "../../data/products";

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/60 to-white overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-20 -left-24 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  : "bg-white text-sky-700 border border-sky-100 hover:bg-sky-100"
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
                  className="h-full"
                >
                  {/* Poora card clickable */}
                  <Link
                    to={`/products/${product.slug}`}
                    className="group relative block h-full rounded-2xl overflow-hidden border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-sky-100/70 p-3 shadow-sm hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-500/25 hover:-translate-y-2 transition-all duration-500 ease-out"
                  >
                    {/* Decorative glow — hover pe bada aur gehra hota hai */}
                    <span className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-sky-300/40 blur-2xl group-hover:bg-sky-400/50 group-hover:scale-150 transition-all duration-700" />

                    {/* Bottom accent line — hover pe poori width mein phailti hai */}
                    <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full transition-all duration-500 ease-out z-20" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Image panel */}
                      <div className="relative h-52 sm:h-56 bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-500">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        {/* Shine sweep — left se right nikalti chamak */}
                        <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-sky-200/60 to-transparent -translate-x-full group-hover:translate-x-[450%] transition-transform duration-1000 ease-out" />

                        <span className="absolute top-3 left-3 text-[10px] sm:text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-1 rounded-full">
                          {product.standard}
                        </span>

                        {/* Arrow — mobile pe hamesha dikhega, desktop pe hover pe */}
                        <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center sm:opacity-0 sm:-translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 shadow-md">
                          <ArrowUpRight size={15} className="text-white" />
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 pt-4 pb-2 px-1">
                        <p className="text-[10px] tracking-widest uppercase text-sky-600 mb-1 transition-all duration-500 group-hover:tracking-[0.25em]">
                          {product.category}
                        </p>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-sky-600 group-hover:translate-x-1 leading-snug mb-2 transition-all duration-500">
                          {product.name}
                        </h3>
                        <p className="mt-auto text-xs sm:text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-500">
                          Pack Size: {product.pack}
                        </p>
                      </div>
                    </div>
                  </Link>
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
    </section>
  );
};

export default ProductGrid;