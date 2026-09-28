import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MessageCircle,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Info,
} from "lucide-react";
import { products, getProductBySlug } from "../data/products";

// Client's WhatsApp number
const WHATSAPP_NUMBER = "919760222668";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  // Jab product change ho (related product click), page top se khule
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  // Product nahi mila (galat URL)
  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4 bg-sky-50/50">
        <div className="text-center max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Product Not Found
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mb-6">
            The product you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-sky-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const message = `Hi, I would like to request a quotation for ${product.name} (Pack: ${product.pack}). Please share the details.`;
  const quoteUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;

  const specs = [
    { label: "Generic Name", value: product.genericName },
    { label: "Strength", value: product.strength },
    { label: "Dosage Form", value: product.dosageForm },
    { label: "Pack Size", value: product.pack },
    { label: "Route", value: product.route },
    { label: "Standard", value: product.standard },
    { label: "Packaging", value: product.packaging },
    { label: "Storage", value: product.storage },
    { label: "Shelf Life", value: product.shelfLife },
    { label: "Market", value: product.market },
  ];

  // Related: pehle same category, phir baaki se fill karke 4 dikhao
  const related = [
    ...products.filter(
      (p) => p.category === product.category && p.id !== product.id,
    ),
    ...products.filter(
      (p) => p.category !== product.category && p.id !== product.id,
    ),
  ].slice(0, 4);

  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-sky-800 py-10 sm:py-14 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-white/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-sky-100/80 mb-5">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="shrink-0" />
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
              <ChevronRight size={14} className="shrink-0" />
              <span className="text-white font-medium truncate max-w-[140px] sm:max-w-none">
                {product.name}
              </span>
            </div>

            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
              {product.category}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {product.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left — Image + Quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 lg:sticky lg:top-28"
            >
              <div className="bg-sky-50/60 border border-sky-100 rounded-3xl p-5 sm:p-6 shadow-lg">
                <div className="relative bg-white rounded-2xl h-64 sm:h-80 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  <span className="absolute top-3 right-3 text-[10px] sm:text-xs font-semibold bg-white text-sky-700 border border-sky-200 px-2.5 py-1 rounded-full">
                    {product.standard}
                  </span>
                </div>

                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 w-full inline-flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold py-3.5 rounded-xl hover:bg-sky-700 hover:scale-[1.02] transition-all duration-300 shadow-md"
                >
                  <MessageCircle size={18} />
                  Request Quotation
                </a>

                <div className="flex items-start gap-2 mt-4 text-xs text-slate-500 leading-relaxed">
                  <FileText
                    size={14}
                    className="text-sky-600 shrink-0 mt-0.5"
                  />
                  <span>
                    COA, specifications and other quality documents available on
                    request, as applicable.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right — Specs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <span className="inline-block text-sky-600 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4">
                Product Information
              </span>

              <div className="border border-sky-100 rounded-2xl overflow-hidden shadow-sm">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-3.5 ${
                      i % 2 === 0 ? "bg-sky-50/50" : "bg-white"
                    }`}
                  >
                    <span className="sm:w-40 shrink-0 text-xs sm:text-sm font-semibold text-slate-500">
                      {spec.label}
                    </span>
                    <span className="text-sm sm:text-base text-slate-900 font-medium">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buyer note */}
              <div className="mt-6 flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-xl p-4">
                <Info size={18} className="text-sky-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">
                    Buyer note:{" "}
                  </span>
                  Final pack configuration, documentation, registration status
                  and commercial terms should be confirmed for each market and
                  order.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-6 text-sky-700 font-semibold hover:gap-3 transition-all duration-300"
              >
                <ArrowLeft size={18} />
                Back to all products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-sky-50/60 via-white to-sky-50/60 overflow-hidden">
        <div className="absolute top-10 -left-24 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-24 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              More From Our Range
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Explore Other{" "}
              <span className="text-sky-600 italic">Products</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {related.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <Link
                  to={`/products/${item.slug}`}
                  className="group relative block h-full rounded-2xl overflow-hidden border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-sky-100/70 p-3 shadow-sm hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-500/25 hover:-translate-y-2 transition-all duration-500 ease-out"
                >
                  {/* Decorative glow — hover pe bada aur gehra hota hai */}
                  <span className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-sky-300/40 blur-2xl group-hover:bg-sky-400/50 group-hover:scale-150 transition-all duration-700" />

                  {/* Bottom accent line — hover pe poori width mein phailti hai */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-sky-600 group-hover:w-full transition-all duration-500 ease-out z-20" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image panel */}
                    <div className="relative h-44 bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-500">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* Shine sweep — left se right nikalti chamak */}
                      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-sky-200/60 to-transparent -translate-x-full group-hover:translate-x-[450%] transition-transform duration-1000 ease-out" />

                      <span className="absolute top-3 left-3 text-[10px] font-semibold bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-1 rounded-full">
                        {item.standard}
                      </span>

                      <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center sm:opacity-0 sm:-translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 shadow-md">
                        <ArrowUpRight size={15} className="text-white" />
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 pt-4 pb-2 px-1">
                      <p className="text-[10px] tracking-widest uppercase text-sky-600 mb-1 transition-all duration-500 group-hover:tracking-[0.25em]">
                        {item.category}
                      </p>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-sky-600 group-hover:translate-x-1 leading-snug mb-2 transition-all duration-500">
                        {item.name}
                      </h3>
                      <p className="mt-auto text-xs text-slate-500 group-hover:text-slate-700 transition-colors duration-500">
                        Pack Size: {item.pack}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
