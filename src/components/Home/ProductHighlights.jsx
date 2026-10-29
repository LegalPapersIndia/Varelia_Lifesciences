

// import { motion } from "framer-motion";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { products } from "../../data/products";

// const featuredIds = [1, 3, 5, 15]; // Sodium Chloride, Ringer Lactate, Dextrose 5%, Sterile Water

// const featured = featuredIds
//   .map((id) => products.find((p) => p.id === id))
//   .filter(Boolean);

// const ProductHighlights = () => {
//   return (
//     <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
//         >
//           <div className="max-w-xl">
//             <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
//               Our Range
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
//               Featured <span className="text-sky-600 italic">Products</span>
//             </h2>
//             <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
//               A range of {products.length} IV fluid products, supplied through
//               qualified manufacturing partners.
//             </p>
//           </div>

//           <Link
//             to="/products"
//             className="group hidden sm:inline-flex items-center gap-2 text-sky-700 font-semibold border-b-2 border-sky-400 pb-1 hover:gap-3 transition-all duration-300 shrink-0"
//           >
//             View All Products
//             <ArrowRight
//               size={18}
//               className="group-hover:translate-x-1 transition-transform duration-300"
//             />
//           </Link>
//         </motion.div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//           {featured.map((product, i) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
//             >
//               <Link
//                 to={`/products/${product.slug}`}
//                 className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 aspect-[3/4]"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/10 to-transparent" />
//                 <div className="absolute inset-0 bg-sky-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//                   <ArrowUpRight size={16} className="text-white" />
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
//                   <p className="font-mono text-[10px] tracking-widest uppercase text-sky-300 mb-1 opacity-80">
//                     {product.category}
//                   </p>
//                   <h3 className="text-base sm:text-xl font-semibold text-white leading-tight">
//                     {product.name}
//                   </h3>
//                   <p className="mt-1.5 text-[11px] sm:text-xs text-sky-100/80">
//                     {product.strength} • {product.pack}
//                   </p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTAs */}
//         <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 bg-sky-700 text-white font-semibold px-7 py-3 rounded-full hover:bg-sky-800 transition-all duration-300 shadow-lg shadow-sky-700/20"
//           >
//             Request a Quote
//             <ArrowRight
//               size={18}
//               className="group-hover:translate-x-1 transition-transform duration-300"
//             />
//           </Link>
//           <Link
//             to="/products"
//             className="sm:hidden inline-flex items-center gap-2 text-sky-700 font-semibold border border-sky-200 px-6 py-3 rounded-full hover:bg-sky-50 transition-all duration-300"
//           >
//             View All Products
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductHighlights;



import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { useQuoteModal } from "../../context/QuoteModalContext";

const featuredIds = [1, 3, 5, 15]; // Sodium Chloride, Ringer Lactate, Dextrose 5%, Sterile Water

const featured = featuredIds
  .map((id) => products.find((p) => p.id === id))
  .filter(Boolean);

const ProductHighlights = () => {
  const { openQuote } = useQuoteModal();

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Range
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Featured <span className="text-sky-600 italic">Products</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              A range of {products.length} IV fluid products, supplied through
              qualified manufacturing partners.
            </p>
          </div>

          <Link
            to="/products"
            className="group hidden sm:inline-flex items-center gap-2 text-sky-700 font-semibold border-b-2 border-sky-400 pb-1 hover:gap-3 transition-all duration-300 shrink-0"
          >
            View All Products
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <Link
                to={`/products/${product.slug}`}
                className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 aspect-[3/4]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/10 to-transparent" />
                <div className="absolute inset-0 bg-sky-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={16} className="text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-sky-300 mb-1 opacity-80">
                    {product.category}
                  </p>
                  <h3 className="text-base sm:text-xl font-semibold text-white leading-tight">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] sm:text-xs text-sky-100/80">
                    {product.strength} • {product.pack}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={openQuote}
            className="group inline-flex items-center gap-2 bg-sky-700 text-white font-semibold px-7 py-3 rounded-full hover:bg-sky-800 transition-all duration-300 shadow-lg shadow-sky-700/20"
          >
            Request a Quote
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
          <Link
            to="/products"
            className="sm:hidden inline-flex items-center gap-2 text-sky-700 font-semibold border border-sky-200 px-6 py-3 rounded-full hover:bg-sky-50 transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;