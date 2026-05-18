import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-pattern-dot overflow-hidden border-b border-border-muted/50">
        <motion.div 
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-8 border border-border-muted shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Industrial & Food Packaging Excellence
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight max-w-4xl mx-auto mb-6">
            Performance You Can <span className="text-primary">Rely On</span>,<br className="hidden md:block"/> Anywhere.
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Engineering superior adhesive solutions and premium food packaging for over 30 years. A dual-brand expertise to serve every industrial need.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="inline-flex justify-center items-center bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 rounded-lg font-label-md text-label-md transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-[1.02] shadow-sm hover:shadow-md" to="/brands">
              Explore Brands
            </Link>
            <Link className="inline-flex justify-center items-center bg-surface border border-border-muted text-on-surface hover:border-primary hover:text-primary px-8 py-3.5 rounded-lg font-label-md text-label-md transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-[1.02] shadow-sm hover:shadow-md" to="/about">
              Our Legacy
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Mini About Banner - Optional on Home page, maybe just keep it simple */}
      <section className="bg-surface py-20 border-b border-border-muted">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-headline-xl text-headline-xl text-on-surface mb-6">Precision Crafted,<br/>Proven Quality.</motion.h2>
              <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                With over three decades of industry experience, Tunisie Tape stands as a pillar of reliability. Our commitment to continuous innovation ensures every roll meets international standards.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/about" className="text-primary font-label-md text-label-md hover:underline flex items-center gap-2">
                  Learn more about our mission <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-lg overflow-hidden border border-border-muted shadow-subtle aspect-[4/3] group"
            >
              <img alt="Manufacturing Facility" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeL9FDEh3BvheWFuZEuVmxgrkQsajD8s-9W_B-qO-RtFZJr6G6busG3K8lolw9yQYkZ26f8_4CXLyo9rA5w1_6rgiuY4M8noYzupCsbByP0vo-dnhLzUFElUw2lVhGjN5GXks9G9pV8L5lucnD4Y_fzUZ-EXDG08i9Dki6NhnEC7rz4p9z0mBR2ypy77sln2YS3EvpiuuvXLHI6cUDmP4r2UQfD5rXalT3Hk8sbUagEVxqnR6IvP0YYEY8rROtzwVsSzJfOVHx_Tyr" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="bg-surface-container-lowest py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center"
        >
          <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-on-surface font-semibold">
            Two brands. <span className="text-primary">One commitment</span> to excellence.
          </h2>
        </motion.div>
      </section>
    </>
  );
}
