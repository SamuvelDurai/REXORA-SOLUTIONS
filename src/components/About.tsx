import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Your Creative <span className="text-gradient">Digital Partner</span>
          </h3>
          <p className="text-lg text-white/60 leading-relaxed mb-12">
            At Rexora Solutions, we’re more than just a tech company — we’re your creative digital partner. Born from passion and powered by purpose, we specialize in crafting stunning websites, powerful mobile apps, and brand identities that stand out.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
            {[
              "Driven by Innovation & Detail",
              "Startups to Growing Businesses",
              "Impactful Digital Experiences",
              "Result-Oriented Strategies"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-gold" size={20} />
                <span className="text-white/80 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all"
          >
            Learn more about our process <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
