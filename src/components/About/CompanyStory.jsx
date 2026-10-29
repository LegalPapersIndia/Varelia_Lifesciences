


import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Globe2,
  Briefcase,
  Factory,
  CheckCircle2,
} from "lucide-react";
import mainImg from "../../assets/About1.jpg";
import smallImg from "../../assets/about/about-3.jpg";

const varelia = [
  "Sourcing and commercial coordination",
  "Documentation and buyer communication",
  "Order, dispatch and delivery coordination",
];

const partners = [
  "Manufacturing of products",
  "Partner-level licences and certifications",
  "Batch documentation issued by the partner",
];

const CompanyStory = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              A Trusted Name in{" "}
              <span className="text-sky-600 italic">Pharmaceutical Trade</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Varelia Lifesciences Private Limited operates as an Indian
              pharmaceutical merchant exporter and domestic pharmaceutical
              supplier. Products are supplied under our brand and sourced
              through qualified third-party manufacturing partners.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We serve both the domestic Indian market and international
              markets, with a focus on large volume parenterals (IV fluids)
              for hospitals, institutions and distributors.
            </p>

            {/* Quick Facts */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Calendar size={18} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Established 2026
                  </p>
                  <p className="text-xs text-slate-500">
                    Registered pharmaceutical trading company
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <MapPin size={18} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Meerut, Uttar Pradesh
                  </p>
                  <p className="text-xs text-slate-500">
                    Building No. 1250, 2nd Floor, Opposite Grand Square, Hapur Road, 250002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Globe2 size={18} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Domestic & Export Reach
                  </p>
                  <p className="text-xs text-slate-500">
                    Serving India and international markets
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-md sm:max-w-lg mx-auto w-full lg:ml-auto"
          >
            {/* Offset decorative frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 rounded-3xl border-2 border-sky-200" />

            {/* Main image */}
            <div className="group relative aspect-[5/4] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-sky-900/15">
              <img
                src={mainImg}
                alt="Pharmaceutical supply and logistics"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/15 to-transparent" />

              {/* Glass info card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-3.5">
                <p className="text-sky-100 text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
                  Varelia Lifesciences Pvt. Ltd.
                </p>
                <p className="text-white text-sm sm:text-base font-semibold mt-1">
                  Pharmaceutical sourcing & supply from India
                </p>
              </div>
            </div>

            {/* Small overlapping image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-5 -right-2 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl"
            >
              <img
                src={smallImg}
                alt="Pharmaceutical products"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating chip — left */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute top-1/3 -left-3 sm:-left-8 bg-white rounded-2xl shadow-xl border border-sky-50 px-3.5 py-2.5 flex items-center gap-2.5"
            >
              <div className="w-9 h-9 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
                <Calendar size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-none">
                  2026
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Established</p>
              </div>
            </motion.div>

            {/* Floating chip — right */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-1/4 -right-2 sm:-right-8 bg-white rounded-2xl shadow-xl border border-sky-50 px-3.5 py-2.5 flex items-center gap-2.5"
            >
              <div className="w-9 h-9 bg-sky-600 rounded-full flex items-center justify-center shrink-0">
                <Globe2 size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-none">
                  16 Products
                </p>
                <p className="text-[10px] text-slate-500 mt-1">
                  IV fluids, domestic + export
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Role clarity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-sky-50 border border-sky-100 rounded-2xl p-6 sm:p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-sky-600 rounded-xl flex items-center justify-center shadow-md shadow-sky-600/25">
                <Briefcase size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                What Varelia Does
              </h3>
            </div>
            <ul className="space-y-2.5">
              {varelia.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2
                    size={17}
                    className="text-sky-600 shrink-0 mt-0.5"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-sky-500/10 border border-sky-500/30 rounded-xl flex items-center justify-center">
                <Factory size={20} className="text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                What Our Manufacturing Partners Do
              </h3>
            </div>
            <ul className="space-y-2.5">
              {partners.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={17}
                    className="text-sky-400 shrink-0 mt-0.5"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;