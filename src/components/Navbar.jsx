
// import { useState, useEffect, useMemo, useRef } from "react";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Search,
//   Globe2,
//   ArrowRight,
// } from "lucide-react";
// import logo from "../assets/logo.jpeg";
// import globeVideo from "../assets/Globe.webm";
// import { products } from "../data/products";
// import { useQuoteModal } from "../context/QuoteModalContext";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Products", path: "/products" },
//   { name: "Services", path: "/services" },
//   { name: "Global Markets", path: "/global" },
//   { name: "Quality", path: "/quality" },
//   { name: "Partners", path: "/partners" },
//   { name: "Contact", path: "/contact" },
// ];

// // Search ke liye global markets (Global page ke regions jaise hi)
// const searchMarkets = [
//   {
//     name: "India",
//     tag: "Home market",
//     keywords: "india domestic home market",
//   },
//   {
//     name: "Middle East",
//     tag: "Target market",
//     keywords: "middle east export importer distributor",
//   },
//   {
//     name: "Africa",
//     tag: "Target market",
//     keywords: "africa export importer distributor",
//   },
//   {
//     name: "South-East Asia",
//     tag: "Target market",
//     keywords: "south-east asia southeast asia se asia export importer distributor",
//   },
//   {
//     name: "Central Asia",
//     tag: "Target market",
//     keywords: "central asia export importer",
//   },
// ];

// const searchSuggestions = [
//   "Saline",
//   "Ringer",
//   "Dextrose",
//   "Mannitol",
//   "Middle East",
//   "Africa",
// ];

// const MAX_PRODUCT_RESULTS = 6;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

//   // Search states
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const searchInput = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { openQuote } = useQuoteModal();

//   const closeSearch = () => {
//     setSearchOpen(false);
//     setQuery("");
//   };

//   const toggleSearch = () => {
//     setIsOpen(false);
//     setSearchOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   // Page badalne par search band
//   useEffect(() => {
//     setSearchOpen(false);
//     setQuery("");
//   }, [location.pathname]);

//   // Search khulne par input focus + Escape / bahar click se band
//   useEffect(() => {
//     if (!searchOpen) return;

//     const focusTimer = setTimeout(() => searchInput.current?.focus(), 80);

//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setQuery("");
//       }
//     };
//     const onClickOutside = (e) => {
//       if (!e.target.closest("[data-search-root]")) {
//         setSearchOpen(false);
//         setQuery("");
//       }
//     };

//     window.addEventListener("keydown", onKey);
//     document.addEventListener("mousedown", onClickOutside);
//     return () => {
//       clearTimeout(focusTimer);
//       window.removeEventListener("keydown", onKey);
//       document.removeEventListener("mousedown", onClickOutside);
//     };
//   }, [searchOpen]);

//   const results = useMemo(() => {
//     const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
//     if (!tokens.length) return { products: [], markets: [] };

//     const matchAll = (text) => tokens.every((t) => text.includes(t));

//     return {
//       products: products.filter((p) =>
//         matchAll(
//           `${p.name} ${p.genericName} ${p.strength} ${p.category}`.toLowerCase()
//         )
//       ),
//       markets: searchMarkets.filter((m) =>
//         matchAll(`${m.name} ${m.tag} global markets ${m.keywords}`.toLowerCase())
//       ),
//     };
//   }, [query]);

//   const visibleProducts = results.products.slice(0, MAX_PRODUCT_RESULTS);
//   const hasQuery = query.trim().length > 0;
//   const hasResults = results.products.length > 0 || results.markets.length > 0;

//   // Enter dabane par pehle result par le jao
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (results.products.length > 0) {
//       navigate(`/products/${results.products[0].slug}`);
//     } else if (results.markets.length > 0) {
//       navigate("/global");
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-md py-2"
//           : "bg-white/80 backdrop-blur-sm py-4"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 shrink-0">
//           <img
//             src={logo}
//             alt="Varelia Lifesciences"
//             className={`transition-all duration-300 object-contain ${
//               scrolled ? "h-7" : "h-8"
//             }`}
//           />
//           <span className="flex flex-col leading-tight">
//             <span
//               className={`font-bold tracking-tight transition-all duration-300 ${
//                 scrolled ? "text-base" : "text-lg"
//               }`}
//             >
//               <span className="text-sky-600">Varelia</span>{" "}
//               <span className="text-slate-800">Lifesciences</span>
//             </span>
//             <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-black">
//   Pvt. Ltd.
// </span>
//           </span>
//         </Link>

//         {/* Desktop Nav — pill box container */}
//         <ul className="hidden xl:flex items-center gap-1 bg-sky-50 border border-sky-200 rounded-xl px-2 py-2">
//           {navLinks.map((link) => (
//             <li
//               key={link.name}
//               className="relative"
//               onMouseEnter={() => link.dropdown && setAboutOpen(true)}
//               onMouseLeave={() => link.dropdown && setAboutOpen(false)}
//             >
//               {link.dropdown ? (
//                 <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-slate-700 font-medium text-sm hover:bg-white hover:text-sky-700 hover:shadow-sm transition-all duration-200">
//                   {link.name}
//                   <ChevronDown
//                     size={15}
//                     className={`transition-transform duration-200 ${
//                       aboutOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//               ) : (
//                 <NavLink
//                   to={link.path}
//                   end={link.path === "/"}
//                   className={({ isActive }) =>
//                     `block px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
//                       isActive
//                         ? "bg-white text-sky-700 shadow-sm"
//                         : "text-slate-700 hover:bg-white hover:text-sky-700 hover:shadow-sm"
//                     }`
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               )}

//               {/* Dropdown */}
//               <AnimatePresence>
//                 {link.dropdown && aboutOpen && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden"
//                   >
//                     {link.dropdown.map((item) => (
//                       <li key={item.name}>
//                         <NavLink
//                           to={item.path}
//                           className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
//                         >
//                           {item.name}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </li>
//           ))}
//         </ul>

//         {/* Search + Globe video + CTA Button - Desktop */}
//         <div className="hidden xl:flex items-center gap-3 shrink-0">
//           <button
//             type="button"
//             data-search-root
//             onClick={toggleSearch}
//             aria-label="Search products and global markets"
//             aria-expanded={searchOpen}
//             className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-50 border border-sky-200 text-sky-700 hover:bg-white hover:shadow-sm transition-all duration-200"
//           >
//             {searchOpen ? <X size={17} /> : <Search size={17} />}
//           </button>
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="auto"
//             className="w-9 h-9 object-contain"
//           >
//             <source src={globeVideo} type="video/webm" />
//           </video>
//           <button
//             type="button"
//             onClick={openQuote}
//             className="inline-flex items-center bg-sky-600 text-white font-medium px-5 py-2.5 rounded-full hover:bg-sky-700 hover:scale-105 transition-all duration-300 shadow-md whitespace-nowrap"
//           >
//             Request a Quote
//           </button>
//         </div>

//         {/* Mobile: Search + Toggle */}
//         <div className="xl:hidden flex items-center gap-3">
//           <button
//             type="button"
//             data-search-root
//             onClick={toggleSearch}
//             aria-label="Search products and global markets"
//             aria-expanded={searchOpen}
//             className="text-slate-800 z-50"
//           >
//             {searchOpen ? <X size={26} /> : <Search size={26} />}
//           </button>
//           <button
//             className="text-slate-800 z-50"
//             onClick={() => {
//               setSearchOpen(false);
//               setIsOpen(!isOpen);
//             }}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* Search Panel (desktop + mobile) */}
//       <AnimatePresence>
//         {searchOpen && (
//           <motion.div
//             data-search-root
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.18 }}
//             className="absolute left-0 right-0 top-full mt-2 px-4 sm:px-6 xl:left-auto xl:right-8 xl:px-0 xl:w-[440px]"
//           >
//             <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
//               {/* Input */}
//               <form
//                 onSubmit={handleSearchSubmit}
//                 className="flex items-center gap-2 px-4 py-3 border-b border-slate-100"
//               >
//                 <Search size={18} className="text-sky-600 shrink-0" />
//                 <input
//                   ref={searchInput}
//                   type="text"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search products or global markets..."
//                   aria-label="Search products or global markets"
//                   className="flex-1 min-w-0 bg-transparent outline-none text-sm text-slate-900 placeholder-slate-400"
//                 />
//                 {query && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setQuery("");
//                       searchInput.current?.focus();
//                     }}
//                     aria-label="Clear search"
//                     className="text-slate-400 hover:text-slate-700 transition-colors"
//                   >
//                     <X size={16} />
//                   </button>
//                 )}
//               </form>

//               {/* Results */}
//               <div className="max-h-[60vh] overflow-y-auto p-2">
//                 {/* Empty query — suggestions */}
//                 {!hasQuery && (
//                   <div className="px-2 py-3">
//                     <p className="text-xs text-slate-500 mb-3">
//                       Search products (e.g. Dextrose, Ringer) or global
//                       markets (e.g. Africa).
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {searchSuggestions.map((s) => (
//                         <button
//                           key={s}
//                           type="button"
//                           onClick={() => {
//                             setQuery(s);
//                             searchInput.current?.focus();
//                           }}
//                           className="text-xs font-medium text-sky-700 bg-sky-50 border border-sky-100 hover:bg-sky-100 px-3 py-1.5 rounded-full transition-colors"
//                         >
//                           {s}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* No results */}
//                 {hasQuery && !hasResults && (
//                   <div className="px-3 py-6 text-center">
//                     <p className="text-sm font-medium text-slate-800 mb-1">
//                       No results found
//                     </p>
//                     <p className="text-xs text-slate-500 mb-3">
//                       Try a different keyword, or tell us what you need.
//                     </p>
//                     <Link
//                       to="/contact"
//                       onClick={closeSearch}
//                       className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
//                     >
//                       Contact us <ArrowRight size={13} />
//                     </Link>
//                   </div>
//                 )}

//                 {/* Products */}
//                 {visibleProducts.length > 0 && (
//                   <div className="mb-1">
//                     <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                       Products
//                     </p>
//                     {visibleProducts.map((p) => (
//                       <Link
//                         key={p.slug}
//                         to={`/products/${p.slug}`}
//                         onClick={closeSearch}
//                         className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 transition-colors"
//                       >
//                         <img
//                           src={p.image}
//                           alt=""
//                           className="w-10 h-10 object-contain rounded-md bg-slate-50 border border-slate-100 shrink-0"
//                         />
//                         <span className="min-w-0 flex-1">
//                           <span className="block text-sm font-medium text-slate-800 truncate">
//                             {p.name}
//                           </span>
//                           <span className="block text-xs text-slate-500 truncate">
//                             {p.category}
//                           </span>
//                         </span>
//                         <ArrowRight
//                           size={15}
//                           className="text-slate-300 shrink-0"
//                         />
//                       </Link>
//                     ))}
//                     {results.products.length > MAX_PRODUCT_RESULTS && (
//                       <Link
//                         to="/products"
//                         onClick={closeSearch}
//                         className="block px-3 py-2 text-xs font-semibold text-sky-700 hover:text-sky-800"
//                       >
//                         View all products →
//                       </Link>
//                     )}
//                   </div>
//                 )}

//                 {/* Global markets */}
//                 {results.markets.length > 0 && (
//                   <div>
//                     <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
//                       Global Markets
//                     </p>
//                     {results.markets.map((m) => (
//                       <Link
//                         key={m.name}
//                         to="/global"
//                         onClick={closeSearch}
//                         className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 transition-colors"
//                       >
//                         <span className="w-10 h-10 rounded-md bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
//                           <Globe2 size={18} className="text-sky-600" />
//                         </span>
//                         <span className="min-w-0 flex-1">
//                           <span className="block text-sm font-medium text-slate-800 truncate">
//                             {m.name}
//                           </span>
//                           <span className="block text-xs text-slate-500 truncate">
//                             {m.tag}
//                           </span>
//                         </span>
//                         <ArrowRight
//                           size={15}
//                           className="text-slate-300 shrink-0"
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "100vh" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="xl:hidden fixed top-0 left-0 w-full bg-white overflow-y-auto pt-24 pb-8 px-6"
//           >
//             {/* Pill box container — mobile */}
//             <div className="bg-sky-50 border border-sky-200 rounded-xl p-2 flex flex-col gap-1">
//               {navLinks.map((link, i) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.06 }}
//                 >
//                   {link.dropdown ? (
//                     <>
//                       <button
//                         onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
//                         className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-slate-800 font-medium text-base hover:bg-white transition-colors"
//                       >
//                         {link.name}
//                         <ChevronDown
//                           size={18}
//                           className={`transition-transform duration-200 ${
//                             mobileAboutOpen ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>
//                       <AnimatePresence>
//                         {mobileAboutOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             className="pl-4 pb-2 flex flex-col gap-1 overflow-hidden"
//                           >
//                             {link.dropdown.map((item) => (
//                               <NavLink
//                                 key={item.name}
//                                 to={item.path}
//                                 onClick={() => setIsOpen(false)}
//                                 className="block px-4 py-2 rounded-lg text-slate-600 text-sm hover:bg-white transition-colors"
//                               >
//                                 {item.name}
//                               </NavLink>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </>
//                   ) : (
//                     <NavLink
//                       to={link.path}
//                       end={link.path === "/"}
//                       onClick={() => setIsOpen(false)}
//                       className={({ isActive }) =>
//                         `block px-4 py-3 rounded-lg font-medium text-base transition-colors ${
//                           isActive
//                             ? "bg-white text-sky-700 shadow-sm"
//                             : "text-slate-800 hover:bg-white"
//                         }`
//                       }
//                     >
//                       {link.name}
//                     </NavLink>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: navLinks.length * 0.06 }}
//               className="mt-4 flex items-center justify-center gap-4"
//             >
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 preload="auto"
//                 className="w-11 h-11 object-contain"
//               >
//                 <source src={globeVideo} type="video/webm" />
//               </video>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsOpen(false);
//                   openQuote();
//                 }}
//                 className="flex-1 text-center bg-sky-600 text-white font-medium px-5 py-3 rounded-full hover:bg-sky-700 transition-colors"
//               >
//                 Request a Quote
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;


import { useState, useEffect, useMemo, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Globe2,
  ArrowRight,
  Download,
} from "lucide-react";
import logo from "../assets/logo.jpeg";
import globeVideo from "../assets/Globe.webm";
import { products } from "../data/products";
import { useQuoteModal } from "../context/QuoteModalContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Global Markets", path: "/global" },
  { name: "Quality", path: "/quality" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact" },
];

// Search ke liye global markets (Global page ke regions jaise hi)
const searchMarkets = [
  {
    name: "India",
    tag: "Home market",
    keywords: "india domestic home market",
  },
  {
    name: "Middle East",
    tag: "Target market",
    keywords: "middle east export importer distributor",
  },
  {
    name: "Africa",
    tag: "Target market",
    keywords: "africa export importer distributor",
  },
  {
    name: "South-East Asia",
    tag: "Target market",
    keywords: "south-east asia southeast asia se asia export importer distributor",
  },
  {
    name: "Central Asia",
    tag: "Target market",
    keywords: "central asia export importer",
  },
];

const searchSuggestions = [
  "Saline",
  "Ringer",
  "Dextrose",
  "Mannitol",
  "Middle East",
  "Africa",
];

const MAX_PRODUCT_RESULTS = 6;

// Company profile PDF (file public/ folder mein rakhi hai)
const PROFILE_PDF = "/Varelia-Lifesciences-Company-Profile.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Search states
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInput = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { openQuote } = useQuoteModal();

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const toggleSearch = () => {
    setIsOpen(false);
    setSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Page badalne par search band
  useEffect(() => {
    setSearchOpen(false);
    setQuery("");
  }, [location.pathname]);

  // Search khulne par input focus + Escape / bahar click se band
  useEffect(() => {
    if (!searchOpen) return;

    const focusTimer = setTimeout(() => searchInput.current?.focus(), 80);

    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    };
    const onClickOutside = (e) => {
      if (!e.target.closest("[data-search-root]")) {
        setSearchOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [searchOpen]);

  const results = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.length) return { products: [], markets: [] };

    const matchAll = (text) => tokens.every((t) => text.includes(t));

    return {
      products: products.filter((p) =>
        matchAll(
          `${p.name} ${p.genericName} ${p.strength} ${p.category}`.toLowerCase()
        )
      ),
      markets: searchMarkets.filter((m) =>
        matchAll(`${m.name} ${m.tag} global markets ${m.keywords}`.toLowerCase())
      ),
    };
  }, [query]);

  const visibleProducts = results.products.slice(0, MAX_PRODUCT_RESULTS);
  const hasQuery = query.trim().length > 0;
  const hasResults = results.products.length > 0 || results.markets.length > 0;

  // Enter dabane par pehle result par le jao
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (results.products.length > 0) {
      navigate(`/products/${results.products[0].slug}`);
    } else if (results.markets.length > 0) {
      navigate("/global");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 flex items-center justify-between gap-4 xl:gap-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Varelia Lifesciences"
            className={`transition-all duration-300 object-contain ${
              scrolled ? "h-7" : "h-8"
            }`}
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-bold tracking-tight transition-all duration-300 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              <span className="text-sky-600">Varelia</span>{" "}
              <span className="text-slate-800">Lifesciences</span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-black">
  Pvt. Ltd.
</span>
          </span>
        </Link>

        {/* Desktop Nav — pill box container */}
        <ul className="hidden xl:flex items-center gap-1 bg-sky-50 border border-sky-200 rounded-xl px-2 py-2">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setAboutOpen(true)}
              onMouseLeave={() => link.dropdown && setAboutOpen(false)}
            >
              {link.dropdown ? (
                <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-slate-700 font-medium text-sm hover:bg-white hover:text-sky-700 hover:shadow-sm transition-all duration-200">
                  {link.name}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `block whitespace-nowrap px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-white text-sky-700 shadow-sm"
                        : "text-slate-700 hover:bg-white hover:text-sky-700 hover:shadow-sm"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && aboutOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden"
                  >
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Download + Search + Globe video + CTA Button - Desktop */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a
            href={PROFILE_PDF}
            download="Varelia-Lifesciences-Company-Profile.pdf"
            title="Download Company Profile (PDF)"
            aria-label="Download Company Profile (PDF)"
            className="h-9 px-3 flex items-center justify-center rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wide hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            PDF
          </a>
          <button
            type="button"
            data-search-root
            onClick={toggleSearch}
            aria-label="Search products and global markets"
            aria-expanded={searchOpen}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-50 border border-sky-200 text-sky-700 hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            {searchOpen ? <X size={17} /> : <Search size={17} />}
          </button>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-9 h-9 object-contain"
          >
            <source src={globeVideo} type="video/webm" />
          </video>
          <button
            type="button"
            onClick={openQuote}
            className="inline-flex items-center bg-sky-600 text-white font-medium px-5 py-2.5 rounded-full hover:bg-sky-700 hover:scale-105 transition-all duration-300 shadow-md whitespace-nowrap"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile: Search + Toggle */}
        <div className="xl:hidden flex items-center gap-3">
          <button
            type="button"
            data-search-root
            onClick={toggleSearch}
            aria-label="Search products and global markets"
            aria-expanded={searchOpen}
            className="text-slate-800 z-50"
          >
            {searchOpen ? <X size={26} /> : <Search size={26} />}
          </button>
          <button
            className="text-slate-800 z-50"
            onClick={() => {
              setSearchOpen(false);
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Search Panel (desktop + mobile) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            data-search-root
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full mt-2 px-4 sm:px-6 xl:left-auto xl:right-8 xl:px-0 xl:w-[440px]"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              {/* Input */}
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center gap-2 px-4 py-3 border-b border-slate-100"
              >
                <Search size={18} className="text-sky-600 shrink-0" />
                <input
                  ref={searchInput}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products or global markets..."
                  aria-label="Search products or global markets"
                  className="flex-1 min-w-0 bg-transparent outline-none text-sm text-slate-900 placeholder-slate-400"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      searchInput.current?.focus();
                    }}
                    aria-label="Clear search"
                    className="text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </form>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {/* Empty query — suggestions */}
                {!hasQuery && (
                  <div className="px-2 py-3">
                    <p className="text-xs text-slate-500 mb-3">
                      Search products (e.g. Dextrose, Ringer) or global
                      markets (e.g. Africa).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {searchSuggestions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            setQuery(s);
                            searchInput.current?.focus();
                          }}
                          className="text-xs font-medium text-sky-700 bg-sky-50 border border-sky-100 hover:bg-sky-100 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* No results */}
                {hasQuery && !hasResults && (
                  <div className="px-3 py-6 text-center">
                    <p className="text-sm font-medium text-slate-800 mb-1">
                      No results found
                    </p>
                    <p className="text-xs text-slate-500 mb-3">
                      Try a different keyword, or tell us what you need.
                    </p>
                    <Link
                      to="/contact"
                      onClick={closeSearch}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800"
                    >
                      Contact us <ArrowRight size={13} />
                    </Link>
                  </div>
                )}

                {/* Products */}
                {visibleProducts.length > 0 && (
                  <div className="mb-1">
                    <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Products
                    </p>
                    {visibleProducts.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        onClick={closeSearch}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 transition-colors"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className="w-10 h-10 object-contain rounded-md bg-slate-50 border border-slate-100 shrink-0"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-slate-800 truncate">
                            {p.name}
                          </span>
                          <span className="block text-xs text-slate-500 truncate">
                            {p.category}
                          </span>
                        </span>
                        <ArrowRight
                          size={15}
                          className="text-slate-300 shrink-0"
                        />
                      </Link>
                    ))}
                    {results.products.length > MAX_PRODUCT_RESULTS && (
                      <Link
                        to="/products"
                        onClick={closeSearch}
                        className="block px-3 py-2 text-xs font-semibold text-sky-700 hover:text-sky-800"
                      >
                        View all products →
                      </Link>
                    )}
                  </div>
                )}

                {/* Global markets */}
                {results.markets.length > 0 && (
                  <div>
                    <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Global Markets
                    </p>
                    {results.markets.map((m) => (
                      <Link
                        key={m.name}
                        to="/global"
                        onClick={closeSearch}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sky-50 transition-colors"
                      >
                        <span className="w-10 h-10 rounded-md bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                          <Globe2 size={18} className="text-sky-600" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-slate-800 truncate">
                            {m.name}
                          </span>
                          <span className="block text-xs text-slate-500 truncate">
                            {m.tag}
                          </span>
                        </span>
                        <ArrowRight
                          size={15}
                          className="text-slate-300 shrink-0"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden fixed top-0 left-0 w-full bg-white overflow-y-auto pt-24 pb-8 px-6"
          >
            {/* Pill box container — mobile */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-2 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-slate-800 font-medium text-base hover:bg-white transition-colors"
                      >
                        {link.name}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobileAboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 pb-2 flex flex-col gap-1 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 rounded-lg text-slate-600 text-sm hover:bg-white transition-colors"
                              >
                                {item.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                          isActive
                            ? "bg-white text-sky-700 shadow-sm"
                            : "text-slate-800 hover:bg-white"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              className="mt-4 flex items-center justify-center gap-4"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-11 h-11 object-contain"
              >
                <source src={globeVideo} type="video/webm" />
              </video>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  openQuote();
                }}
                className="flex-1 text-center bg-sky-600 text-white font-medium px-5 py-3 rounded-full hover:bg-sky-700 transition-colors"
              >
                Request a Quote
              </button>
            </motion.div>

            <motion.a
              href={PROFILE_PDF}
              download="Varelia-Lifesciences-Company-Profile.pdf"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (navLinks.length + 1) * 0.06 }}
              className="mt-3 flex items-center justify-center gap-2 border border-sky-200 text-sky-700 font-medium px-5 py-3 rounded-full hover:bg-sky-50 transition-colors"
            >
              <Download size={18} />
              Download Company Profile (PDF)
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;