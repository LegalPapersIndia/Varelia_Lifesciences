import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";

// Images - manually imported
import indiaImage from "../../assets/markets/india.jpeg";
import middleEastImage from "../../assets/markets/Middle-East.jpeg";
import africaImage from "../../assets/markets/Africa.jpg";
import seAsiaImage from "../../assets/markets/SE-Asia.jpeg";
import centralAsiaImage from "../../assets/markets/Central-Asia.jpg";

// Image mapping
const images = {
  india: indiaImage,
  "Middle-East": middleEastImage,
  Africa: africaImage,
  "SE-Asia": seAsiaImage,
  "Central-Asia": centralAsiaImage,
};

const getImage = (name) => images[name] || null;

const markets = [
  {
    name: "India",
    file: "india",
    tag: "Home market",
    desc: "Domestic B2B supply for distributors and institutions.",
    home: true,
  },
  {
    name: "Middle East",
    file: "Middle-East",
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "Africa",
    file: "Africa",
    tag: "Target market",
    desc: "Distributor and institutional partnerships.",
  },
  {
    name: "South-East Asia",
    file: "SE-Asia",
    tag: "Target market",
    desc: "Importer and distributor partnerships.",
  },
  {
    name: "Central Asia",
    file: "Central-Asia",
    tag: "Target market",
    desc: "Importer partnerships.",
  },
];

const KeyExportMarkets = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-sky-50/70 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Global Reach
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Key Export <span className="text-sky-600 italic">Markets</span>
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              We are building importer and distributor partnerships across
              selected regions. Requirements vary by product and destination.
            </p>
          </div>

          <Link
            to="/global"
            className="group inline-flex items-center gap-2 text-sky-700 font-semibold border-b-2 border-sky-400 pb-1 hover:gap-3 transition-all duration-300 shrink-0 w-fit"
          >
            Explore Markets
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {markets.map((market, i) => {
            const img = getImage(market.file);

            return (
              <motion.div
                key={market.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="sm:last:col-span-2 lg:last:col-span-1"
              >
                <Link
                  to="/global"
                  className="group block h-full bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-36 sm:h-40 overflow-hidden bg-gradient-to-br from-sky-600 to-sky-800">
                    {img ? (
                      <img
                        src={img}
                        alt={market.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe2 size={40} className="text-white/60" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                    <span
                      className={`absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
                        market.home
                          ? "bg-sky-600 text-white"
                          : "bg-white/90 text-sky-700"
                      }`}
                    >
                      {market.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-300 mb-1">
                      {market.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {market.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-slate-500">
          Target markets indicate where we are building partnerships, not
          current operating presence.
        </p>
      </div>
    </section>
  );
};

export default KeyExportMarkets;