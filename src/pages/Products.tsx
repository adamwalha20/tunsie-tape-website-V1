import { useState, useMemo, useEffect, CSSProperties } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

import { products, type Product } from '../data/products';
import { adproMasterImg, twistMasterImg } from '../data/products';

function ProductVisual({ visualType }: { visualType: string }) {
  // Renders a high-end styled CSS/SVG graphic illustrating the product
  switch (visualType) {
    case 'standard-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#d97706" strokeWidth="12" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="22" fill="#edeeef" stroke="#c4c5d5" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
          <path d="M70 20 L80 15 M78 30 L88 25" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'printed-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#00288e" strokeWidth="12" />
          <circle cx="50" cy="50" r="32" stroke="#ffffff" strokeWidth="4" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="22" fill="#edeeef" stroke="#c4c5d5" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
          <text x="50" y="53" textAnchor="middle" fill="#00288e" fontSize="6" fontWeight="bold" fontFamily="sans-serif">ADPRO</text>
        </svg>
      );
    case 'double-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="34" stroke="#e1e3e4" strokeWidth="6" />
          <circle cx="50" cy="50" r="30" stroke="#bb0112" strokeWidth="2" />
          <circle cx="50" cy="50" r="26" stroke="#ffffff" strokeWidth="6" />
          <circle cx="50" cy="50" r="18" fill="#edeeef" stroke="#c4c5d5" strokeWidth="2" />
          <circle cx="50" cy="50" r="8" fill="#ffffff" />
        </svg>
      );
    case 'stretch-film':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <rect x="38" y="10" width="24" height="80" rx="3" fill="#e1e3e4" stroke="#c4c5d5" strokeWidth="2" />
          <rect x="34" y="20" width="32" height="60" rx="4" fill="#60a5fa" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />
          <path d="M34 30 C 45 35, 55 25, 66 30" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
          <path d="M34 50 C 45 55, 55 45, 66 50" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
          <path d="M34 70 C 45 75, 55 65, 66 70" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
        </svg>
      );
    case 'masking-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#fef08a" strokeWidth="12" strokeOpacity="0.8" />
          <circle cx="50" cy="50" r="22" fill="#fcf9e8" stroke="#eab308" strokeWidth="1" strokeDasharray="2 1" />
          <circle cx="50" cy="50" r="12" fill="#ffffff" stroke="#c4c5d5" strokeWidth="2" />
        </svg>
      );
    case 'insulating-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="45" cy="45" r="28" stroke="#111827" strokeWidth="8" />
          <circle cx="45" cy="45" r="20" fill="#edeeef" stroke="#c4c5d5" />
          <circle cx="55" cy="55" r="28" stroke="#ef4444" strokeWidth="8" strokeOpacity="0.9" />
          <circle cx="55" cy="55" r="20" fill="#edeeef" stroke="#c4c5d5" />
        </svg>
      );
    case 'floor-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#eab308" strokeWidth="12" />
          <circle cx="50" cy="50" r="32" stroke="#111827" strokeWidth="12" strokeDasharray="8 8" />
          <circle cx="50" cy="50" r="22" fill="#edeeef" stroke="#c4c5d5" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
        </svg>
      );
    case 'duct-tape':
      return (
        <svg className="w-24 h-24 text-primary" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="32" stroke="#9ca3af" strokeWidth="12" />
          <circle cx="50" cy="50" r="32" stroke="#4b5563" strokeWidth="1" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="22" fill="#374151" stroke="#1f2937" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#ffffff" />
        </svg>
      );
    case 'container-rect':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <path d="M15 35 L85 35 L75 75 L25 75 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
          <path d="M10 32 L90 32 L85 38 L15 38 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
          <line x1="30" y1="38" x2="33" y2="72" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="43" y1="38" x2="43" y2="72" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="57" y1="38" x2="57" y2="72" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="70" y1="38" x2="67" y2="72" stroke="#cbd5e1" strokeWidth="1.5" />
        </svg>
      );
    case 'container-circle':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="50" rx="38" ry="25" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" />
          <ellipse cx="50" cy="54" rx="30" ry="18" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M12 50 C12 65, 88 65, 88 50" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="30" y1="65" x2="50" y2="75" stroke="#94a3b8" strokeWidth="1" />
          <line x1="70" y1="65" x2="50" y2="75" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      );
    case 'container-compart':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <path d="M15 35 L85 35 L75 75 L25 75 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
          <path d="M10 32 L90 32 L85 38 L15 38 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
          <path d="M45 38 L45 72" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M45 55 L71 55" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'foil':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="38" width="80" height="24" rx="3" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
          <rect x="15" y="34" width="70" height="32" rx="4" fill="#9ca3af" fillOpacity="0.3" stroke="#d1d5db" strokeWidth="1.5" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.8" />
        </svg>
      );
    case 'cling-film':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="38" width="80" height="24" rx="3" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2" />
          <rect x="15" y="32" width="70" height="36" rx="4" fill="#3b82f6" fillOpacity="0.1" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
          <path d="M15 45 Q 50 35 85 45" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
        </svg>
      );
    case 'baking-paper':
      return (
        <svg className="w-24 h-24 text-secondary" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="38" width="80" height="24" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          <rect x="15" y="36" width="70" height="28" rx="2" fill="#fef9c3" stroke="#eab308" strokeWidth="1" />
          <path d="M10 50 L90 50" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      );
    default:
      return (
        <span className="material-symbols-outlined text-4xl text-primary">box</span>
      );
  }
}

