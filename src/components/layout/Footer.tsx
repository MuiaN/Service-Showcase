import { Mail, Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export function Footer() {
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
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              WhatsApp Us
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="mailto:hello@creativestudio.com" 
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-fuchsia-500 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">CS</span>
            </div>
            <span className="font-display font-semibold text-lg">CreativeStudio</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CreativeStudio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
