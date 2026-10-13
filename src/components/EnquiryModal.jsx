import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, CheckCircle2, Building2, Globe2, Info } from "lucide-react";
import { products } from "../data/products";
import { WHATSAPP_NUMBER, buyerTypes } from "../data/siteConfig";

const inputClass =
  "w-full bg-white border border-slate-200 px-3.5 py-2.5 rounded-lg focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300 text-sm";

const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
};

const EnquiryModal = ({
  open,
  onClose,
  buyer = "", // agar diya hai to Buyer Type dropdown nahi dikhega
  product = "", // product slug, pehle se select karne ke liye
  defaultRoute = "domestic",
  heading = "Send Enquiry",
}) => {
  const [route, setRoute] = useState(defaultRoute);
  const [buyerType, setBuyerType] = useState(buyer);
  const [formData, setFormData] = useState(emptyForm);
  const [sentUrl, setSentUrl] = useState("");
  const firstInput = useRef(null);

  // Har baar modal khulne par form reset karo
  useEffect(() => {
    if (open) {
      setRoute(defaultRoute);
      setBuyerType(buyer);
      setFormData({ ...emptyForm, product });
      setSentUrl("");
      setTimeout(() => firstInput.current?.focus(), 150);
    }
  }, [open, defaultRoute, buyer, product]);

  // Page scroll lock + Escape se band
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow || "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getProductLabel = () => {
    if (!formData.product) return "Not specified";
    if (formData.product === "multiple") return "Multiple products";
    const p = products.find((x) => x.slug === formData.product);
    return p ? `${p.name} (${p.strength}, ${p.pack})` : formData.product;
  };

  const buyerLabel =
    buyerTypes.find((b) => b.value === buyerType)?.label || "Not specified";

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "New enquiry from website",
      "",
      `Enquiry type: ${route === "export" ? "Export" : "Domestic (India)"}`,
      `Buyer type: ${buyerLabel}`,
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "-"}`,
      route === "export" ? `Country: ${formData.country}` : null,
      `Product: ${getProductLabel()}`,
      `Quantity: ${formData.quantity || "-"}`,
      `Message: ${formData.message || "-"}`,
    ].filter((line) => line !== null);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(url, "_blank");
    setSentUrl(url);
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={heading}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-sky-700 via-sky-600 to-sky-800 px-6 py-5 rounded-t-2xl">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>
              <h3 className="text-lg sm:text-xl font-bold text-white pr-10 leading-snug">
                {heading}
              </h3>
              <p className="text-sky-100 text-xs sm:text-sm mt-1">
                Share your requirement and we'll respond with a quotation.
              </p>
            </div>

            {sentUrl ? (
              /* Success state */
              <div className="px-6 py-10 text-center">
                <div className="w-14 h-14 mx-auto bg-sky-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={30} className="text-sky-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Your enquiry is ready
                </h4>
                <p className="text-sm text-slate-600 mb-6">
                  WhatsApp should have opened in a new tab. If it didn't, use
                  the button below to send it.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={sentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    <MessageCircle size={16} />
                    Open WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2.5"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                {/* Buyer chip (sirf jab buyer card se aaya ho) */}
                {buyer && (
                  <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    Enquiring as: {buyerLabel}
                  </div>
                )}

                {/* Route toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
                  {[
                    { key: "domestic", label: "Domestic (India)", icon: Building2 },
                    { key: "export", label: "Export", icon: Globe2 },
                  ].map((opt) => {
                    const Icon = opt.icon;
                    const active = route === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setRoute(opt.key)}
                        className={`flex items-center justify-center gap-1.5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                          active
                            ? "bg-white text-sky-700 shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        <Icon size={14} />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    ref={firstInput}
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company / Organisation *"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone / WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />

                  {/* Buyer Type dropdown (sirf jab buyer pehle se na diya ho) */}
                  {!buyer && (
                    <select
                      value={buyerType}
                      onChange={(e) => setBuyerType(e.target.value)}
                      required
                      className={`${inputClass} sm:col-span-2`}
                    >
                      <option value="">Buyer Type *</option>
                      {buyerTypes.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {route === "export" && (
                    <input
                      type="text"
                      name="country"
                      placeholder="Destination Country *"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className={`${inputClass} sm:col-span-2`}
                    />
                  )}

                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={`${inputClass} sm:col-span-2`}
                  >
                    <option value="">Select Product (optional)</option>
                    {products.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} ({p.strength}, {p.pack})
                      </option>
                    ))}
                    <option value="multiple">Multiple products</option>
                  </select>

                  <input
                    type="text"
                    name="quantity"
                    placeholder="Required quantity (e.g. 10,000 bottles)"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={`${inputClass} sm:col-span-2`}
                  />
                </div>

                <textarea
                  rows="3"
                  name="message"
                  placeholder="Additional details (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                ></textarea>

                <div className="flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed">
                  <Info size={13} className="shrink-0 mt-0.5 text-sky-600" />
                  <p>
                    For B2B enquiries only. Pricing, MOQ and documents are
                    confirmed in our quotation. By submitting, you agree to be
                    contacted about this enquiry.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={17} />
                  Send Enquiry via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default EnquiryModal;