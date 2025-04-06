import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import * as animations from "@/utils/animations";
import * as styles from "@/styles/shared";

export function AtigsInvestorsSummit() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const summitFeatures = [
    {
      title: "Investment Opportunities",
      description: "Direct access to vetted investment opportunities across Africa",
      icon: "💎"
    },
    {
      title: "Expert Insights",
      description: "Market analysis and investment strategies from industry leaders",
      icon: "🎯"
    },
    {
      title: "Networking",
      description: "Connect with key stakeholders and decision-makers",
      icon: "🤝"
    },
    {
      title: "Deal Flow",
      description: "Access to pre-screened projects and investment-ready businesses",
      icon: "📈"
    }
  ];

  const investmentSectors = [
    {
      title: "Infrastructure",
      description: "Transportation, Energy, and Urban Development",
      projects: 45
    },
    {
      title: "Agriculture",
      description: "Agribusiness and Food Processing",
      projects: 38
    },
    {
      title: "Technology",
      description: "Fintech, E-commerce, and Digital Solutions",
      projects: 52
    },
    {
      title: "Healthcare",
      description: "Medical Facilities and Pharmaceutical",
      projects: 29
    },
    {
      title: "Real Estate",
      description: "Commercial and Industrial Properties",
      projects: 33
    },
    {
      title: "Manufacturing",
      description: "Industrial and Consumer Goods",
      projects: 41
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" ref={containerRef}>
      {/* Hero Section */}
      <motion.div 
        className={`${styles.sections.hero} ${styles.gradients.primary} overflow-hidden`}
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className={`${styles.containers.default} relative z-10`}>
          <motion.div
            variants={animations.staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.h1 
              variants={animations.heroTextReveal}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              ATIGS Investors Summit
            </motion.h1>
            <motion.p 
              variants={animations.heroTextReveal}
              className="text-xl md:text-2xl text-gray-100 mb-8"
            >
              Where global investors meet Africa's most promising opportunities
            </motion.p>
            <motion.div 
              variants={animations.fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={animations.cardHover}
                whileTap={animations.buttonTap}
                className={styles.buttonStyles.primary}
              >
                Register as Investor
              </motion.button>
              <motion.button
                whileHover={animations.cardHover}
                whileTap={animations.buttonTap}
                className={styles.buttonStyles.secondary}
              >
                Submit Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className={styles.containers.default}>
        {/* About Section */}
        <motion.div
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`${styles.sections.default} ${styles.grids.responsive2}`}
        >
          <motion.div variants={animations.slideInLeft} className="space-y-6">
            <h2 className={`text-4xl font-bold ${styles.textGradients.primary}`}>
              About the Summit
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">
                The ATIGS Investors Summit is an exclusive gathering of international investors, fund managers, and business leaders focused on exploring investment opportunities in Africa.
              </p>
              <p className="text-gray-600 text-lg">
                Our carefully curated program combines high-level networking, expert insights, and direct access to vetted investment opportunities across various sectors.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={animations.slideInRight}
            className={`${styles.cards.glass} ${styles.shadows.lg}`}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Summit Highlights</h3>
            <ul className="space-y-4">
              {["Investment Pitch Sessions", "One-on-One Deal Meetings", "Market Intelligence Briefings", "VIP Networking Events"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-600"
                >
                  <span className="w-2 h-2 bg-[#1a365d] rounded-full mr-3" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.sections.feature}
        >
          <motion.h2 
            variants={animations.fadeInUp}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Attend?
          </motion.h2>
          <div className={styles.grids.responsive4}>
            {summitFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={animations.scaleUp}
                whileHover={animations.cardHover}
                className={`${styles.cards.default} group cursor-pointer`}
              >
                <motion.div 
                  className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Sectors */}
        <motion.div
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.sections.default}
        >
          <motion.h2 
            variants={animations.fadeInUp}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Investment Sectors
          </motion.h2>
          <div className={styles.grids.responsive3}>
            {investmentSectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                variants={animations.scaleUp}
                whileHover={animations.cardHover}
                className={`${styles.cards.glass} group cursor-pointer overflow-hidden`}
              >
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1a365d] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {sector.description}
                  </p>
                  <div className="flex items-center text-[#1a365d]">
                    <span className="text-2xl font-bold">{sector.projects}</span>
                    <span className="ml-2">Active Projects</span>
                  </div>
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-[#1a365d]/5 rounded-full -mr-10 -mt-10"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={animations.fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`${styles.gradients.primary} rounded-2xl p-8 md:p-12 text-center mb-16 ${styles.shadows.xl}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Africa's Premier Investment Summit
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto text-lg">
            Connect with leading investors, discover high-potential opportunities, and be part of Africa's growth story.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={animations.cardHover}
              whileTap={animations.buttonTap}
              className={`${styles.buttonStyles.accent} ${styles.shadows.md}`}
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={animations.cardHover}
              whileTap={animations.buttonTap}
              className={styles.buttonStyles.secondary}
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 