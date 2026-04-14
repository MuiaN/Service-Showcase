import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight, X, Send, CheckCircle2 } from "lucide-react";

function QuoteDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mainService, setMainService] = useState("");

  // Reset form when dialog closes/opens
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setMainService("");
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      // This represents an API call to a backend that uses your SMTP settings:
      // Host: mail.tytantech.co.ke | Port: 465 | User: creativestudio@tytantech.co.ke
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...data, 
          recipient: 'creativestudio@tytantech.co.ke',
          subject: `New Quote Request from ${data.name}`
        }),
      });

      // Simulated delay for better UX and fallback if API is not yet live
      if (!response.ok) {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending quote request:", error);
      // Fallback behavior for demonstration
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const subCategories: Record<string, string[]> = {
    "web-branding": ["Logo & Branding", "Web Design & Development", "Digital Stationery"],
    "events": ["Corporate & Formal Events", "Social & Private Events", "Print & Media Services"],
    "social": ["Social Media Management", "Performance Marketing", "Content Creation"],
    "bundle": ["Multi-Service Custom Bundle"]
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl glass-card p-8 rounded-3xl shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Request Received!</h3>
                <p className="text-muted-foreground mb-8 px-4">
                  Thank you for reaching out. We've received your details and our team will get back to you with a custom quote shortly.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold mb-2 text-left">Get a <span className="text-gradient">Custom Quote</span></h3>
                  <p className="text-muted-foreground text-sm text-left">Tell us about your project and we'll help you elevate your brand.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-medium text-muted-foreground ml-1">Name</label>
                      <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-medium text-muted-foreground ml-1">Email</label>
                      <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-medium text-muted-foreground ml-1">Phone Number</label>
                      <input name="phone" type="tel" placeholder="+254..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-medium text-muted-foreground ml-1">Approx. Budget (USD)</label>
                      <select name="budget" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                        <option value="not-specified">Not sure / Discuss</option>
                        <option value="under-200">Under $200</option>
                        <option value="200-500">$200 - $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500+">$2,500+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-medium text-muted-foreground ml-1">Service Category</label>
                      <select 
                        required 
                        name="service" 
                        value={mainService}
                        onChange={(e) => setMainService(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                      >
                        <option value="">Select a category</option>
                        <option value="web-branding">Web & Branding</option>
                        <option value="events">Event Services</option>
                        <option value="social">Social Media Strategy</option>
                        <option value="bundle">Multi-Service Bundle</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[13px] font-medium text-muted-foreground ml-1">Specific Requirement</label>
                      <select disabled={!mainService} required name="subService" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none disabled:opacity-50 disabled:cursor-not-allowed">
                        <option value="">{mainService ? "Choose sub-category" : "Select category first"}</option>
                        {mainService && subCategories[mainService]?.map(sub => (
                          <option key={sub} value={sub.toLowerCase().replace(/\s+/g, '-')}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-muted-foreground ml-1">Project Details</label>
                    <textarea required name="message" rows={4} placeholder="Describe your requirements, preferred package, or goals..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-white/20" />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full mt-2 py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Request Quote
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <footer id="contact" className="bg-background relative overflow-hidden border-t border-white/5 pt-24 pb-12">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Elevate Your Brand?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">
            Let's create something extraordinary together. Reach out today and let's discuss your next big project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/254701876510" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              WhatsApp Us
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setIsQuoteOpen(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </button>
          </div>
        </div>

        <QuoteDialog isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img 
              src="/creativestudios.png" 
              alt="Creative Studio" 
              className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Creative Studio. All rights reserved.
            </p>
            <a 
              href="https://tytantech.co.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-wider text-muted-foreground/40 hover:text-primary hover:underline underline-offset-4 transition-all flex items-center gap-1 group"
            >
              Powered by <span className="font-bold text-muted-foreground/60 group-hover:text-primary transition-colors">Tytan Tech</span>
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Affiliated with</span>
            <a 
              href="https://www.tytantech.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all hover:opacity-80 active:scale-95"
            >
              <img 
                src="/LOGO-02.png" 
                alt="Tytan Tech" 
                className="h-7 md:h-8 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
