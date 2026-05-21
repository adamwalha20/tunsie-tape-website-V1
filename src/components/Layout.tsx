import { useState, useEffect, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { sendEmail } from '../utils/emailService';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const [footerEmail, setFooterEmail] = useState('');
  const [footerMessage, setFooterMessage] = useState('');
  const [isFooterSubmitting, setIsFooterSubmitting] = useState(false);
  const [footerSubmitError, setFooterSubmitError] = useState('');
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsFooterSubmitting(true);
    setFooterSubmitError('');

    const result = await sendEmail({
      email: footerEmail,
      message: footerMessage,
      formType: 'footer_quick_contact'
    });

    if (result.success) {
      setIsContactFormSubmitted(true);
      setFooterEmail('');
      setFooterMessage('');
      setTimeout(() => {
        setIsContactFormSubmitted(false);
      }, 4000);
    } else {
      setFooterSubmitError(result.message);
    }
    setIsFooterSubmitting(false);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed antialiased overflow-x-hidden min-h-screen flex flex-col">
      <header className="bg-surface-container-lowest/80 backdrop-blur-md fixed top-0 w-full shadow-subtle z-50 border-b border-border-muted/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <Link to="/" onClick={closeMenu}>
              <img alt="Tunisie Tape Logo" className="h-10 object-contain" src="/header-logo.png" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`font-label-md text-label-md transition-colors ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className={`font-label-md text-label-md transition-colors ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
              {t('nav.about')}
            </Link>
            <Link to="/products" className={`font-label-md text-label-md transition-colors ${location.pathname === '/products' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
              {t('nav.products')}
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
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Header Language Switcher */}
            <div className="flex items-center bg-surface-container border border-border-muted/50 rounded-lg p-0.5 font-label-sm text-[12px] font-semibold shadow-inner">
              <button 
                onClick={() => setLanguage('fr')} 
                className={`px-2 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                  language === 'fr' 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                }`}
              >
                FR
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-2 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                  language === 'en' 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                }`}
              >
                EN
              </button>
            </div>
            <button 
              className="text-on-surface-variant p-2 hover:bg-surface-container rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
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
              <Link to="/products" className={`font-label-md text-label-md block ${location.pathname === '/products' ? 'text-primary font-semibold' : 'text-on-surface-variant'}`} onClick={closeMenu}>
                {t('nav.products')}
              </Link>
              <Link to="/contact" className={`font-label-md text-label-md block ${location.pathname === '/contact' ? 'text-primary font-semibold' : 'text-on-surface-variant'}`} onClick={closeMenu}>
                {t('nav.contact')}
              </Link>



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

      <footer className="bg-slate-900 text-slate-300 border-t-4 border-primary relative overflow-hidden w-full mt-auto shadow-2xl" id="footer">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-6 md:col-span-1 flex flex-col items-start">
            <img alt="Tunisie Tape Logo" className="h-10 md:h-12 w-auto object-contain object-left drop-shadow-2xl hover:scale-105 origin-left transition-transform duration-500 -ml-1" src="/footer-logo.png" />
            <p className="text-body-sm font-body-sm text-slate-400">
              © {new Date().getFullYear()} Tunisie Tape.<br/>{t('footer.allRights')}
            </p>
            <div className="flex flex-col gap-3 text-body-sm font-body-sm text-slate-400">
              <div className="flex items-center gap-2 group cursor-default">
                <span className="material-symbols-outlined text-[18px] group-hover:text-primary transition-colors duration-300">location_on</span>
                <span className="group-hover:text-slate-200 transition-colors">Sfax | Tunis | Msaken</span>
              </div>
              <div className="flex items-center gap-2 group">
                <span className="material-symbols-outlined text-[18px] group-hover:text-primary transition-colors duration-300">mail</span>
                <a className="hover:text-primary hover:tracking-wide transition-all duration-300" href="mailto:commercial@tunisietape.com">commercial@tunisietape.com</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-label-md font-label-md text-white mb-6 uppercase tracking-wider text-sm">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-400 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 text-body-sm font-body-sm" to="/about">{t('footer.privacy')}</Link></li>
              <li><Link className="text-slate-400 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 text-body-sm font-body-sm" to="/about">{t('footer.terms')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-label-md font-label-md text-white mb-6 uppercase tracking-wider text-sm">{t('footer.solutions')}</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-400 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 text-body-sm font-body-sm" to="/products?category=tapes">{t('footer.indSol')}</Link></li>
              <li><Link className="text-slate-400 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300 text-body-sm font-body-sm" to="/products?category=packaging">{t('footer.foodPack')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-label-md font-label-md text-white mb-6 uppercase tracking-wider text-sm">{t('footer.quickContact')}</h4>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              {footerSubmitError && (
                <div className="bg-error/20 border border-error/50 text-error-container rounded-md p-2 text-[12px] flex items-center gap-1.5 animate-pulse">
                  <span className="material-symbols-outlined text-[14px]">error</span>
                  <span>{footerSubmitError}</span>
                </div>
              )}
              <div>
                <input 
                  required 
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  disabled={isFooterSubmitting || isContactFormSubmitted}
                  className="w-full bg-slate-800/50 backdrop-blur-sm rounded-md border border-slate-700/50 px-4 py-2.5 text-body-sm font-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed text-white placeholder:text-slate-500 shadow-inner" 
                  placeholder={t('footer.emailPlaceholder')} 
                  type="email" 
                />
              </div>
              <div>
                <textarea 
                  required 
                  value={footerMessage}
                  onChange={(e) => setFooterMessage(e.target.value)}
                  disabled={isFooterSubmitting || isContactFormSubmitted}
                  className="w-full bg-slate-800/50 backdrop-blur-sm rounded-md border border-slate-700/50 px-4 py-2.5 text-body-sm font-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed text-white placeholder:text-slate-500 shadow-inner" 
                  placeholder={t('footer.helpPlaceholder')} 
                  rows={2}
                ></textarea>
              </div>
              <button 
                type="submit"
                className={`w-full py-2.5 rounded-md text-label-sm font-label-sm transition-all duration-300 focus:ring-2 focus:ring-primary ring-offset-2 ring-offset-slate-900 hover:-translate-y-0.5 shadow-lg flex justify-center items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
                  isContactFormSubmitted 
                    ? 'bg-status-success text-white hover:bg-status-success shadow-status-success/20' 
                    : 'bg-primary hover:bg-secondary text-white shadow-primary/30'
                }`}
                disabled={isFooterSubmitting || isContactFormSubmitted}
              >
                {isFooterSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'fr' ? 'Envoi...' : 'Sending...'}
                  </>
                ) : isContactFormSubmitted ? (
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
