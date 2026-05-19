import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import aboutHero from '../assets/about_hero.png';

export default function About() {
  const { t } = useLanguage();
  const [showMap, setShowMap] = useState<Record<string, boolean>>({});

  const toggleMap = (siteId: string) => {
    setShowMap(prev => ({
      ...prev,
      [siteId]: !prev[siteId]
    }));
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
      <section className="py-24 bg-surface-container-lowest border-b border-border-muted overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
               <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-6 border border-border-muted shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">workspace_premium</span>
                {t('about.isoBadge')}
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-display-lg text-display-lg text-on-surface mb-6">
                {t('about.title')}
                <span className="text-primary">{t('about.titleHighlight')}</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                {t('about.subtitle')}
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, clipPath: 'inset(10% 10% 10% 10% round 10px)' }}
              animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0% round 10px)' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden border border-border-muted shadow-subtle aspect-[4/3] group"
            >
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                alt="Tape Rolls" className="w-full h-full object-cover" src={aboutHero} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Mission Card */}
            <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="bg-surface-container-lowest p-10 rounded-2xl border border-border-muted shadow-subtle flex flex-col items-start gap-6 hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">flag</span>
               </div>
               <h3 className="font-headline-xl text-headline-xl text-on-surface">{t('about.missionTitle')}</h3>
               <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                 {t('about.missionDesc')}
               </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="bg-surface-container-lowest p-10 rounded-2xl border border-border-muted shadow-subtle flex flex-col items-start gap-6 hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">visibility</span>
               </div>
               <h3 className="font-headline-xl text-headline-xl text-on-surface">{t('about.visionTitle')}</h3>
               <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                 {t('about.visionDesc')}
               </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sites Section */}
      <section className="py-24 bg-surface-container-lowest border-t border-border-muted">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display-lg text-display-lg text-on-surface mb-6">{t('about.sitesTitle')}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t('about.sitesSubtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Sfax HQ */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.3 } }} className="group rounded-xl overflow-hidden border border-border-muted shadow-subtle bg-surface hover:shadow-lg transition-shadow">
               <div className="aspect-[4/3] bg-surface-variant overflow-hidden relative">
                   {showMap['sfax'] ? (
                     <iframe
                       src="https://maps.google.com/maps?q=tunise%20tape%20sfax&t=&z=14&ie=UTF8&iwloc=&output=embed"
                       className="w-full h-full border-0"
                       allowFullScreen
                       loading="lazy"
                       title="Sfax HQ Map"
                     ></iframe>
                  ) : (
                      <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80" alt="Sfax Manufacturing & Headquarters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-border-muted z-10">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                     {t('about.sfaxBadge')}
                  </div>
                  <button
                    onClick={() => toggleMap('sfax')}
                    className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 bg-surface-container-lowest/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-label-sm font-label-sm text-on-surface border border-border-muted shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-95"
                  >
                     <span className="material-symbols-outlined text-[16px]">
                       {showMap['sfax'] ? 'photo' : 'map'}
                     </span>
                     {showMap['sfax'] ? t('about.viewPhoto') : t('about.viewMap')}
                  </button>
               </div>
               <div className="p-6">
                 <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{t('about.sfaxTitle')}</h3>
                 <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 font-normal min-h-[64px]">
                   {t('about.sfaxDesc')}
                 </p>
                 <a 
                   href="https://maps.google.com/?q=tunise+tape+sfax" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label-sm text-label-sm transition-colors"
                 >
                   <span className="material-symbols-outlined text-[16px]">directions</span>
                   Directions (Google Maps)
                 </a>
               </div>
            </motion.div>

            {/* Sfax Poudriere */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.3 } }} className="group rounded-xl overflow-hidden border border-border-muted shadow-subtle bg-surface hover:shadow-lg transition-shadow">
               <div className="aspect-[4/3] bg-surface-variant overflow-hidden relative">
                   {showMap['sfax_poudriere'] ? (
                     <iframe
                       src="https://maps.google.com/maps?q=tunisia%20tape%20manufactuer&t=&z=14&ie=UTF8&iwloc=&output=embed"
                       className="w-full h-full border-0"
                       allowFullScreen
                       loading="lazy"
                       title="Sfax Poudriere Map"
                     ></iframe>
                  ) : (
                      <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" alt="Sfax Poudriere Commercial Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-border-muted z-10">
                     <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                     {t('about.sfaxPoudriereBadge')}
                  </div>
                  <button
                    onClick={() => toggleMap('sfax_poudriere')}
                    className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 bg-surface-container-lowest/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-label-sm font-label-sm text-on-surface border border-border-muted shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-95"
                  >
                     <span className="material-symbols-outlined text-[16px]">
                       {showMap['sfax_poudriere'] ? 'photo' : 'map'}
                     </span>
                     {showMap['sfax_poudriere'] ? t('about.viewPhoto') : t('about.viewMap')}
                  </button>
               </div>
               <div className="p-6">
                 <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{t('about.sfaxPoudriereTitle')}</h3>
                 <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 font-normal min-h-[64px]">
                   {t('about.sfaxPoudriereDesc')}
                 </p>
                 <a 
                   href="https://maps.google.com/?q=tunisia+tape+manufactuer" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label-sm text-label-sm transition-colors"
                 >
                   <span className="material-symbols-outlined text-[16px]">directions</span>
                   Directions (Google Maps)
                 </a>
               </div>
            </motion.div>

            {/* Tunis */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.3 } }} className="group rounded-xl overflow-hidden border border-border-muted shadow-subtle bg-surface hover:shadow-lg transition-shadow">
               <div className="aspect-[4/3] bg-surface-variant overflow-hidden relative">
                   {showMap['tunis'] ? (
                     <iframe
                       src="https://maps.google.com/maps?q=tunisa%20tape%20tunis&t=&z=14&ie=UTF8&iwloc=&output=embed"
                       className="w-full h-full border-0"
                       allowFullScreen
                       loading="lazy"
                       title="Tunis Branch Map"
                     ></iframe>
                  ) : (
                      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Tunis Branch Commercial Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-border-muted z-10">
                     <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                     {t('about.tunisBadge')}
                  </div>
                  <button
                    onClick={() => toggleMap('tunis')}
                    className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 bg-surface-container-lowest/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-label-sm font-label-sm text-on-surface border border-border-muted shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-95"
                  >
                     <span className="material-symbols-outlined text-[16px]">
                       {showMap['tunis'] ? 'photo' : 'map'}
                     </span>
                     {showMap['tunis'] ? t('about.viewPhoto') : t('about.viewMap')}
                  </button>
               </div>
               <div className="p-6">
                 <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{t('about.tunisTitle')}</h3>
                 <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 font-normal min-h-[64px]">
                   {t('about.tunisDesc')}
                 </p>
                 <a 
                   href="https://maps.google.com/?q=tunisa+tape+tunis" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label-sm text-label-sm transition-colors"
                 >
                   <span className="material-symbols-outlined text-[16px]">directions</span>
                   Directions (Google Maps)
                 </a>
               </div>
            </motion.div>

            {/* Msaken */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5, transition: { duration: 0.3 } }} className="group rounded-xl overflow-hidden border border-border-muted shadow-subtle bg-surface hover:shadow-lg transition-shadow">
               <div className="aspect-[4/3] bg-surface-variant overflow-hidden relative">
                   {showMap['msaken'] ? (
                     <iframe
                       src="https://maps.google.com/maps?q=tunisia%20tape%20mseken&t=&z=14&ie=UTF8&iwloc=&output=embed"
                       className="w-full h-full border-0"
                       allowFullScreen
                       loading="lazy"
                       title="Msaken Facility Map"
                     ></iframe>
                  ) : (
                      <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" alt="Msaken Facility Logistics Warehouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-border-muted z-10">
                     <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                     {t('about.msakenBadge')}
                  </div>
                  <button
                    onClick={() => toggleMap('msaken')}
                    className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 bg-surface-container-lowest/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-label-sm font-label-sm text-on-surface border border-border-muted shadow-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-95"
                  >
                     <span className="material-symbols-outlined text-[16px]">
                       {showMap['msaken'] ? 'photo' : 'map'}
                     </span>
                     {showMap['msaken'] ? t('about.viewPhoto') : t('about.viewMap')}
                  </button>
               </div>
               <div className="p-6">
                 <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{t('about.msakenTitle')}</h3>
                 <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 font-normal min-h-[64px]">
                   {t('about.msakenDesc')}
                 </p>
                 <a 
                   href="https://maps.google.com/?q=tunisia+tape+mseken" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label-sm text-label-sm transition-colors"
                 >
                   <span className="material-symbols-outlined text-[16px]">directions</span>
                   Directions (Google Maps)
                 </a>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
