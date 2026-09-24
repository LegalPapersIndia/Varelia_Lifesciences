import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";

// Client's WhatsApp number
const WHATSAPP_NUMBER = "919027864296";

// PLACEHOLDER — replace with real social links once client provides them
const SOCIAL_LINKS = [
  { icon: <Facebook size={16} />, url: "https://www.facebook.com/profile.php?id=61594758389870", label: "Facebook" },
  { icon: <Instagram size={16} />, url: "https://www.instagram.com/varelialifesciences/", label: "Instagram" },
  // { icon: <Linkedin size={16} />, url: "#", label: "LinkedIn" },
];

const ContactInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    const text = `New inquiry from website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    setTimeout(() => {
      setLoading(false);
      setStatus("Redirecting you to WhatsApp...");
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Your Name", required: true },
    { name: "email", type: "email", placeholder: "Your Email", required: true },
    { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* LEFT: FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sky-600 uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Send a Message
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We'd Love to Hear{" "}
            <span className="text-sky-600">From You</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8">
            Fill the form and we'll get back to you on WhatsApp right away.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300"
              />
            ))}

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 outline-none text-slate-900 placeholder-slate-400 transition-all duration-300"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <MessageCircle size={18} />
              {loading ? "Redirecting..." : "Send via WhatsApp"}
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sky-600 text-sm mt-2"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* RIGHT: CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 rounded-2xl p-8 sm:p-10 hover:border-sky-400/30 border border-transparent transition-all duration-500"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Contact Information
          </h3>
          <p className="text-white/60 text-sm mb-8">
            Reach out to us anytime — we're here to help your business grow.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: <MapPin size={18} />,
                label: "Office Address",
                value:
                  "2nd Floor, Opposite Grand Square, Hapur Road, Meerut, Uttar Pradesh – 250002",
              },
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "varelialifesciences@gmail.com",
              },
              {
                icon: <Phone size={18} />,
                label: "Mobile",
                value: "+91 90278 64296",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-400/10 text-sky-400 shrink-0">
                  {item.icon}
                </span>
                <p className="text-white/70 text-sm">
                  <span className="font-medium block text-white">
                    {item.label}
                  </span>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-sm text-white/50 mb-4">Follow Us</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-sky-400/20 text-white/70 hover:text-slate-900 hover:bg-sky-400 hover:border-sky-400 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoForm;