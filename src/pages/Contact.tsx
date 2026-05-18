import { useState, useEffect, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product');
  const specParam = searchParams.get('spec');
  const { language, t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (productParam) {
      if (language === 'fr') {
        setSubject(`Demande de Devis : ${productParam}`);
        let msg = `Bonjour l'équipe Tunisie Tape,\n\nJe souhaite obtenir un devis de prix et des échantillons pour le produit suivant :\n- Produit : ${productParam}`;
        if (specParam) {
          msg += `\n- Dimension / Spécification : ${specParam}`;
        }
        msg += `\n\nVeuillez m'indiquer vos tarifs et conditions de livraison.\n\nCordialement,`;
        setMessage(msg);
      } else {
        setSubject(`Quote Request: ${productParam}`);
        let msg = `Hello Tunisie Tape Team,\n\nI would like to request a price quote and samples for the following product:\n- Product: ${productParam}`;
        if (specParam) {
          msg += `\n- Sizing/Specification: ${specParam}`;
        }
        msg += `\n\nPlease let me know the pricing and delivery terms.\n\nBest regards,`;
        setMessage(msg);
      }
    }
  }, [productParam, specParam, language]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setFullName('');
    setEmailAddress('');
    setSubject('');
    setMessage('');
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 4000);
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h1 variants={fadeInUp} className="font-display-lg text-display-lg text-on-surface mb-6">
              {t('contact.title')}
              <span className="text-primary">{t('contact.titleHighlight')}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {t('contact.subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            
            {/* Contact Form Left Side */}
            <motion.div 
              className="lg:col-span-3 bg-surface p-8 md:p-12 rounded-2xl border border-border-muted shadow-subtle relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">{t('contact.formHeading')}</h2>
              
              {isFormSubmitted ? (
                 <div className="bg-status-success/10 border border-status-success/30 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <div className="w-16 h-16 bg-status-success text-white rounded-full flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">{t('contact.successHeading')}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{t('contact.successDesc')}</p>
                 </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="fullName">{t('contact.fullName')}</label>
                      <input 
                        required id="fullName" type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-surface-container rounded-lg border border-border-muted px-4 py-3.5 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder={t('contact.fullNamePlaceholder')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="emailAddress">{t('contact.emailAddress')}</label>
                      <input 
                        required id="emailAddress" type="email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="w-full bg-surface-container rounded-lg border border-border-muted px-4 py-3.5 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="subject">{t('contact.subject')}</label>
                    <input 
                      required id="subject" type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-surface-container rounded-lg border border-border-muted px-4 py-3.5 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder={t('contact.subjectPlaceholder')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="message">{t('contact.message')}</label>
                    <textarea 
                      required id="message" rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-surface-container rounded-lg border border-border-muted px-4 py-3.5 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-y"
                      placeholder={t('contact.messagePlaceholder')}
                    ></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-lg font-label-md text-label-md transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {t('contact.sendBtn')} <span className="material-symbols-outlined text-[18px]">send</span>
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Direct Contact Right Side */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <div className="bg-primary text-on-primary p-8 rounded-2xl shadow-lg relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                
                <h3 className="font-headline-lg text-headline-lg mb-6 relative z-10">{t('contact.directContact')}</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start">
                     <span className="material-symbols-outlined mt-1 text-on-primary/80">call</span>
                     <div>
                       <p className="font-label-sm text-label-sm text-on-primary/70 mb-1">{t('contact.phone')}</p>
                       <p className="font-body-lg text-body-lg">+216 74 287 222</p>
                     </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                     <span className="material-symbols-outlined mt-1 text-on-primary/80">mail</span>
                     <div>
                       <p className="font-label-sm text-label-sm text-on-primary/70 mb-1">{t('contact.commercial')}</p>
                       <p className="font-body-lg text-body-lg break-all">commercial@tunisietape.com</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="grid gap-4">
                <motion.div whileHover={{ scale: 1.02, x: 5 }} className="bg-surface-container-lowest p-6 rounded-xl border border-border-muted shadow-subtle flex gap-4 transition-all hover:shadow-md">
                  <div className="text-primary mt-0.5">
                    <span className="material-symbols-outlined">location_city</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">{t('contact.sfaxHeadquarters')}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant whitespace-pre-line">{t('contact.sfaxAddress')}</p>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02, x: 5 }} className="bg-surface-container-lowest p-6 rounded-xl border border-border-muted shadow-subtle flex gap-4 transition-all hover:shadow-md">
                  <div className="text-secondary mt-0.5">
                    <span className="material-symbols-outlined">storefront</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">{t('contact.tunisBranch')}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant whitespace-pre-line">{t('contact.tunisAddress')}</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02, x: 5 }} className="bg-surface-container-lowest p-6 rounded-xl border border-border-muted shadow-subtle flex gap-4 transition-all hover:shadow-md">
                  <div className="text-secondary mt-0.5">
                    <span className="material-symbols-outlined">warehouse</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">{t('contact.msakenFacility')}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant whitespace-pre-line">{t('contact.msakenAddress')}</p>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
