import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Brands() {
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
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-6 border border-border-muted shadow-sm uppercase tracking-wider">
              Our Portfolio
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display-lg text-display-lg text-on-surface mb-6">
              Brands & <span className="text-primary">Products</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive range of industrial and consumer packaging solutions, engineered for maximum reliability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ADPRO SECTION */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display-lg text-display-lg text-on-surface">ADPRO</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Industrial Adhesive Solutions</p>
            </div>
            <Link to="/contact" className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1 group">
              View full catalog <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Masking Tapes */}
            <motion.div variants={fadeInUp} className="group rounded-2xl overflow-hidden border border-border-muted shadow-subtle bg-surface-container-lowest flex flex-col hover:shadow-md transition-all">
              <div className="aspect-[4/3] bg-surface relative overflow-hidden p-6 flex items-center justify-center">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHGkaQvrSJiFghEHNEUMTYgHwkBsV3wee1KdEXpTIN2N51EcbtWHl6UH-y98XSrU7mccvSbq5s08auTEaM5kbbGA8o7hVVOhGyrJSIGcH4uEkUXtTA2kjS_NLxMulbogKd2zJxQU2RJ8AKjiEIG4J4G6bst8z_l27NWeS8wNlf94-RmDtgp9c1tRMog1WIMYMarkGVL5nWbF-lpWfquK4DCb5GsB69LBfG09Sw0tJ0mg2zHtjT8H0FwE5Ik_yYUrUzh3_0UO_7Mfyp" alt="Masking Tapes" className="w-[80%] h-[80%] object-cover rounded-md group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute top-4 left-4 bg-primary/10 text-primary px-3 py-1 rounded-md text-label-sm font-label-sm border border-primary/20">
                    Industrial
                 </div>
              </div>
              <div className="p-6 border-t border-border-muted flex-grow">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Masking Tapes</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Precision masking for painting and industrial surface protection.</p>
              </div>
            </motion.div>

            {/* Acrylic Tapes */}
            <motion.div variants={fadeInUp} className="group rounded-2xl overflow-hidden border border-border-muted shadow-subtle bg-surface-container-lowest flex flex-col hover:shadow-md transition-all">
              <div className="aspect-[4/3] bg-surface relative overflow-hidden p-6 flex items-center justify-center">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHGkaQvrSJiFghEHNEUMTYgHwkBsV3wee1KdEXpTIN2N51EcbtWHl6UH-y98XSrU7mccvSbq5s08auTEaM5kbbGA8o7hVVOhGyrJSIGcH4uEkUXtTA2kjS_NLxMulbogKd2zJxQU2RJ8AKjiEIG4J4G6bst8z_l27NWeS8wNlf94-RmDtgp9c1tRMog1WIMYMarkGVL5nWbF-lpWfquK4DCb5GsB69LBfG09Sw0tJ0mg2zHtjT8H0FwE5Ik_yYUrUzh3_0UO_7Mfyp" alt="Acrylic & Solvent Tapes" className="w-[80%] h-[80%] object-cover rounded-md group-hover:scale-105 transition-transform duration-500 hue-rotate-15" />
                 <div className="absolute top-4 left-4 bg-primary/10 text-primary px-3 py-1 rounded-md text-label-sm font-label-sm border border-primary/20">
                    Packaging
                 </div>
              </div>
              <div className="p-6 border-t border-border-muted flex-grow">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Acrylic & Solvent Tapes</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Heavy-duty carton sealing with superior shear strength.</p>
              </div>
            </motion.div>

            {/* Specialty Films */}
            <motion.div variants={fadeInUp} className="group rounded-2xl overflow-hidden border border-border-muted shadow-subtle bg-surface-container-lowest flex flex-col hover:shadow-md transition-all">
               <div className="aspect-[4/3] bg-surface relative overflow-hidden p-6 flex items-center justify-center">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHGkaQvrSJiFghEHNEUMTYgHwkBsV3wee1KdEXpTIN2N51EcbtWHl6UH-y98XSrU7mccvSbq5s08auTEaM5kbbGA8o7hVVOhGyrJSIGcH4uEkUXtTA2kjS_NLxMulbogKd2zJxQU2RJ8AKjiEIG4J4G6bst8z_l27NWeS8wNlf94-RmDtgp9c1tRMog1WIMYMarkGVL5nWbF-lpWfquK4DCb5GsB69LBfG09Sw0tJ0mg2zHtjT8H0FwE5Ik_yYUrUzh3_0UO_7Mfyp" alt="Specialty Films" className="w-[80%] h-[80%] object-cover rounded-md group-hover:scale-105 transition-transform duration-500 grayscale opacity-80" />
                 <div className="absolute top-4 left-4 bg-primary/10 text-primary px-3 py-1 rounded-md text-label-sm font-label-sm border border-primary/20">
                    New
                 </div>
               </div>
              <div className="p-6 border-t border-border-muted flex-grow">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Specialty Films</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Advanced barrier films for electronics and automotive.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TWIST SECTION */}
      <section className="py-24 bg-surface-container-lowest border-t border-border-muted">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display-lg text-display-lg text-on-surface">twist</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Food Packaging Solutions</p>
            </div>
            <Link to="/contact" className="text-secondary font-label-md text-label-md hover:underline flex items-center gap-1 group">
              Explore collection <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Big Feature: Aluminum Foil */}
            <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-2 group rounded-2xl overflow-hidden border border-border-muted shadow-subtle bg-secondary flex flex-col md:flex-row hover:shadow-lg transition-all relative">
              <div className="absolute top-6 left-6 bg-surface-container-lowest text-secondary px-3 py-1 rounded-md text-label-sm font-label-sm uppercase tracking-wider z-10 shadow-sm">
                Bestseller
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center relative z-10 text-on-primary">
                <h3 className="font-headline-xl text-headline-xl mb-4">Premium Aluminum Foil</h3>
                <p className="font-body-lg text-body-lg mb-8 opacity-90">
                  Exceptional thermal retention for catering, baking, and professional gastronomy.
                </p>
                <div>
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-surface text-secondary px-5 py-2.5 rounded-lg font-label-md text-label-md hover:bg-surface-dim transition-colors shadow-sm">
                    Request Samples
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 min-h-[300px] bg-surface relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq4q9vCPmRxMRk5b-LmtaqaMhqadcN0lKNa_FK5qaUxqoowex3Kf1NIhcXSRMYst-WrxG-aIpqxjZcrz1mYCGkI4moILi3H3AVip6_Pq67rtGl-aPAvkDrTbWukH0dDSNMa4GQjwMI2R_hvz6jxl_4aUMq6vl0rJF4PtMPmgeljEyfyxCB9i49Z0xHwLtTJ6mYTHgIBgzun6jABeQOd0l_2yVhlTiJh22ItDicsUhRZ_Xe3mYhTqvMYElOu8xUZXaMk2kYOe6sVqBY" alt="Aluminum Foil" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>

            {/* Stacked Right: Cling Film & Baking Paper */}
            <div className="grid grid-rows-2 gap-8 lg:col-span-1 md:col-span-2">
               {/* Cling Film */}
               <motion.div variants={fadeInUp} className="group rounded-2xl overflow-hidden border border-border-muted shadow-subtle bg-surface flex flex-col sm:flex-row lg:flex-col hover:shadow-md transition-all">
                  <div className="sm:w-1/2 lg:w-full sm:h-auto lg:h-[180px] bg-surface-container relative overflow-hidden p-6 flex justify-center items-center">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq4q9vCPmRxMRk5b-LmtaqaMhqadcN0lKNa_FK5qaUxqoowex3Kf1NIhcXSRMYst-WrxG-aIpqxjZcrz1mYCGkI4moILi3H3AVip6_Pq67rtGl-aPAvkDrTbWukH0dDSNMa4GQjwMI2R_hvz6jxl_4aUMq6vl0rJF4PtMPmgeljEyfyxCB9i49Z0xHwLtTJ6mYTHgIBgzun6jABeQOd0l_2yVhlTiJh22ItDicsUhRZ_Xe3mYhTqvMYElOu8xUZXaMk2kYOe6sVqBY" alt="Cling Film" className="w-[80%] h-[80%] object-cover rounded-md group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  </div>
                  <div className="p-6 border-t border-border-muted sm:border-t-0 sm:border-l lg:border-l-0 lg:border-t flex flex-col justify-center">
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Cling Film</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Superior stretch and clarity for preserving freshness.</p>
                  </div>
               </motion.div>

               {/* Baking Paper */}
               <motion.div variants={fadeInUp} className="group rounded-2xl overflow-hidden border border-border-muted shadow-subtle bg-surface flex flex-col sm:flex-row lg:flex-col hover:shadow-md transition-all">
                  <div className="sm:w-1/2 lg:w-full sm:h-auto lg:h-[180px] bg-surface-container relative overflow-hidden p-6 flex justify-center items-center">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq4q9vCPmRxMRk5b-LmtaqaMhqadcN0lKNa_FK5qaUxqoowex3Kf1NIhcXSRMYst-WrxG-aIpqxjZcrz1mYCGkI4moILi3H3AVip6_Pq67rtGl-aPAvkDrTbWukH0dDSNMa4GQjwMI2R_hvz6jxl_4aUMq6vl0rJF4PtMPmgeljEyfyxCB9i49Z0xHwLtTJ6mYTHgIBgzun6jABeQOd0l_2yVhlTiJh22ItDicsUhRZ_Xe3mYhTqvMYElOu8xUZXaMk2kYOe6sVqBY" alt="Baking Paper" className="w-[80%] h-[80%] object-cover rounded-md group-hover:scale-105 transition-transform duration-500 sepia-[0.3]" />
                  </div>
                  <div className="p-6 border-t border-border-muted sm:border-t-0 sm:border-l lg:border-l-0 lg:border-t flex flex-col justify-center">
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Baking Paper</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Professional grade non-stick coating for bakeries.</p>
                  </div>
               </motion.div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
