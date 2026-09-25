// import { motion } from "framer-motion";

// // PLACEHOLDER — replace with real contact hero image once client provides one
// import contactHeroImg from "../../assets/contact-hero.png";

// const ContactHero = () => {
//   return (
//     <section
//       className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${contactHeroImg})` }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/85"></div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="relative z-10 text-center px-4"
//       >
//         <span className="inline-block text-sky-400 uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
//           Get In Touch
//         </span>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-snug">
//           Let's Start a{" "}
//           <span className="text-sky-400">Conversation</span>
//         </h1>
//       </motion.div>
//     </section>
//   );
// };

// export default ContactHero;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";

// PLACEHOLDER — replace with real contact hero image once client provides one
import contactHeroImg from "../../assets/contact-hero.png";

const ContactHero = () => {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      {/* Background Image with slow zoom animation */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={contactHeroImg}
          alt="Contact Varelia Lifesciences"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Light gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/60 via-sky-800/40 to-sky-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

      {/* Decorative glowing orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            whileHover={{ scale: 1.08, rotate: 3 }}
            className="w-14 h-14 mx-auto bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-md shadow-lg shadow-sky-900/30"
          >
            <MessageCircle size={26} className="text-sky-200" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-md"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-sky-300"
            />
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent italic">
              Conversation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sky-50/90 text-sm sm:text-base max-w-2xl mx-auto mb-6"
          >
            Have a question about our products, franchise opportunities, or
            partnerships? Our team is here to help you every step of the way.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-sm text-sky-100/80 bg-white/5 border border-white/10 rounded-full px-5 py-2 w-fit mx-auto backdrop-blur-md"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Contact</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;