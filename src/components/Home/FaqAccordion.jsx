import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Info, Package, Handshake } from "lucide-react";

const categories = [
  {
    key: "general",
    label: "General",
    icon: Info,
    faqs: [
      {
        q: "Where is Varelia Lifesciences located?",
        a: "We are based in Meerut, Uttar Pradesh, India, with distribution reach across the country.",
      },
      {
        q: "Is Varelia Lifesciences a registered company?",
        a: "Yes, we are a registered private limited company, incorporated in 2023 and engaged in pharmaceutical trade.",
      },
      {
        q: "Do you manufacture the products yourselves?",
        a: "We source our products from licensed Indian manufacturers under third-party arrangements, ensuring consistent quality across every batch.",
      },
    ],
  },
  {
    key: "products",
    label: "Products",
    icon: Package,
    faqs: [
      {
        q: "What products do you offer?",
        a: "We offer a range of I.P./B.P. standard large volume parenterals, including saline solutions, Ringer's solutions, dextrose injections, and sterile water for injection.",
      },
      {
        q: "Do you sell only in India or export as well?",
        a: "We sell domestically across India and also export to international markets as a pharmaceutical merchant exporter.",
      },
      {
        q: "Can I get bulk pricing for hospital or distributor orders?",
        a: "Yes, we offer bulk pricing for hospitals, distributors, and healthcare providers. Reach out via our Contact page for a quote.",
      },
    ],
  },
  {
    key: "franchise",
    label: "Franchise",
    icon: Handshake,
    faqs: [
      {
        q: "How do I apply for a PCD franchise?",
        a: "Fill out the franchise enquiry form on our Franchise page, and our team will connect with you on WhatsApp to discuss further.",
      },
      {
        q: "Do you offer monopoly/area rights?",
        a: "Yes, we offer exclusive area rights to franchise partners to help you build your business without internal competition.",
      },
      {
        q: "Is prior pharma experience required for a franchise?",
        a: "While relevant experience helps, it isn't mandatory. We provide complete onboarding and business support to our partners.",
      },
    ],
  },
];

const FaqAccordion = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);

  const currentFaqs = categories.find((c) => c.key === activeCategory).faqs;

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
            <span className="text-xs tracking-widest uppercase text-sky-700 font-medium">
              FAQs
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            Frequently Asked <span className="italic text-sky-600">Questions</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setOpenIndex(0);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-sky-600 text-white shadow-md"
                  : "bg-sky-50 text-sky-700 hover:bg-sky-100"
              }`}
            >
              <cat.icon size={15} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {currentFaqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-sky-300 bg-sky-50/60"
                        : "border-sky-100 bg-sky-50/40 hover:border-sky-200 hover:bg-sky-50"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base sm:text-lg text-slate-900 font-medium">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          isOpen
                            ? "bg-sky-600 text-white"
                            : "bg-white text-sky-700"
                        }`}
                      >
                        <Plus size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;