import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">
            <span className="text-sky-400">Varelia</span> Lifesciences
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            A trusted name in domestic pharmaceutical distribution, delivering
            quality medicines under our own brand across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-sky-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-sky-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-sky-400 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/franchise" className="hover:text-sky-400 transition-colors">
                Franchise
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-sky-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Maharashtra, India</li>
            <li>+91 90278 64296</li>
            <li>siddiquiareeb46@gmail.com</li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="text-white font-semibold mb-3">Business Hours</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Mon - Sat: 9:00 AM - 7:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {year} Varelia Lifesciences Pvt. Ltd. All rights reserved.</p>
          <p>
            Products manufactured under license by third-party manufacturers.
          </p>
        </div>
      </div>
    </footer>
  );
}