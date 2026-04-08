import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-brand-gold/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">Our Products</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-6">Something Big is <span className="text-gradient">Coming Soon</span></h3>
            <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
              We're building powerful tools to revolutionize your digital workflow. Be the first to know when we launch.
            </p>

            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-brand-gold transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-full hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
              >
                Join Waitlist <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
