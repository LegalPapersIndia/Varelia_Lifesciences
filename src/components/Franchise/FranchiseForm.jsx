import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, User, Building2, MapPin, Phone } from "lucide-react";

// Client's WhatsApp number
const WHATSAPP_NUMBER = "919027864296";

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    area: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const text = `New Franchise Enquiry:%0A%0AName: ${formData.name}%0ACompany/Firm: ${formData.company}%0AInterested Area/Location: ${formData.area}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    setTimeout(() => {
      setLoading(false);
      setStatus("Redirecting you to WhatsApp...");
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", company: "", area: "", phone: "", message: "" });
    }, 600);
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Your Name", icon: User, required: true },
    { name: "company", type: "text", placeholder: "Company / Firm Name", icon: Building2, required: false },
    { name: "area", type: "text", placeholder: "Interested Area / Location", icon: MapPin, required: true },
    { name: "phone", type: "tel", placeholder: "Phone Number", icon: Phone, required: true },
  ];

  return (
    <section className="py-16 sm:py-20 bg-sky-50/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Apply Now
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Franchise <span className="text-sky-600 italic">Enquiry</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Fill in your details and we'll connect with you on WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-sky-100"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.name} className="relative">
                  <Icon
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400"
                  />
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full bg-sky-50/50 border border-sky-100 pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300"
                  />
                </div>
              );
            })}

            <textarea
              rows="4"
              name="message"
              placeholder="Tell us about yourself / your business experience"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-sky-50/50 border border-sky-100 px-4 py-3 rounded-xl resize-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full bg-sky-600 hover:bg-sky-700 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <MessageCircle size={18} />
              {loading ? "Redirecting..." : "Apply via WhatsApp"}
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sky-600 text-sm text-center"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseForm;