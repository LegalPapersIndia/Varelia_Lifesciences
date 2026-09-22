import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
 
  },
  { name: "Products", path: "/products" },
  { name: "Franchise", path: "/franchise" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span
            className={`font-bold tracking-tight transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            <span className="text-sky-600">Varelia</span>{" "}
            <span className="text-slate-800">Lifesciences</span>
          </span>
        </Link>

        {/* Desktop Nav — pill box container */}
        <ul className="hidden lg:flex items-center gap-1 bg-sky-50 border border-sky-200 rounded-xl px-2 py-2">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setAboutOpen(true)}
              onMouseLeave={() => link.dropdown && setAboutOpen(false)}
            >
              {link.dropdown ? (
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-slate-700 font-medium text-sm hover:bg-white hover:text-sky-700 hover:shadow-sm transition-all duration-200">
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
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
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

        {/* CTA Button - Desktop */}
        <Link
          to="/franchise"
          className="hidden lg:inline-flex items-center bg-sky-600 text-white font-medium px-5 py-2.5 rounded-full hover:bg-sky-700 hover:scale-105 transition-all duration-300 shadow-md shrink-0"
        >
          Get Franchise
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-800 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 left-0 w-full bg-white overflow-hidden pt-24 pb-8 px-6"
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
              className="mt-4"
            >
              <Link
                to="/franchise"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-sky-600 text-white font-medium px-5 py-3 rounded-full hover:bg-sky-700 transition-colors"
              >
                Get Franchise
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;