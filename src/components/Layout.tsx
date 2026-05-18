import { useState, useEffect, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsContactFormSubmitted(true);
    setTimeout(() => {
      setIsContactFormSubmitted(false);
    }, 3000);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed antialiased overflow-x-hidden min-h-screen flex flex-col">
      <header className="bg-surface-container-lowest/80 backdrop-blur-md fixed top-0 w-full shadow-subtle z-50 border-b border-border-muted/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <Link to="/" onClick={closeMenu}>
              <img alt="Tunisie Tape Logo" className="h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAixbv9GUtHkPhQXD09Y-GQDliCL8sJTxeJPA_Xw9WR10PDbaEY9geI_5qfUOLf9iPfuM_JIOWru1edBgvYgBY4us9wyLtwr4X5zWzYAdZfbZtsLx3m2-W41YoYmELmmggBH4QLF_mQjuHQkaclUZNCFiPnbNK7rEOqjMSO6gomWYctHyVD9FvRq2leBQ_aOXHTuBuNvfgiT-V4VT4TVA3AeKAxdiOKXsFwze2AVB45Hcbyt46lHZwVJK2xdmcaX_GcEjM9SPDPmks_" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`font-label-md text-label-md transition-colors ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className={`font-label-md text-label-md transition-colors ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
              {t('nav.about')}
            </Link>
            <Link to="/brands" className={`font-label-md text-label-md transition-colors ${location.pathname === '/brands' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
              {t('nav.brands')}
            </Link>
            <Link to="/contact" className={`font-label-md text-label-md transition-colors ${location.pathname === '/contact' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
              {t('nav.contact')}
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            {/* Premium Bilingual Lang Switcher (FR - EN) */}
            <div className="flex items-center bg-surface-container border border-border-muted/50 rounded-lg p-0.5 font-label-sm text-[13px] font-semibold mr-2 shadow-inner">
              <button 
                onClick={() => setLanguage('fr')} 
                className={`px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer ${
                  language === 'fr' 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                }`}
              >
                FR
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer ${
                  language === 'en' 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                }`}
              >
                EN
              </button>
            </div>
            <Link to="/contact" className="bg-primary hover:bg-secondary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-[1.02] transform">
              {t('nav.getQuote')}
            </Link>
          </div>
          <button 
            className="md:hidden text-on-surface-variant p-2 hover:bg-surface-container rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-surface-container-lowest border-b border-border-muted overflow-hidden"
          >
            <nav className="flex flex-col px-margin-mobile py-4 space-y-4">
              <Link to="/" className={`font-label-md text-label-md block ${location.pathname === '/' ? 'text-primary font-semibold' : 'text-on-surface-variant'}`} onClick={closeMenu}>
                {t('nav.home')}
              </Link>
              <Link to="/about" className={`font-label-md text-label-md block ${location.pathname === '/about' ? 'text-primary font-semibold' : 'text-on-surface-variant'}`} onClick={closeMenu}>
                {t('nav.about')}
              </Link>
              <Link to="/brands" className={`font-label-md text-label-md block ${location.pathname === '/brands' ? 'text-primary font-semibold' : 'text-on-surface-variant'}`} onClick={closeMenu}>
                {t('nav.brands')}
              </Link>
              <Link to="/contact" className={`font-label-md text-label-md block ${location.pathname === '/contact' ? 'text-primary font-semibold' : 'text-on-surface-variant'}`} onClick={closeMenu}>
                {t('nav.contact')}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="pt-3 border-t border-border-muted flex justify-between items-center">
                <span className="font-label-sm text-on-surface-variant text-[13px]">Langue / Language</span>
                <div className="flex items-center bg-surface-container border border-border-muted/50 rounded-lg p-0.5 font-label-sm text-[12px] font-semibold shadow-inner">
                  <button 
                    onClick={() => { setLanguage('fr'); closeMenu(); }} 
                    className={`px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer ${
                      language === 'fr' 
                        ? 'bg-primary text-on-primary shadow-sm' 
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    FR
                  </button>
                  <button 
                    onClick={() => { setLanguage('en'); closeMenu(); }} 
                    className={`px-3 py-1.5 rounded-md transition-all duration-300 cursor-pointer ${
                      language === 'en' 
                        ? 'bg-primary text-on-primary shadow-sm' 
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <Link to="/contact" className="bg-primary text-center hover:bg-secondary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md transition-colors block" onClick={closeMenu}>
                {t('nav.getQuote')}
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="pt-20 flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="bg-surface-container-lowest border-t border-border-muted w-full mt-auto" id="footer">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6 md:col-span-1">
            <img alt="Tunisie Tape Logo" className="h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAixbv9GUtHkPhQXD09Y-GQDliCL8sJTxeJPA_Xw9WR10PDbaEY9geI_5qfUOLf9iPfuM_JIOWru1edBgvYgBY4us9wyLtwr4X5zWzYAdZfbZtsLx3m2-W41YoYmELmmggBH4QLF_mQjuHQkaclUZNCFiPnbNK7rEOqjMSO6gomWYctHyVD9FvRq2leBQ_aOXHTuBuNvfgiT-V4VT4TVA3AeKAxdiOKXsFwze2AVB45Hcbyt46lHZwVJK2xdmcaX_GcEjM9SPDPmks_" />
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              © {new Date().getFullYear()} Tunisie Tape.<br/>{t('footer.allRights')}
            </p>
            <div className="flex flex-col gap-3 text-body-sm font-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2 group">
                <span className="material-symbols-outlined text-[18px] group-hover:text-primary transition-colors">location_on</span>
                <span>Sfax | Tunis | Msaken</span>
              </div>
              <div className="flex items-center gap-2 group">
                <span className="material-symbols-outlined text-[18px] group-hover:text-primary transition-colors">mail</span>
                <a className="hover:text-primary transition-colors" href="mailto:commercial@tunisietape.com">commercial@tunisietape.com</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-label-md font-label-md text-on-surface mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" to="/about">{t('footer.privacy')}</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" to="/about">{t('footer.terms')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-label-md font-label-md text-on-surface mb-4">{t('footer.solutions')}</h4>
            <ul className="space-y-3">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" to="/brands">{t('footer.indSol')}</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" to="/brands">{t('footer.foodPack')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-label-md font-label-md text-on-surface mb-4">{t('footer.quickContact')}</h4>
            <form className="space-y-3" onSubmit={handleContactSubmit}>
              <div>
                <input required className="w-full bg-surface-container rounded-md border-border-muted px-4 py-2 text-body-sm font-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder={t('footer.emailPlaceholder')} type="email" />
              </div>
              <div>
                <textarea required className="w-full bg-surface-container rounded-md border-border-muted px-4 py-2 text-body-sm font-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none" placeholder={t('footer.helpPlaceholder')} rows={2}></textarea>
              </div>
              <button 
                type="submit"
                className={`w-full py-2.5 rounded-md text-label-sm font-label-sm transition-all duration-300 focus:ring-2 focus:ring-primary ring-offset-2 hover:scale-[1.02] shadow-sm flex justify-center items-center gap-2 cursor-pointer ${
                  isContactFormSubmitted 
                    ? 'bg-status-success text-white hover:bg-status-success' 
                    : 'bg-primary hover:bg-primary-container text-on-primary'
                }`}
                disabled={isContactFormSubmitted}
              >
                {isContactFormSubmitted ? (
                  <>
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    {t('footer.successState')}
                  </>
                ) : (
                  t('footer.sendBtn')
                )}
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