export default function Products() {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedDimension, setSelectedDimension] = useState<string>('');

  const rawCategory = searchParams.get('category') || 'all';
  const selectedCategory = useMemo(() => {
    if (rawCategory === 'tapes') return 'adhesif';
    if (rawCategory === 'packaging') return 'alimentaire';
    return rawCategory;
  }, [rawCategory]);

  const setSelectedCategory = (category: string) => {
    setSearchParams((prev) => {
      prev.set('category', category);
      return prev;
    }, { replace: true });

    // Smooth scroll to interactive finder
    const element = document.getElementById('product-finder');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top on load, or to finder if category is preselected
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      const timer = setTimeout(() => {
        const element = document.getElementById('product-finder');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      const productData = language === 'fr' ? product.fr : product.en;
      const matchesSearch =
        productData.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        productData.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        productData.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        productData.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  // Set default dimension when modal opens
  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    const productData = language === 'fr' ? product.fr : product.en;
    const dimensions = productData.specifications['Available Dimensions'] || 
                       productData.specifications['Available Lengths'] ||
                       productData.specifications['Dimensions Disponibles'] ||
                       productData.specifications['Longueurs Disponibles'];
    if (dimensions && Array.isArray(dimensions)) {
      setSelectedDimension(dimensions[0]);
    } else if (dimensions && typeof dimensions === 'string') {
      setSelectedDimension(dimensions);
    } else {
      setSelectedDimension('');
    }
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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* HERO SECTION */}
      <section className="py-24 bg-surface-container-lowest border-b border-border-muted relative overflow-hidden bg-pattern-dot">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/20 pointer-events-none" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-6 border border-primary/10 shadow-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
              {t('products.badge')}
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display-lg text-display-lg text-on-surface mb-6 md:text-[56px]">
              {language === 'fr' ? (
                <>Nos <span className="text-primary">Produits</span></>
              ) : (
                <>Our <span className="text-primary">Products</span></>
              )}
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('products.subtitle')}
            </motion.p>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-6"
          >
            <div className="bg-surface border border-border-muted p-4 sm:p-5 rounded-2xl shadow-subtle hover:border-primary/20 transition-colors">
              <div className="font-display-lg text-headline-lg sm:text-headline-xl md:text-[20px] lg:text-[24px] xl:text-headline-xl text-primary mb-1">2</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('products.statBrands')}</div>
            </div>
            <div className="bg-surface border border-border-muted p-4 sm:p-5 rounded-2xl shadow-subtle hover:border-primary/20 transition-colors">
              <div className="font-display-lg text-headline-lg sm:text-headline-xl md:text-[20px] lg:text-[24px] xl:text-headline-xl text-primary mb-1">12+</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('products.statCategories')}</div>
            </div>
            <div className="bg-surface border border-border-muted p-4 sm:p-5 rounded-2xl shadow-subtle hover:border-primary/20 transition-colors">
              <div className="font-display-lg text-headline-lg sm:text-headline-xl md:text-[20px] lg:text-[24px] xl:text-headline-xl text-secondary mb-1">100%</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('products.statFood')}</div>
            </div>
            <div className="bg-surface border border-border-muted p-4 sm:p-5 rounded-2xl shadow-subtle hover:border-primary/20 transition-colors">
              <div className="font-display-lg text-headline-lg sm:text-headline-xl md:text-[20px] lg:text-[24px] xl:text-headline-xl text-primary mb-1">
                {language === 'fr' ? 'Personnalisé' : 'Custom'}
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('products.statPrinting')}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRAND MASTER PRESENTATION MODULES */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          
          {/* ADPRO Master Module */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-surface-container-lowest border border-border-muted rounded-3xl overflow-hidden shadow-subtle grid md:grid-cols-2 gap-0"
          >
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-primary font-label-md text-label-md uppercase tracking-wider mb-2">
                {language === 'fr' ? 'Gamme Haute Performance' : 'High Performance Range'}
              </div>
              <h2 className="font-display-lg text-headline-xl text-on-surface mb-4">ADPRO</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('products.adproDesc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary/5 text-primary text-[12px] font-medium px-3 py-1 rounded-full border border-primary/10">Acrylic, Solvent & Hotmelt</span>
                <span className="bg-primary/5 text-primary text-[12px] font-medium px-3 py-1 rounded-full border border-primary/10">Custom Printing</span>
                <span className="bg-primary/5 text-primary text-[12px] font-medium px-3 py-1 rounded-full border border-primary/10">5S Standards</span>
              </div>
              <button 
                onClick={() => setSelectedCategory('adhesif')} 
                className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:underline text-left self-start group cursor-pointer"
              >
                {language === 'fr' ? 'Découvrir nos Rubans Adhésifs' : 'Discover our Adhesive Tapes'} 
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="relative min-h-[280px] bg-surface-container overflow-hidden group">
              <img 
                src={adproMasterImg} 
                alt="ADPRO Industrial Tapes" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-label-sm font-label-sm uppercase tracking-wider opacity-85">
                  {language === 'fr' ? 'Excellence Industrielle' : 'Manufacturing Excellence'}
                </p>
                <h4 className="font-headline-lg text-headline-lg">
                  {language === 'fr' ? 'Production de Pointe' : 'State-of-the-Art Production'}
                </h4>
              </div>
            </div>
          </motion.div>
 
          {/* twist Master Module */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-surface-container-lowest border border-border-muted rounded-3xl overflow-hidden shadow-subtle grid md:grid-cols-2 gap-0"
          >
            <div className="relative min-h-[280px] bg-surface-container overflow-hidden group order-2 md:order-1">
              <img 
                src={twistMasterImg} 
                alt="twist Food Packaging" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-label-sm font-label-sm uppercase tracking-wider opacity-85">
                  {language === 'fr' ? 'Matériaux Alimentaires Sûrs' : 'Food Safe Materials'}
                </p>
                <h4 className="font-headline-lg text-headline-lg">
                  {language === 'fr' ? 'Fraîcheur Longue Durée' : 'Fresh Lock Technology'}
                </h4>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
              <div className="text-secondary font-label-md text-label-md uppercase tracking-wider mb-2">
                {language === 'fr' ? 'Gamme Qualité Alimentaire' : 'Premium Food-Grade Range'}
              </div>
              <h2 className="font-display-lg text-headline-xl text-on-surface mb-4">
                {language === 'fr' ? 'Restauration & Cuisine' : 'Food Service & Kitchen'}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t('products.foodServiceDesc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-secondary/5 text-secondary text-[12px] font-medium px-3 py-1 rounded-full border border-secondary/10">100% Recyclable Foil</span>
                <span className="bg-secondary/5 text-secondary text-[12px] font-medium px-3 py-1 rounded-full border border-secondary/10">Double-Sided Silicone</span>
                <span className="bg-secondary/5 text-secondary text-[12px] font-medium px-3 py-1 rounded-full border border-secondary/10">Superior Elasticity</span>
              </div>
              <button 
                onClick={() => setSelectedCategory('alimentaire')} 
                className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md hover:underline text-left self-start group cursor-pointer"
              >
                {language === 'fr' ? 'Découvrir nos Films & Emballages' : 'Discover our Films & Packaging'} 
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FILTER & INTERACTIVE SHOWCASE SECTION */}
      <section id="product-finder" className="py-20 bg-surface-container-low border-t border-border-muted">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-xl text-on-surface mb-4">
              {language === 'fr' ? 'Recherche de Produits Interactive' : 'Interactive Product Finder'}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mx-auto">
              {language === 'fr' 
                ? 'Utilisez nos onglets de catégorie et la recherche en temps réel pour explorer nos spécifications et tailles.' 
                : 'Use our live category tabs and real-time product search to explore exact specifications and sizes.'}
            </p>
          </div>

          {/* Interactive Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 bg-surface p-1.5 rounded-2xl border border-border-muted shadow-subtle w-full md:w-auto">
              {[
                { id: 'all', label: language === 'fr' ? 'Tout' : 'ALL', icon: 'grid_view' },
                { id: 'adhesif', label: language === 'fr' ? 'Emballage Adhésif' : 'Adhesive Packaging', icon: 'layers' },
                { id: 'alimentaire', label: language === 'fr' ? 'Emballage Alimentaire' : 'Alimentaire Packaging', icon: 'restaurant' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-label-sm text-label-sm transition-all duration-300 relative cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shadow-subtle rounded-2xl">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder={language === 'fr' ? 'Rechercher des produits et spécifications...' : 'Search products & specs...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-2xl bg-surface border border-border-muted text-on-surface focus:outline-none focus:border-primary transition-all font-body-sm text-body-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Grid Layout */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => {
                const productData = language === 'fr' ? product.fr : product.en;
                const isContainer = product.id.startsWith('barquette-');
                
                // Helper to get scale of container based on volume
                const getContainerScale = (id: string) => {
                  if (id.includes('rect-900') || id.includes('rond-940') || id.includes('compart-3')) return 1.0;
                  if (id.includes('rect-724') || id.includes('compart-2') || id.includes('rond-660')) return 0.85;
                  if (id.includes('rect-586') || id.includes('rect-530')) return 0.75;
                  if (id.includes('rect-385')) return 0.65;
                  if (id.includes('rond-110')) return 0.50;
                  return 1.0;
                };

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    key={product.id}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-border-muted shadow-subtle hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    {/* Card Image/Icon Header */}
                    <div className="aspect-[4/3] bg-surface relative overflow-hidden flex items-center justify-center border-b border-border-muted p-4">
                      {/* Product image with sleek zoom effect */}
                      {isContainer ? (
                        <img 
                          src={product.image} 
                          alt={productData.name} 
                          style={{ 
                            '--base-scale': getContainerScale(product.id),
                            transform: 'scale(calc(var(--base-scale) * var(--hover-factor, 1)))'
                          } as CSSProperties}
                          className="w-full h-full object-contain origin-center drop-shadow-sm transition-transform duration-500 group-hover:[--hover-factor:1.05]"
                        />
                      ) : (
                        <img 
                          src={product.image} 
                          alt={productData.name} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      
                      {/* Brand indicator bubble */}
                      <div className="absolute top-4 left-4 flex gap-1.5">
                        <span className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm ${
                          product.brand === 'ADPRO'
                            ? 'bg-primary/5 text-primary border-primary/20'
                            : 'bg-secondary/5 text-secondary border-secondary/20'
                        }`}>
                          {product.brand === 'ADPRO' ? 'ADPRO' : 'twist'}
                        </span>
                        <span className="bg-surface border border-border-muted text-on-surface-variant px-2.5 py-1 rounded-md text-[11px] font-medium shadow-sm">
                          {productData.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Information Body */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-1 group-hover:text-primary transition-colors">
                          {productData.name}
                        </h3>
                        <p className="italic text-[13px] font-medium text-on-surface-variant/80 mb-3 block">
                          "{productData.tagline}"
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-6">
                          {productData.description}
                        </p>
                      </div>

                      <div className="space-y-4 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {productData.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-[12px] text-on-surface-variant/90 bg-surface rounded-lg px-2.5 py-1 border border-border-muted">
                              <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => handleOpenProduct(product)}
                          className={`w-full py-3 rounded-xl font-label-sm text-label-sm transition-all duration-300 border flex items-center justify-center gap-2 group-hover:shadow-sm cursor-pointer ${
                            product.brand === 'ADPRO'
                              ? 'bg-primary/5 hover:bg-primary hover:text-white border-primary/20 text-primary'
                              : 'bg-secondary/5 hover:bg-secondary hover:text-white border-secondary/20 text-secondary'
                          }`}
                        >
                          {language === 'fr' ? 'Fiche Technique & Tailles' : 'Technical Details & Sizes'}
                          <span className="material-symbols-outlined text-[18px]">info</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Zero States Search result fallback */}
            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center"
              >
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-3xl">search_off</span>
                </div>
                <h3 className="font-headline-lg text-on-surface mb-2">
                  {language === 'fr' ? 'Aucun produit correspondant trouvé' : 'No matching products found'}
                </h3>
                <p className="font-body-sm text-on-surface-variant mb-6">
                  {language === 'fr' 
                    ? `Nous n'avons rien trouvé correspondant à "${searchQuery}". Veuillez vérifier l'orthographe.` 
                    : `We couldn't find anything matching "${searchQuery}". Please check your spelling or try standard categories.`}
                </p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="bg-primary text-white px-5 py-2.5 rounded-xl font-label-sm text-label-sm hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
                >
                  {language === 'fr' ? 'Réinitialiser la Recherche' : 'Reset Filter Search'}
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </section>

      {/* PRODUCT SPECIFICATION GLASSMORPHIC DETAIL MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface rounded-3xl border border-border-muted shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`p-6 md:p-8 text-white relative ${
                selectedProduct.brand === 'ADPRO' ? 'bg-primary' : 'bg-secondary'
              }`}>
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center border border-white/20 text-white cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>

                <div className="inline-block bg-white/10 text-white border border-white/20 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider mb-3">
                  {(selectedProduct.brand === 'ADPRO' ? 'ADPRO' : 'twist')} • {(language === 'fr' ? selectedProduct.fr : selectedProduct.en).badge}
                </div>
                <h2 className="font-display-lg text-headline-xl md:text-3xl mb-1">
                  {(language === 'fr' ? selectedProduct.fr : selectedProduct.en).name}
                </h2>
                <p className="italic text-[14px] opacity-90">
                  "{(language === 'fr' ? selectedProduct.fr : selectedProduct.en).tagline}"
                </p>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-grow">
                {/* Product Description & Image Grid */}
                <div className="grid md:grid-cols-5 gap-6 items-center">
                  <div className="md:col-span-3">
                    <h4 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                      {language === 'fr' ? 'Présentation du Produit' : 'Product Overview'}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {(language === 'fr' ? selectedProduct.fr : selectedProduct.en).description}
                    </p>
                  </div>
                  <div className="md:col-span-2 aspect-[4/3] rounded-2xl overflow-hidden border border-border-muted shadow-sm bg-surface-container relative">
                    <img 
                      src={selectedProduct.image} 
                      alt={(language === 'fr' ? selectedProduct.fr : selectedProduct.en).name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Grid: Features & Specifications */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Features List */}
                  <div>
                    <h4 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                      {t('products.features')}
                    </h4>
                    <ul className="space-y-3.5">
                      {(language === 'fr' ? selectedProduct.fr : selectedProduct.en).features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          <span className={`material-symbols-outlined text-[20px] shrink-0 mt-0.5 ${
                            selectedProduct.brand === 'ADPRO' ? 'text-primary' : 'text-secondary'
                          }`}>
                            check_circle
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h4 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                      {language === 'fr' ? 'Données Techniques' : 'Technical Data'}
                    </h4>
                    <div className="border border-border-muted rounded-2xl overflow-hidden bg-surface-container-lowest">
                      <table className="w-full text-left font-body-sm text-body-sm">
                        <tbody>
                          {Object.entries((language === 'fr' ? selectedProduct.fr : selectedProduct.en).specifications).map(([key, val], idx) => (
                            <tr key={idx} className="border-b last:border-0 border-border-muted">
                              <td className="p-3.5 font-semibold text-on-surface bg-surface-container-low/50 w-2/5 border-r border-border-muted">
                                {key}
                              </td>
                              <td className="p-3.5 text-on-surface-variant w-3/5">
                                {Array.isArray(val) ? (
                                  <ul className="list-disc pl-4 space-y-1">
                                    {val.map((item, i) => <li key={i}>{item}</li>)}
                                  </ul>
                                ) : (
                                  val
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Interactive Dimension / Option Selector Widget */}
                {(() => {
                  const productData = language === 'fr' ? selectedProduct.fr : selectedProduct.en;
                  const dims = productData.specifications['Available Dimensions'] || 
                               productData.specifications['Available Lengths'] ||
                               productData.specifications['Dimensions Disponibles'] ||
                               productData.specifications['Longueurs Disponibles'];
                  if (dims) {
                    return (
                      <div className="bg-surface-container p-6 rounded-2xl border border-border-muted">
                        <h4 className="font-headline-lg text-body-lg text-on-surface mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-[22px]">format_size</span>
                          {language === 'fr' ? 'Sélectionner la Spécification' : 'Select Package Specification'}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                          {language === 'fr' 
                            ? 'Choisissez parmi nos tailles standard pour pré-remplir votre demande de devis.' 
                            : 'Choose from our standard sizes to pre-fill a sample or quote request.'}
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {(Array.isArray(dims) ? dims : [dims]).map((dim, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedDimension(dim)}
                              className={`px-4 py-2.5 rounded-xl font-label-sm text-label-sm transition-all duration-300 border cursor-pointer ${
                                selectedDimension === dim
                                  ? selectedProduct.brand === 'ADPRO'
                                    ? 'bg-primary border-primary text-white shadow-sm'
                                    : 'bg-secondary border-secondary text-white shadow-sm'
                                  : 'bg-surface hover:bg-surface-container-high text-on-surface-variant border-border-muted'
                              }`}
                            >
                              {dim}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>

              {/* Modal Footer (Action CTAs) */}
              <div className="p-6 md:p-8 bg-surface-container border-t border-border-muted flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-left">
                  <div className="text-label-sm font-label-sm text-on-surface-variant">
                    {language === 'fr' ? 'Vous recherchez une technologie personnalisée ?' : 'Looking for a custom technology?'}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface">
                    {language === 'fr' 
                      ? 'Nous fabriquons des formats, largeurs et impressions personnalisés.' 
                      : 'We manufacture custom sizes, widths and prints.'}
                  </div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-3 rounded-xl border border-border-muted font-label-sm text-label-sm hover:bg-surface-container-high transition-colors bg-surface cursor-pointer"
                  >
                    {language === 'fr' ? 'Fermer' : 'Close'}
                  </button>
                  <Link
                    to={`/contact?product=${encodeURIComponent((language === 'fr' ? selectedProduct.fr : selectedProduct.en).name)}${selectedDimension ? `&spec=${encodeURIComponent(selectedDimension)}` : ''}`}
                    onClick={() => setSelectedProduct(null)}
                    className={`px-6 py-3 rounded-xl font-label-sm text-label-sm text-white shadow-md text-center transition-all flex items-center justify-center gap-1.5 hover:shadow-lg cursor-pointer ${
                      selectedProduct.brand === 'ADPRO'
                        ? 'bg-primary hover:bg-primary-container'
                        : 'bg-secondary hover:bg-secondary-container'
                    }`}
                  >
                    {t('products.requestQuote')}
                    <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
