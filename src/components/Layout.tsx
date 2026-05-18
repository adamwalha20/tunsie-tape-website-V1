import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const location = useLocation();

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
            <Link to="/" className={`font-label-md text-label-md transition-colors ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>Home</Link>
            <Link to="/about" className={`font-label-md text-label-md transition-colors ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>About</Link>
            <Link to="/brands" className={`font-label-md text-label-md transition-colors ${location.pathname === '/brands' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>Brands</Link>
            <Link to="/contact" className={`font-label-md text-label-md transition-colors ${location.pathname === '/contact' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="bg-primary hover:bg-secondary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-[1.02] transform">Get Quote</Link>
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
              <Link to="/" className="text-primary font-label-md text-label-md block" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md block" onClick={closeMenu}>About</Link>
              <Link to="/brands" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md block" onClick={closeMenu}>Brands</Link>
              <Link to="/contact" className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md block" onClick={closeMenu}>Contact</Link>
              <Link to="/contact" className="bg-primary text-center hover:bg-secondary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md transition-colors block" onClick={closeMenu}>Get Quote</Link>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="pt-20 flex-grow">
        <Outlet />
      </main>

      <footer className="bg-surface-container-lowest border-t border-border-muted w-full mt-auto" id="footer">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6 md:col-span-1">
            <img alt="Tunisie Tape Logo" className="h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAixbv9GUtHkPhQXD09Y-GQDliCL8sJTxeJPA_Xw9WR10PDbaEY9geI_5qfUOLf9iPfuM_JIOWru1edBgvYgBY4us9wyLtwr4X5zWzYAdZfbZtsLx3m2-W41YoYmELmmggBH4QLF_mQjuHQkaclUZNCFiPnbNK7rEOqjMSO6gomWYctHyVD9FvRq2leBQ_aOXHTuBuNvfgiT-V4VT4TVA3AeKAxdiOKXsFwze2AVB45Hcbyt46lHZwVJK2xdmcaX_GcEjM9SPDPmks_" />
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              © {new Date().getFullYear()} Tunisie Tape.<br/>All rights reserved.
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
            <h4 className="text-label-md font-label-md text-on-surface mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" to="/about">Privacy Policy</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" to="/about">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-label-md font-label-md text-on-surface mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" to="/brands">Industrial Solutions</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-sm font-body-sm" to="/brands">Food Packaging</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-label-md font-label-md text-on-surface mb-4">Quick Contact</h4>
            <form className="space-y-3" onSubmit={handleContactSubmit}>
              <div>
                <input required className="w-full bg-surface-container rounded-md border-border-muted px-4 py-2 text-body-sm font-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Your Email" type="email" />
              </div>
              <div>
                <textarea required className="w-full bg-surface-container rounded-md border-border-muted px-4 py-2 text-body-sm font-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none" placeholder="How can we help?" rows={2}></textarea>
              </div>
              <button 
                type="submit"
                className={`w-full py-2.5 rounded-md text-label-sm font-label-sm transition-all duration-300 focus:ring-2 focus:ring-primary ring-offset-2 hover:scale-[1.02] shadow-sm flex justify-center items-center gap-2 ${
                  isContactFormSubmitted 
                    ? 'bg-status-success text-white hover:bg-status-success' 
                    : 'bg-primary hover:bg-primary-container text-on-primary'
                }`}
                disabled={isContactFormSubmitted}
              >
                {isContactFormSubmitted ? (
                  <>
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    Message Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
