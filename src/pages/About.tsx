import { motion } from 'motion/react';

export default function About() {
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
                ISO 9001 Certified Excellence
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-display-lg text-display-lg text-on-surface mb-6">
                Our Legacy & <span className="text-primary">Mission</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                For over 30 years, Tunisie Tape has engineered premium industrial adhesive solutions, building a foundation of high-trust reliability and authoritative innovation across global markets.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-lg overflow-hidden border border-border-muted shadow-subtle aspect-[4/3]"
            >
              <img alt="Tape Rolls" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHGkaQvrSJiFghEHNEUMTYgHwkBsV3wee1KdEXpTIN2N51EcbtWHl6UH-y98XSrU7mccvSbq5s08auTEaM5kbbGA8o7hVVOhGyrJSIGcH4uEkUXtTA2kjS_NLxMulbogKd2zJxQU2RJ8AKjiEIG4J4G6bst8z_l27NWeS8wNlf94-RmDtgp9c1tRMog1WIMYMarkGVL5nWbF-lpWfquK4DCb5GsB69LBfG09Sw0tJ0mg2zHtjT8H0FwE5Ik_yYUrUzh3_0UO_7Mfyp" />
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
            <motion.div variants={fadeInUp} className="bg-surface-container-lowest p-10 rounded-2xl border border-border-muted shadow-subtle flex flex-col items-start gap-6 hover:shadow-md transition-shadow">
               <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">flag</span>
               </div>
               <h3 className="font-headline-xl text-headline-xl text-on-surface">Notre Mission</h3>
               <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                 Fournir des solutions adhésives et d'emballage de haute qualité, répondant aux exigences rigoureuses de l'industrie grâce à l'innovation, l'expertise et un engagement inébranlable envers la satisfaction client.
               </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={fadeInUp} className="bg-surface-container-lowest p-10 rounded-2xl border border-border-muted shadow-subtle flex flex-col items-start gap-6 hover:shadow-md transition-shadow">
               <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">visibility</span>
               </div>
               <h3 className="font-headline-xl text-headline-xl text-on-surface">Notre Vision</h3>
               <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                 Devenir le leader incontesté et la référence mondiale en matière de solutions d'emballage industriel et alimentaire, en repoussant constamment les limites de la performance et de la durabilité.
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
            <h2 className="font-display-lg text-display-lg text-on-surface mb-6">Nos Sites</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Une présence stratégique pour répondre efficacement à vos besoins à travers tout le territoire et à l'international.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Sfax */}
            <motion.div variants={fadeInUp} className="group rounded-xl overflow-hidden border border-border-muted shadow-subtle bg-surface">
              <div className="aspect-[4/3] bg-surface-variant overflow-hidden relative">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeL9FDEh3BvheWFuZEuVmxgrkQsajD8s-9W_B-qO-RtFZJr6G6busG3K8lolw9yQYkZ26f8_4CXLyo9rA5w1_6rgiuY4M8noYzupCsbByP0vo-dnhLzUFElUw2lVhGjN5GXks9G9pV8L5lucnD4Y_fzUZ-EXDG08i9Dki6NhnEC7rz4p9z0mBR2ypy77sln2YS3EvpiuuvXLHI6cUDmP4r2UQfD5rXalT3Hk8sbUagEVxqnR6IvP0YYEY8rROtzwVsSzJfOVHx_Tyr" alt="Sfax Manufacturing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-border-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Siège & Production
                 </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Sfax</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Notre centre d'opérations principal abritant la fabrication de pointe, la recherche et le contrôle qualité.
                </p>
              </div>
            </motion.div>

            {/* Tunis */}
            <motion.div variants={fadeInUp} className="group rounded-xl overflow-hidden border border-border-muted shadow-subtle bg-surface">
              <div className="aspect-[4/3] bg-surface-variant overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1577700588691-628d68962c0b" alt="Tunis Branch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 blur-[2px] brightness-75" />
                 <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-border-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Dépôt Commercial
                 </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Tunis</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Carrefour de distribution de la capitale, assurant une logistique rapide pour nos partenaires nord-tunisiens.
                </p>
              </div>
            </motion.div>

            {/* Msaken */}
            <motion.div variants={fadeInUp} className="group rounded-xl overflow-hidden border border-border-muted shadow-subtle bg-surface">
              <div className="aspect-[4/3] bg-surface-variant overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4" alt="Msaken Facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 blur-[2px] brightness-75" />
                 <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-border-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Dépôt Commercial
                 </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Msaken</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Plateforme logistique centrale pour soutenir notre clientèle industrielle dans le sahel tunisien.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
