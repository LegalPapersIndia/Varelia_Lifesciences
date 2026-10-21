

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
// import logo from "../assets/logo.png";

// const NAV_LINKS = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Products", path: "/products" },
//   { label: "Services", path: "/services" },
//   { label: "Global", path: "/global" },
//   { label: "Quality", path: "/quality" },
//   { label: "Partners", path: "/partners" },
//   { label: "Contact", path: "/contact" },
// ];

// const LEGAL_LINKS = [
//   { label: "Privacy Policy", path: "/privacy" },
//   { label: "Terms & Conditions", path: "/terms" },
//   { label: "Disclaimer", path: "/disclaimer" },
// ];

// const SOCIAL_LINKS = [
//   {
//     icon: <Facebook size={16} />,
//     url: "https://www.facebook.com/profile.php?id=61594758389870",
//     label: "Facebook",
//   },
//   {
//     icon: <Instagram size={16} />,
//     url: "https://www.instagram.com/varelialifesciences/",
//     label: "Instagram",
//   },
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-900 text-slate-300 border-t border-sky-500/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
//           {/* Brand */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="sm:col-span-2 md:col-span-1"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <img
//                 src={logo}
//                 alt="Varelia Lifesciences"
//                 className="h-8 w-auto object-contain"
//               />
//               <h3 className="text-lg font-bold text-white">
//                 <span className="text-sky-400">Varelia</span> Lifesciences
//               </h3>
//             </div>
//             <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
//               A pharmaceutical merchant exporter and domestic supplier of IV
//               fluids, sourcing from qualified manufacturing partners for buyers
//               in India and international markets.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
//               Quick Links
//             </h4>
//             <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
//               Contact
//             </h4>
//             <ul className="flex flex-col gap-4">
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="text-sky-400 mt-0.5 shrink-0" />
//                 <span className="text-sm text-slate-400">
//                   2nd Floor, Opposite Grand Square, Hapur Road, Meerut, Uttar
//                   Pradesh – 250002
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail size={16} className="text-sky-400 mt-0.5 shrink-0" />
//                 <div className="flex flex-col gap-1">
//                   <a
//                     href="mailto:export@varelialifesciences.com"
//                     className="text-sm text-slate-400 break-all hover:text-sky-400 transition-colors duration-300"
//                   >
//                     export@varelialifesciences.com
//                   </a>
//                   <a
//                     href="mailto:domestic@varelialifesciences.com"
//                     className="text-sm text-slate-400 break-all hover:text-sky-400 transition-colors duration-300"
//                   >
//                     domestic@varelialifesciences.com
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Phone size={16} className="text-sky-400 mt-0.5 shrink-0" />
//                 <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//                   <a
//                     href="tel:+919027864296"
//                     className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
//                   >
//                     +91 90278 64296
//                   </a>
//                   <span className="text-slate-600">•</span>
//                   <a
//                     href="tel:+919410409450"
//                     className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
//                   >
//                     +91 94104 09450
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Social */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
//               Follow Us
//             </h4>
//             <div className="flex gap-3">
//               {SOCIAL_LINKS.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   whileHover={{ y: -4, scale: 1.08 }}
//                   className="w-10 h-10 flex items-center justify-center rounded-full border border-sky-500/30 text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent my-10"></div>

//         {/* Legal links */}
//         <nav
//           aria-label="Legal"
//           className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6"
//         >
//           {LEGAL_LINKS.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className="text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Bottom bar */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
//           <p>© {year} Varelia Lifesciences Pvt. Ltd. All rights reserved.</p>
//           <p>
//             For B2B buyers only. Products are supplied through qualified
//             third-party manufacturing partners.
//           </p>
//           <p>
//             Developed By{" "}
//             <a
//               href="https://www.legalpapersindia.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-sky-400 transition-colors duration-300"
//             >
//               Legal Papers India
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }




import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Global", path: "/global" },
  { label: "Quality", path: "/quality" },
  { label: "Partners", path: "/partners" },
  { label: "Contact", path: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Disclaimer", path: "/disclaimer" },
];

const EMAILS = [
  "export@varelialifesciences.com",
  "domestic@varelialifesciences.com",
];

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
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <img
                src={logo}
                alt="Varelia Lifesciences"
                className="h-8 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <h3 className="text-lg font-bold text-white">
                  <span className="text-sky-400">Varelia</span> Lifesciences
                </h3>
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-slate-300">
                  Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              A pharmaceutical merchant exporter and domestic supplier of IV
              fluids, sourcing from qualified manufacturing partners for buyers
              in India and international markets.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                 Building No. 1250, 2nd Floor, Opposite Grand Square, Hapur Road, Meerut, Uttar Pradesh – 250002
                </span>
              </li>

              {/* Each email has its own Mail icon */}
              {EMAILS.map((email) => (
                <li key={email} className="flex items-start gap-3">
                  <Mail size={16} className="text-sky-400 mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-slate-400 break-all hover:text-sky-400 transition-colors duration-300"
                  >
                    {email}
                  </a>
                </li>
              ))}

              <li className="flex items-start gap-3">
                <Phone size={16} className="text-sky-400 mt-0.5 shrink-0" />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a
                    href="tel:+919027864296"
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
                  >
                    +91 90278 64296
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href="tel:+919410409450"
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
                  >
                    +91 94104 09450
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-sky-500/30 text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent my-10"></div>

        {/* Legal links */}
        <nav
          aria-label="Legal"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6"
        >
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {year} Varelia Lifesciences Pvt. Ltd. All rights reserved.</p>
          <p>
            For B2B buyers only. Products are supplied through qualified
            third-party manufacturing partners.
          </p>
          <p>
            Developed By{" "}
            <a
              href="https://www.legalpapersindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-300"
            >
              Legal Papers India
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}