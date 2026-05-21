import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

export default function Home() {
  const { language, t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);

  const heroProducts = products.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroProducts.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-pattern-dot overflow-hidden border-b border-border-muted/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="text-left md:text-left text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-6 border border-border-muted shadow-sm mx-auto md:mx-0">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {t('home.heroBadge')}
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-6">
                {t('home.heroTitleText1')}
                <span className="text-primary">{t('home.heroTitleHighlight')}</span>
                {t('home.heroTitleText2')}
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 mx-auto md:mx-0">
                {t('home.heroSubtitle')}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link className="inline-flex justify-center w-full sm:w-auto items-center bg-primary text-on-primary px-8 py-3.5 rounded-lg font-label-md text-label-md transition-colors duration-300 shadow-sm hover:shadow-md" to="/products">
                    {t('home.exploreBtn')}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link className="inline-flex justify-center w-full sm:w-auto items-center bg-surface border border-border-muted text-on-surface hover:border-primary hover:text-primary px-8 py-3.5 rounded-lg font-label-md text-label-md transition-colors duration-300 shadow-sm hover:shadow-md" to="/about">
                    {t('home.legacyBtn')}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Rotating Product Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-square md:aspect-[4/3] max-w-[500px] mx-auto lg:mx-0 lg:ml-auto"
              style={{ perspective: 1000 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, y: 30, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 10, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full bg-surface-container-lowest/80 backdrop-blur-md rounded-3xl border border-border-muted shadow-2xl overflow-hidden flex flex-col group"
                >
                  <div className="flex-grow relative flex items-center justify-center p-8 bg-surface-container/50">
                    <img 
                      src={heroProducts[currentIdx].image} 
                      alt={language === 'fr' ? heroProducts[currentIdx].fr.name : heroProducts[currentIdx].en.name} 
                      className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest border shadow-sm ${
                        heroProducts[currentIdx].brand === 'ADPRO'
                          ? 'bg-primary/10 text-primary border-primary/20'
                          : 'bg-secondary/10 text-secondary border-secondary/20'
                      }`}>
                        {heroProducts[currentIdx].brand}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-surface border-t border-border-muted flex justify-between items-center">
                    <div>
                      <h3 className="font-headline-md text-on-surface mb-1">
                        {language === 'fr' ? heroProducts[currentIdx].fr.name : heroProducts[currentIdx].en.name}
                      </h3>
                      <p className="font-body-sm text-on-surface-variant max-w-[250px] truncate">
                        {language === 'fr' ? heroProducts[currentIdx].fr.tagline : heroProducts[currentIdx].en.tagline}
                      </p>
                    </div>
                    <Link to={`/products?category=${heroProducts[currentIdx].category}`} className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mini About Banner */}
      <section className="bg-surface py-20 border-b border-border-muted">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-headline-xl text-headline-xl text-on-surface mb-6">
                {t('home.precisionTitle')}
              </motion.h2>
              <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                {t('home.precisionDesc')}
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/about" className="text-primary font-label-md text-label-md hover:underline flex items-center gap-2">
                  {t('home.missionLink')} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, clipPath: 'inset(10% 10% 10% 10% round 10px)' }}
              whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0% round 10px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden border border-border-muted shadow-subtle aspect-[4/3] group"
            >
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                alt="Manufacturing Facility" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Banner */}
      <section className="bg-surface-container-lowest py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center"
        >
          <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-on-surface font-semibold">
            {t('home.commitmentTitle1')}
            <span className="text-primary">{t('home.commitmentHighlight')}</span>
            {t('home.commitmentTitle2')}
          </h2>
        </motion.div>
      </section>
    </>
  );
}
