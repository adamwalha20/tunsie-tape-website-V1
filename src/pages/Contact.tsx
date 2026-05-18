import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 4000);
  };

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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h1 variants={fadeInUp} className="font-display-lg text-display-lg text-on-surface mb-6">
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Whether you have a question about our industrial adhesive solutions or need a custom quote, our team is ready to assist you.
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
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Send us a Message</h2>
              
              {isFormSubmitted ? (
                 <div className="bg-status-success/10 border border-status-success/30 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <div className="w-16 h-16 bg-status-success text-white rounded-full flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Message Received</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Thank you for reaching out. We will get back to you shortly.</p>
                 </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="fullName">Full Name</label>
                      <input 
                        required id="fullName" type="text"
                        className="w-full bg-surface-container rounded-lg border border-border-muted px-4 py-3.5 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="emailAddress">Email Address</label>
                      <input 
                        required id="emailAddress" type="email"
                        className="w-full bg-surface-container rounded-lg border border-border-muted px-4 py-3.5 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="subject">Subject</label>
                    <input 
                      required id="subject" type="text"
                      className="w-full bg-surface-container rounded-lg border border-border-muted px-4 py-3.5 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="message">Message</label>
                    <textarea 
                      required id="message" rows={5}
                      className="w-full bg-surface-container rounded-lg border border-border-muted px-4 py-3.5 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-y"
                      placeholder="Describe your inquiry..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-lg font-label-md text-label-md transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-[1.02] shadow-sm flex items-center justify-center gap-2"
                  >
                    Send Message <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
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
                
                <h3 className="font-headline-lg text-headline-lg mb-6 relative z-10">Direct Contact</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start">
                     <span className="material-symbols-outlined mt-1 text-on-primary/80">call</span>
                     <div>
                       <p className="font-label-sm text-label-sm text-on-primary/70 mb-1">Phone</p>
                       <p className="font-body-lg text-body-lg">+216 74 287 222</p>
                     </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                     <span className="material-symbols-outlined mt-1 text-on-primary/80">mail</span>
                     <div>
                       <p className="font-label-sm text-label-sm text-on-primary/70 mb-1">Commercial Inquiries</p>
                       <p className="font-body-lg text-body-lg break-all">commercial@tunisietape.com</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="grid gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-muted shadow-subtle flex gap-4">
                  <div className="text-primary mt-0.5">
                    <span className="material-symbols-outlined">location_city</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">Sfax Headquarters</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Siège & Production<br/>Route de Mahdia Km 10</p>
                  </div>
                </div>
                
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-muted shadow-subtle flex gap-4">
                  <div className="text-secondary mt-0.5">
                    <span className="material-symbols-outlined">storefront</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">Tunis Branch</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Dépôt Commercial</p>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-muted shadow-subtle flex gap-4">
                  <div className="text-secondary mt-0.5">
                    <span className="material-symbols-outlined">warehouse</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">Msaken Facility</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Dépôt Commercial</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
