import { motion } from "framer-motion";
import { Target, Eye, Compass } from "lucide-react";

const cards = [
  {
    icon: <Target size={26} />,
    title: "Our Mission",
    desc: "To deliver reliable, quality-assured pharmaceutical products by partnering with licensed Indian manufacturers, ensuring healthcare providers across India and international markets receive medicines they can trust.",
  },
  {
    icon: <Eye size={26} />,
    title: "Our Vision",
    desc: "To become a recognized and trusted name in pharmaceutical trade, expanding our domestic and global reach while maintaining uncompromising standards of quality and reliability.",
  },
  {
    icon: <Compass size={26} />,
    title: "Our Approach",
    desc: "Careful sourcing from licensed manufacturers, consistent quality checks, and transparent communication at every step — from production to delivery.",
  },
];

const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sky-500/20">
            What Drives Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Mission, Vision &{" "}
            <span className="text-sky-400 italic">Approach</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/[0.03] border border-sky-500/20 hover:border-sky-400/60 rounded-2xl p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10"
            >
              {/* Gradient hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shine sweep effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-500/10 text-sky-400 mb-6 transition-all duration-500 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:scale-110">
                  {card.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;