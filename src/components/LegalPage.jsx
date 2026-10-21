import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  AlertCircle,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { legalDocs } from "../data/legalContent";

const icons = {
  privacy: ShieldCheck,
  terms: FileText,
  disclaimer: AlertCircle,
};

const LegalPage = ({ doc }) => {
  const HeroIcon = icons[doc.slug] || FileText;
  const others = Object.values(legalDocs).filter((d) => d.slug !== doc.slug);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-sky-800 py-12 sm:py-16 overflow-hidden">
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 mx-auto bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-md shadow-lg shadow-sky-900/30">
              <HeroIcon size={26} className="text-sky-100" />
            </div>

            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              {doc.badge}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {doc.title}
            </h1>

            <p className="inline-flex items-center gap-2 text-sky-100/90 text-sm mb-6">
              <Calendar size={15} />
              Last updated: {doc.updated}
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-sky-100/80 bg-white/5 border border-white/10 rounded-full px-5 py-2 w-fit mx-auto backdrop-blur-md">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{doc.title}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute top-20 -left-24 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-28">
              <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 mb-4">
                  On this page
                </p>
                <ul className="space-y-1">
                  {doc.sections.map((section, i) => (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(section.id)}
                        className="w-full text-left flex items-start gap-2.5 px-2 py-1.5 rounded-lg text-sm text-slate-600 hover:text-sky-700 hover:bg-white transition-colors"
                      >
                        <span className="text-sky-500 font-semibold tabular-nums shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{section.heading}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed border-l-4 border-sky-300 pl-5 mb-10"
              >
                {doc.intro}
              </motion.p>

              <div className="space-y-10">
                {doc.sections.map((section, i) => (
                  <motion.article
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="scroll-mt-28"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 text-white text-sm font-bold flex items-center justify-center shadow-md shadow-sky-600/20">
                        {i + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {section.heading}
                      </h2>
                    </div>

                    <div className="sm:pl-12 space-y-3">
                      {section.paragraphs?.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-sm sm:text-base text-slate-600 leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}

                      {section.list && (
                        <ul className="space-y-2">
                          {section.list.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Contact card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="mt-14 bg-slate-900 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  Questions about this page?
                </h3>
                <p className="text-sm text-slate-400 mb-5">
                  Write to us and our team will get back to you.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-sky-400/10 text-sky-400 flex items-center justify-center">
                      <Mail size={16} />
                    </span>
                    <div className="text-sm text-slate-300">
                      <a
                        href="mailto:domestic@varelialifesciences.com"
                        className="block break-all hover:text-sky-400 transition-colors"
                      >
                        domestic@varelialifesciences.com
                      </a>
                      <a
                        href="mailto:export@varelialifesciences.com"
                        className="block break-all hover:text-sky-400 transition-colors"
                      >
                        export@varelialifesciences.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-sky-400/10 text-sky-400 flex items-center justify-center">
                      <MapPin size={16} />
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Varelia Lifesciences Pvt. Ltd., Building No. 1250, 2nd
                      Floor, Opposite Grand Square, Hapur Road, Meerut, Uttar
                      Pradesh – 250002
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Other legal pages */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {others.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.path}
                    className="group flex items-center justify-between gap-3 bg-sky-50/60 border border-sky-100 hover:border-sky-300 hover:bg-white rounded-xl px-5 py-4 transition-all duration-300"
                  >
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-sky-700">
                      {item.title}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-sky-600 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
