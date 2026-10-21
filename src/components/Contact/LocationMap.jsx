import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const ADDRESS =
  "Building No. 1250, 2nd Floor, Opposite Grand Square, Hapur Road, Meerut, Uttar Pradesh 250002";

const query = encodeURIComponent(ADDRESS);
const EMBED_URL = `https://www.google.com/maps?q=${query}&output=embed`;
const OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${query}`;

const LocationMap = () => {
  return (
    <section className="relative bg-sky-50/50 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white"
        >
          <div className="h-[360px] sm:h-[420px]">
            <iframe
              title="Varelia Lifesciences Location"
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 shrink-0 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Varelia Lifesciences Pvt. Ltd.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Building No. 1250, 2nd Floor, Opposite Grand Square, Hapur
                  Road, Meerut, Uttar Pradesh – 250002
                </p>
              </div>
            </div>

            <a
              href={OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sky-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-sky-700 transition-colors shrink-0"
            >
              Open in Google Maps
              <ExternalLink size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;