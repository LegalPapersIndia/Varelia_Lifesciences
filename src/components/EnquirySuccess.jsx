

import { motion } from "framer-motion";
import { Check, MessageCircle, Mail } from "lucide-react";
import { ENQUIRY_EMAIL } from "../data/siteConfig";
import { getMailtoUrl, getGmailUrl } from "../utils/enquiryLinks";

// Jis tareeke se user ne bheja, uske hisaab se text aur retry button
const CHANNELS = {
  whatsapp: {
    label: "WhatsApp",
    opened: "We've opened WhatsApp with your details.",
    step: "Send your message on WhatsApp",
    button: "Open WhatsApp",
    Icon: MessageCircle,
  },
  email: {
    label: "Email app",
    opened: "We've opened your email app with your details.",
    step: "Send your message by email",
    button: "Open Email App",
    Icon: Mail,
  },
  gmail: {
    label: "Gmail",
    opened: "We've opened Gmail with your details.",
    step: "Send your message from Gmail",
    button: "Open Gmail",
    Icon: Mail,
  },
};

// Teeno forms (popup, contact, partners) mein yahi thank-you screen dikhegi
// channel: "whatsapp" (default) | "email" | "gmail"
const EnquirySuccess = ({
  whatsappUrl,
  message = "",
  channel = "whatsapp",
  onDone,
  doneLabel = "Close",
  card = false,
}) => {
  const cfg = CHANNELS[channel] || CHANNELS.whatsapp;
  const { Icon } = cfg;

  const retryUrl =
    channel === "gmail"
      ? getGmailUrl(message)
      : channel === "email"
      ? getMailtoUrl(message)
      : whatsappUrl;
  // Mail app wala link usi tab mein khulta hai, baaki naye tab mein
  const opensNewTab = channel !== "email";

  const steps = [cfg.step, "Our team reviews your enquiry", "We get back to you"];

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`text-center ${
        card
          ? "bg-white rounded-2xl border border-sky-100 shadow-md p-6 sm:p-8"
          : ""
      }`}
    >
      {/* Animated tick */}
      <div className="relative w-20 h-20 mx-auto mb-5">
        <motion.span
          className="absolute inset-0 rounded-full bg-sky-200"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="relative w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 shadow-lg shadow-sky-600/30 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <Check size={38} strokeWidth={3} className="text-white" />
        </motion.span>
      </div>

      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        Thank You for Your Enquiry!
      </h4>
      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
        {cfg.opened} Tap{" "}
        <span className="font-semibold text-slate-800">Send</span> there to
        complete your enquiry, and our team will review it and get in touch.
      </p>

      {/* What happens next */}
      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 text-left">
        {steps.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-2.5 bg-sky-50 border border-sky-100 rounded-xl px-3 py-2.5"
          >
            <span className="w-6 h-6 shrink-0 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <span className="text-xs text-slate-700 leading-snug">{step}</span>
          </li>
        ))}
      </ol>

      {retryUrl && (
        <>
          <p className="text-xs text-slate-500 mb-3">
            {cfg.label} didn't open? Use the button below.
          </p>
          <a
            href={retryUrl}
            {...(opensNewTab
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            <Icon size={16} />
            {cfg.button}
          </a>
        </>
      )}

      {channel !== "whatsapp" && (
        <p className="mt-4 text-xs text-slate-500 break-words">
          Your enquiry goes to {ENQUIRY_EMAIL}.
        </p>
      )}

      {onDone && (
        <button
          type="button"
          onClick={onDone}
          className="mt-5 block mx-auto text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          {doneLabel}
        </button>
      )}
    </motion.div>
  );
};

export default EnquirySuccess;