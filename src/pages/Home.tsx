import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

export default function Home() {
  const { language, t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

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

      {/* Featured Products Carousel */}
      <section className="py-20 bg-surface-container-lowest border-b border-border-muted overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 flex items-end justify-between">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline-xl md:text-5xl text-on-surface font-semibold mb-4"
            >
              {language === 'fr' ? 'Nos Solutions ' : 'Featured '}
              <span className="text-primary">{language === 'fr' ? 'Phares' : 'Products'}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body-lg text-on-surface-variant max-w-xl"
            >
              {language === 'fr' 
                ? 'Faites glisser pour découvrir nos technologies adhésives et emballages de qualité.' 
                : 'Swipe to explore our premium adhesive technologies and food packaging solutions.'}
            </motion.p>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-primary hover:underline font-label-md">
            {language === 'fr' ? 'Voir tout' : 'View all'} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <motion.div 
          ref={carouselRef} 
          className="cursor-grab active:cursor-grabbing overflow-hidden px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6 md:gap-8"
          >
            {products.slice(0, 6).map((product, idx) => (
              <motion.div 
                key={product.id}
                className="min-w-[280px] md:min-w-[350px] bg-surface rounded-2xl overflow-hidden border border-border-muted shadow-sm hover:shadow-xl transition-shadow flex flex-col group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <div className="aspect-[4/3] bg-surface relative overflow-hidden flex items-center justify-center border-b border-border-muted p-6">
                  <img 
                    src={product.image} 
                    alt={language === 'fr' ? product.fr.name : product.en.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    draggable="false"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm ${
                      product.brand === 'ADPRO'
                        ? 'bg-primary/5 text-primary border-primary/20'
                        : 'bg-secondary/5 text-secondary border-secondary/20'
                    }`}>
                      {product.brand}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {language === 'fr' ? product.fr.name : product.en.name}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                      {language === 'fr' ? product.fr.description : product.en.description}
                    </p>
                  </div>
                  <Link to={`/products?category=${product.category}`} className="text-primary font-label-sm hover:underline mt-auto">
                    {language === 'fr' ? 'Découvrir' : 'Discover'} →
                  </Link>
                </div>
              </motion.div>
            ))}
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
