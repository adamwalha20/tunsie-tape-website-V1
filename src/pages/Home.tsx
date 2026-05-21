import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

const FEATURED_PRODUCT_IDS = ['adpro-standard', 'twist-foil', 'adpro-printed', 'twist-baking'];

export default function Home() {
  const { t, language } = useLanguage();
  
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const featuredProducts = products.filter(p => FEATURED_PRODUCT_IDS.includes(p.id));

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) {
      newIndex = featuredProducts.length - 1;
    } else if (newIndex >= featuredProducts.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const currentProduct = featuredProducts[currentIndex];
  const prodData = language === 'fr' ? currentProduct.fr : currentProduct.en;

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

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
      {/* Full Screen Swipeable Hero Carousel */}
      <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={currentProduct.image} 
                alt={prodData.name} 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            
            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none" />

            {/* Content Layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
              <div className="max-w-4xl text-center text-white mt-16 md:mt-24 pointer-events-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 font-label-sm uppercase tracking-wider mb-6 shadow-lg"
                >
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${currentProduct.brand === 'ADPRO' ? 'bg-blue-400' : 'bg-red-500'}`}></span>
                  {currentProduct.brand} • {prodData.badge}
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-display-lg-mobile md:font-display-lg text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
                >
                  {prodData.name}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="font-body-lg text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed italic"
                >
                  "{prodData.tagline}"
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Link 
                    to={`/products?category=${currentProduct.category}`} 
                    className={`inline-flex justify-center items-center px-10 py-4 rounded-xl font-label-md transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                      currentProduct.brand === 'ADPRO' 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/50' 
                        : 'bg-red-600 hover:bg-red-500 text-white shadow-red-900/50'
                    }`}
                  >
                    {language === 'fr' ? 'Découvrir la Gamme' : 'Explore Range'}
                  </Link>
                  <Link 
                    to="/about" 
                    className="inline-flex justify-center items-center px-10 py-4 rounded-xl font-label-md bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    {t('home.legacyBtn')}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe Indicators & Pagination */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-6 z-10">
          <button 
            className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors shadow-lg cursor-pointer"
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          
          <div className="flex gap-3">
            {featuredProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors shadow-lg cursor-pointer"
            onClick={() => paginate(1)}
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
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
