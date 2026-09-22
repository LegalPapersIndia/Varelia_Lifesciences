import { motion } from "framer-motion";
import { MapPin, Calendar, Globe2 } from "lucide-react";

const CompanyStory = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              supplier. Our products are sourced from licensed Indian
              manufacturers under trusted third-party arrangements, ensuring
              consistent quality across every batch.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We serve both the domestic Indian market and international
              markets, with a focus on large volume parenterals and
              essential pharmaceutical solutions relied upon by hospitals
              and healthcare providers.
            </p>

            {/* Quick Facts */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Calendar size={18} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Established 2023
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
                    2nd Floor, Opposite Grand Square, Hapur Road
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

          {/* Right — Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
              <p className="text-sky-100 text-sm uppercase tracking-widest font-semibold mb-6">
                Varelia Lifesciences Pvt. Ltd.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold">2023</p>
                  <p className="text-sky-100 text-xs mt-1">Year Established</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold">16+</p>
                  <p className="text-sky-100 text-xs mt-1">Product Range</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold">100%</p>
                  <p className="text-sky-100 text-xs mt-1">Licensed Sourcing</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold">Pan India</p>
                  <p className="text-sky-100 text-xs mt-1">+ Global Reach</p>
                </div>
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-300/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;