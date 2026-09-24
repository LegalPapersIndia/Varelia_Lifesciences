// import { Link } from "react-router-dom";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-900 text-slate-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-lg font-bold text-white mb-3">
//             <span className="text-sky-400">Varelia</span> Lifesciences
//           </h3>
//           <p className="text-sm text-slate-400 leading-relaxed">
//             A trusted name in domestic pharmaceutical distribution, delivering
//             quality medicines under our own brand across India.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link to="/" className="hover:text-sky-400 transition-colors">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-sky-400 transition-colors">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" className="hover:text-sky-400 transition-colors">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/franchise" className="hover:text-sky-400 transition-colors">
//                 Franchise
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-sky-400 transition-colors">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">Contact Us</h4>
//           <ul className="space-y-2 text-sm text-slate-400">
//             <li>Maharashtra, India</li>
//             <li>+91 90278 64296</li>
//             <li>siddiquiareeb46@gmail.com</li>
//           </ul>
//         </div>

//         {/* Business Hours */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">Business Hours</h4>
//           <ul className="space-y-2 text-sm text-slate-400">
//             <li>Mon - Sat: 9:00 AM - 7:00 PM</li>
//             <li>Sunday: Closed</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
//           <p>© {year} Varelia Lifesciences Pvt. Ltd. All rights reserved.</p>
//           <p>
//             Products manufactured under license by third-party manufacturers.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Globe } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Franchise", path: "/franchise" },
  { label: "Contact", path: "/contact" },
];

// PLACEHOLDER — replace with real social links once client provides them
const SOCIAL_LINKS = [
  { icon: <Facebook size={16} />, url: "https://www.facebook.com/profile.php?id=61594758389870", label: "Facebook" },
  { icon: <Instagram size={16} />, url: "https://www.instagram.com/varelialifesciences/", label: "Instagram" },
  // { icon: <Linkedin size={16} />, url: "#", label: "LinkedIn" },
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
            <h3 className="text-lg font-bold text-white mb-3">
              <span className="text-sky-400">Varelia</span> Lifesciences
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              A trusted pharmaceutical merchant exporter and domestic
              supplier, delivering quality-assured medicines across India
              and international markets.
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
            <ul className="flex flex-col gap-3">
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
                  2nd Floor, Opposite Grand Square, Hapur Road, Meerut, Uttar
                  Pradesh – 250002
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-sky-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  varelialifesciences@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-sky-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  +91 90278 64296
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Business Hours + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
              Business Hours
            </h4>
            <ul className="flex flex-col gap-2 mb-6">
              <li className="text-sm text-slate-400">
                Mon - Sat: 9:00 AM - 7:00 PM
              </li>
              <li className="text-sm text-slate-400">Sunday: Closed</li>
            </ul> */}

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

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} Varelia Lifesciences Pvt. Ltd. All rights reserved.</p>
          <p>Products manufactured under license by third-party manufacturers.</p>
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