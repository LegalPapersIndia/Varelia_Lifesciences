

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import EnquirySuccess from "../EnquirySuccess";
import { getMailtoUrl, getGmailUrl } from "../../utils/enquiryLinks";

// Client's WhatsApp number
const WHATSAPP_NUMBER = "919410409450";

const SOCIAL_LINKS = [
  {
    icon: <Facebook size={16} />,
    url: "https://www.facebook.com/profile.php?id=61594758389870",
    label: "Facebook",
  },
  {
    icon: <Instagram size={16} />,
    url: "https://www.instagram.com/varelialifesciences/",
    label: "Instagram",
  },
  // TODO: Twitter / LinkedIn ka asli profile URL milte hi "#" ki jagah daalna
  {
    icon: <Twitter size={16} />,
    url: "#",
    label: "Twitter",
  },
  {
    icon: <Linkedin size={16} />,
    url: "#",
    label: "LinkedIn",
  },
];

const ADDRESS =
  "Building No. 1250, 2nd Floor, Opposite Grand Square, Hapur Road, Meerut, Uttar Pradesh – 250002";

const ContactInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(null);
  // Kaunsa button dabaya: "whatsapp" | "email" | "gmail" (submit se pehle onClick mein set hota hai)
  const channelRef = useRef("whatsapp");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const text = `New inquiry from website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    const plainText = `New inquiry from website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    const channel = channelRef.current;

    setTimeout(() => {
      setLoading(false);
      if (channel === "email") {
        // Mail app khulega (To, Subject aur message pehle se bhara)
        window.location.href = getMailtoUrl(plainText);
      } else if (channel === "gmail") {
        // Gmail ka compose page naye tab mein
        window.open(getGmailUrl(plainText), "_blank");
      } else {
        window.open(whatsappUrl, "_blank");
      }
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSent({ url: whatsappUrl, text: plainText, channel });
    }, 600);
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Your Name", required: true },
    { name: "email", type: "email", placeholder: "Your Email", required: true },
    {
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      required: false,
    },
  ];

  // Each email and each phone has its own row + its own icon
  const contactItems = [
    {
      icon: <MapPin size={18} />,
      label: "Office Address",
      value: ADDRESS,
    },
    {
      icon: <Mail size={18} />,
      label: "Export Enquiries",
      value: (
        <a
          href="mailto:export@varelialifesciences.com"
          className="block break-all hover:text-sky-400 transition-colors duration-300"
        >
          export@varelialifesciences.com
        </a>
      ),
    },
    {
      icon: <Mail size={18} />,
      label: "Domestic Enquiries",
      value: (
        <a
          href="mailto:domestic@varelialifesciences.com"
          className="block break-all hover:text-sky-400 transition-colors duration-300"
        >
          domestic@varelialifesciences.com
        </a>
      ),
    },
    {
      icon: <Phone size={18} />,
      label: "Mobile",
      value: (
        <a
          href="tel:+919027864296"
          className="block hover:text-sky-400 transition-colors duration-300"
        >
          +91 90278 64296
        </a>
      ),
    },
    {
      icon: <Phone size={18} />,
      label: "Mobile",
      value: (
        <a
          href="tel:+919410409450"
          className="block hover:text-sky-400 transition-colors duration-300"
        >
          +91 94104 09450
        </a>
      ),
    },
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
            We'd Love to Hear <span className="text-sky-600">From You</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8">
            Fill the form and send it via WhatsApp, email or Gmail, whichever you prefer. We'll get back to you.
          </p>

          {sent ? (
            <EnquirySuccess
              card
              whatsappUrl={sent.url}
              message={sent.text}
              channel={sent.channel}
              onDone={() => setSent(null)}
              doneLabel="Send another message"
            />
          ) : (
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

              {/* Send options — user jis se chahe bhej sakta hai */}
              <div>
                <p className="text-xs font-medium text-slate-500 mb-2 text-center">
                  Choose how you'd like to send your message
                </p>
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={() => (channelRef.current = "whatsapp")}
                    className={`w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    <MessageCircle size={17} />
                    Send via WhatsApp
                  </button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      onClick={() => (channelRef.current = "email")}
                      className={`bg-white border border-sky-200 text-sky-700 hover:bg-sky-50 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                        loading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      <Mail size={17} />
                      Send via Email App
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      onClick={() => (channelRef.current = "gmail")}
                      className={`bg-white border border-sky-200 text-sky-700 hover:bg-sky-50 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                        loading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      <Mail size={17} />
                      Open in Gmail
                    </button>
                  </div>
                </div>
              </div>

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
          )}
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
            {contactItems.map((item, index) => (
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
                <div className="text-white/70 text-sm">
                  <span className="font-medium block text-white">
                    {item.label}
                  </span>
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-sm text-white/50 mb-4">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url === "#" ? undefined : "_blank"}
                  rel={social.url === "#" ? undefined : "noopener noreferrer"}
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