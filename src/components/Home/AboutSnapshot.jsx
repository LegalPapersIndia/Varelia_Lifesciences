import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "../../assets/about/about-1.jpg";
import image2 from "../../assets/about/about-2.jpg";
import image3 from "../../assets/about/about-3.jpg";

const highlights = [
  {
    icon: ShieldCheck,
    title: "GMP Certified Manufacturing",
    text: "Every batch is manufactured under strict quality guidelines.",
  },
  {
    icon: Truck,
    title: "Domestic Reach",
    text: "Serving distributors and pharmacies across India.",
  },
  {
    icon: Users,
    title: "Franchise Network",
    text: "Growing base of trusted PCD franchise partners nationwide.",
  },
];

const AboutSnapshot = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — 3-image collage + stats card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] sm:h-[480px] lg:h-[520px]"
          >
            {/* Decorative blurred accents */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-sky-300/20 blur-3xl -z-10" />
            <div className="absolute -bottom-8 right-10 w-40 h-40 rounded-full bg-sky-400/20 blur-3xl -z-10" />

            {/* Big image — top left, tall */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group absolute top-0 left-0 w-[62%] h-[70%] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={image1}
                alt="Manufacturing unit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-lg italic">Manufacturing Unit</p>
              </div>
            </motion.div>

            {/* Small image — top right */}
            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group absolute top-0 right-0 w-[34%] h-[42%] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={image2}
                alt="Quality check"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Small image — bottom right */}
            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group absolute bottom-0 right-0 w-[34%] h-[42%] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={image3}
                alt="Packaged medicines"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Wide stats card — bottom left */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group absolute bottom-0 left-0 w-[62%] h-[24%] rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-sky-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-700 to-sky-600" />
              <div className="relative h-full flex items-center justify-center px-4">
                <p className="font-mono text-3xl sm:text-4xl font-semibold text-white text-center">
                  100%
                  <span className="block text-xs font-sans tracking-widest uppercase text-white/80 mt-1">
                    Quality Assured
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              <span className="text-xs font-semibold tracking-widest uppercase text-sky-700">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Trusted Pharma Partner
              <br />
              <span className="italic text-sky-600">for Domestic India</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Varelia Lifesciences specializes in bringing quality medicines
              to market under our own trusted brand, manufactured through
              certified partners and distributed across India. Our mission is
              simple — deliver reliable healthcare products with complete
              transparency.
            </p>

            {/* Highlights */}
            <div className="space-y-6 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center">
                    <item.icon size={20} className="text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sky-700 font-semibold border-b-2 border-sky-400 pb-1 hover:gap-3 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;