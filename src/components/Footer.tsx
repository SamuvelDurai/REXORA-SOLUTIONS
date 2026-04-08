import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="text-2xl font-display font-bold text-gradient">
              REXORA
            </a>
            <p className="text-white/40 text-sm max-w-xs text-center md:text-left">
              Crafting digital excellence through innovation and creativity.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-sm text-white/60 hover:text-brand-gold transition-colors">About</a>
            <a href="#services" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Services</a>
            <a href="#team" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Team</a>
            <a href="#blog" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Blog</a>
            <a href="#contact" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Contact</a>
          </div>

          <div className="flex gap-6">
            {/* Social Icons could go here */}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <div>© {currentYear} Rexora Solutions. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
