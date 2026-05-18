import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

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
      <section className="relative py-24 md:py-32 bg-pattern-dot overflow-hidden border-b border-border-muted/50">
        <motion.div 
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-8 border border-border-muted shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            {t('home.heroBadge')}
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight max-w-4xl mx-auto mb-6">
            {t('home.heroTitleText1')}
            <span className="text-primary">{t('home.heroTitleHighlight')}</span>
            {t('home.heroTitleText2')}
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            {t('home.heroSubtitle')}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link className="inline-flex justify-center w-full items-center bg-primary text-on-primary px-8 py-3.5 rounded-lg font-label-md text-label-md transition-colors duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-sm hover:shadow-md" to="/products">
                {t('home.exploreBtn')}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link className="inline-flex justify-center w-full items-center bg-surface border border-border-muted text-on-surface hover:border-primary hover:text-primary px-8 py-3.5 rounded-lg font-label-md text-label-md transition-colors duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-sm hover:shadow-md" to="/about">
                {t('home.legacyBtn')}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mini About Banner */}
      <section className="bg-surface py-20 border-b border-border-muted">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
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
          viewport={{ once: true, margin: "-100px" }}
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
